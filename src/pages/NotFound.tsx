import {FC, useContext} from 'react'
import { MyContext } from '../ContextComp';

const NotFound: FC = () => {
    const contents = useContext(MyContext)
  return (
    <main className="w-full h-dvh min-h-[400px] flex flex-col justify-center items-center gap-4">
      <h2 className="font-[900] font-cinzel text-2xl text-center w-full">
        404 - PAGE NOT FOUND
      </h2>
      <p className="w-full ipad:w-3/4 text-center">
        The page you are looking for might have been removed had its name
        changes or is temporary unavailable{" "}
      </p>
      <button
        className="resume_btn "
        onClick={() => {
          contents?.navigation(`/`);
        }}
      >
        GO TO HOMEPAGE
        <div className="star-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "crisp-edges",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "crisp-edges",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "crisp-edges",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "crisp-edges",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "crisp-edges",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="star-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlSpace="preserve"
            version="1.1"
            style={{
              shapeRendering: "geometricPrecision",
              textRendering: "geometricPrecision",
              imageRendering: "crisp-edges",
              fillRule: "evenodd",
              clipRule: "evenodd",
            }}
            viewBox="0 0 784.11 815.53"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <defs></defs>
            <g id="Layer_x0020_1">
              <metadata id="CorelCorpID_0Corel-Layer"></metadata>
              <path
                className="fil0"
                d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
              ></path>
            </g>
          </svg>
        </div>
      </button>
    </main>
  );
}

export default NotFound
