import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
const Nav = () => {
    return(
    <nav className="text-slate-500 navbar text-sm font-light flex justify-between w-full items-center h-14">
        <Link to="/" className="flex items-center">
            <Icon icon="emojione:star" width="20px"/>
            <span  className=" ml-2 ">Portfolio</span>
        </Link>
        <Link to="/">
            <span>Coins</span>
        </Link>
        <Link to="/">
            <span>Recently Added</span>
        </Link>
        <Link to="/">
            <span>Large</span>
        </Link>
    </nav>
    )
}
export default Nav