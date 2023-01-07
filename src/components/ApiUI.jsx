// @unocss-include
import { render, Fragment } from "preact"
import { useEffect, useRef } from "preact/hooks" //useCallback
//import UserHandler from './UserHandler' //not work to import esm modules by CDN using alias in vite.config
//import useOpts from './useOpts' //not work for using zustand on Astro
/* TypeError: Cannot read properties of null (reading 'useRef')
    at useRef (/home/odbadmin/proj/astro/node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js:1630:21)
*/
import { signal } from "@preact/signals"
const openSignin = signal(false)

const ApiUI = (props) => {
  //const openSignin= useOpts(useCallback(state => state.openSignin, []))
  //const [state, setState] = useState(false)
  const divRef = useRef(null)

  const toggleOpenSignin = () => {
    //useOpts.getState().setOpts({openSignin: !openSignin})
    openSignin.value = !openSignin.value
  }

  useEffect(() => {
    //if (!state) {
    //  setState(true)
    //}
    if (divRef.current) {
        console.log("Initial button under: ", document.title)
        render(
          <button class="i-carbon-face-cool dark:i-carbon-face-wink-filled dark:text-white fill-white"
                  onClick={toggleOpenSignin} />,
          document.getElementById("toolbardiv"))
    }
  },[divRef.current])
/*
  const render_loginctrl = () => {
    //if (state) {
      return(
        render(
          <button class="i-carbon-face-cool dark:i-carbon-face-wink-filled dark:text-white fill-white"
                  onClick={toggleOpenSignin} />,
          document.getElementById("toolbardiv"))
      )
    //} else {
    //  return null
    //}
  }
*/
/*
  const render_userhandler = () => {
    return(
      render(
        <> { openSignin && <UserHandler /> }
        </>, document.getElementById("xlogindiv"))
    )
  }
//    { render_userhandler() }
*/
//    { render_loginctrl() }
  return(
    <Fragment>
      <div ref={divRef} id='userCookieContainer' />
    </Fragment>
  )
}
export default ApiUI

