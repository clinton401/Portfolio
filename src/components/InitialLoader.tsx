import {FC, useEffect} from 'react'
// import logo from "../assets/software-developer.png";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCode } from '@fortawesome/free-solid-svg-icons';
import { scrollToTop } from '../lib/utils';
const InitialLoader: FC = () => {
    useEffect(() => {
        scrollToTop()
    }, [])
  return (
    <main className="w-full h-dvh bg-black flex flex-col items-center z-[1000] fixed top-0 left-0 justify-center gap-4">
      {/* <img src={logo} alt="logo"  className="w-[60px] object-cover "/> */}
      {/* <div className="w-[50px] aspect-square bg-[#1838D8] rounded-md text-2xl flex items-center justify-center">
      <FontAwesomeIcon icon={faCode} style={{color: "#ffffff",}} />
      </div>
 */}
<div className="loader-name *:font-cinzel">
    <span>Clinton</span>
    <span>Clinton</span>
</div>
    </main>
  )
}

export default InitialLoader
