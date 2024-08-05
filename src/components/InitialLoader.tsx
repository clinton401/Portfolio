import {FC, useEffect} from 'react'
import logo from "../assets/software-developer.png";

import { scrollToTop } from '../lib/utils';
const InitialLoader: FC = () => {
    useEffect(() => {
        scrollToTop()
    }, [])
  return (
    <main className="w-full h-dvh bg-black flex flex-col items-center justify-center gap-4">
      <img src={logo} alt="logo"  className="w-[60px] object-cover "/>
 
<div className="loaderRectangle">
<div></div>
<div></div>
<div></div>
<div></div>
<div></div>
</div>
    </main>
  )
}

export default InitialLoader
