import { FC, useState } from "react";
import ParentComp from "../components/ParentComp";
import GradientText from "../components/GradientText";
import {
  navLinks,
  rightAnimation,
  leftAnimation,
  appearAnimation,
} from "../lib/framer-motion-utils";
import { motion } from "framer-motion";
import axios, {  AxiosError } from "axios";
import { toast, Bounce } from "react-toastify";
import SubmitLoader from "../components/SubmitLoader";
type FormDetailsType = {
  name: string;
  email: string;
  message: string;
};

const Contact: FC = () => {
  const [formDetails, setFormDetails] = useState<FormDetailsType>({
    name: "",
    email: "",
    message: "",
  });
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { name, email, message } = formDetails;

  function isValidEmail(): void {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsEmailValid(isValid);
  }

  function editFormDetails(type: string, details: string): void {
    setIsEmailValid(true);
    setFormDetails({
      ...formDetails,
      [type]: details,
    });
  }

  const handleSubmit = async(e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    const templateId = import.meta.env.VITE_REACT_TEMPLATE_ID;
    const serviceId = import.meta.env.VITE_REACT_SERVICE_ID;
    const publicKey = import.meta.env.VITE_REACT_PUBLIC_KEY;
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Clinton",
      message,
    };
    if (isEmailValid) {
        try {
            setIsLoading(true);
            const response = await axios.post(
              `https://api.emailjs.com/api/v1.0/email/send`,
              {
                service_id: serviceId,
                template_id: templateId,
                user_id: publicKey,
                template_params: templateParams,
              }
            );
            if (response?.status === 200) {
                 toast.success("Message sent successfully", {
                   position: "top-center",
                   autoClose: 5000,
                   hideProgressBar: false,
                   closeOnClick: true,
                   pauseOnHover: true,
                   draggable: true,
                   progress: undefined,
                   theme: "light",
                   transition: Bounce,
                 });
                 setIsEmailValid(true);
                 setFormDetails({
                   name: "",
                   email: "",
                   message: "",
                 });
            }
        } catch (err ) {
            const error = err as AxiosError;
toast.error("Failed to send message", {
  position: "top-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Bounce,
});
console.log(error.message)
        } finally {
            setIsLoading(false)
        }
      
    }
  };

  return (
    <ParentComp landingHeading="Contact-me" landingText="SAY HELLO TO ME">
      <GradientText heading="Contact me" isContactPage={true}>
        <motion.form
          onSubmit={handleSubmit}
          className="w-full  *:flex *:flex-col *:gap-4 text-black flex flex-wrap gap-y-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={leftAnimation} className="sm:w-1/2 w-full">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              spellCheck="false"
              className="border-x-0 border-t-0 border-b-4 border-black w-full sm:w-[80%] outline-none px-2"
              required
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                editFormDetails("name", e.target.value)
              }
            />
          </motion.div>
          <motion.div
            variants={rightAnimation}
            className="sm:w-1/2 w-full sm:items-end "
          >
            <label htmlFor="email" className="w-full sm:w-[80%] text-left">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              spellCheck="false"
              className="border-x-0 border-t-0 border-b-4 border-black w-full sm:w-[80%] outline-none px-2"
              required
              onBlur={isValidEmail}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                editFormDetails("email", e.target.value)
              }
            />
          </motion.div>
          <motion.div variants={navLinks} className="w-full ">
            <label htmlFor="message">Message</label>
            <textarea
              name=""
              id="message"
              rows={4}
              value={message}
              spellCheck="false"
              className=" border-4 rounded-md border-black outline-none px-2 "
              required
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                editFormDetails("message", e.target.value)
              }
            ></textarea>
          </motion.div>
          <div className="min-h-[40px] w-full ">
            {!isEmailValid && (
              <p className="text-sm text-red-900">
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div className="flex items-center justify-center pt-4 gap-4 md:gap-8 w-full  flex-wrap ">
            <motion.button
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              type="submit"
              variants={appearAnimation}
              className="Btn   text-sm font-normal"
              id="submit_btn"
            >
              Submit  {isLoading && <SubmitLoader />}
            </motion.button>
          </div>
        </motion.form>
      </GradientText>
    </ParentComp>
  );
};

export default Contact;
