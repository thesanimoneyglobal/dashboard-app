import {useLocation} from "react-router-dom";

export function Pathname() {
   const location = useLocation()
   const pathname = location.pathname.slice(1)

   return {pathname}
}

export default Pathname;