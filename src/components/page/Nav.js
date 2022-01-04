import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { useState,useEffect } from "react"
import store from "../redux/store"
import { signInUser } from "../services/firebaseServices"
const Nav = () => {
    const [uid,setUidUser] = useState(null)
    useEffect(() => {
        store.subscribe((data) => setUidUser(store.getState().user.uid))
    },)
    return(
        <div className="overflow-auto nowrap xl:flex xl:justify-start border-b ">
            <div >
                <nav className="text-slate-500 navbar text-sm font-light flex justify-between whitespace-nowrap items-center h-14 ">
                {uid === null?(
                    <div className="h-full item-nav-bar flex items-center cursor-pointer" onClick={signInUser}>
                    <Icon icon="emojione:star" width="20px"/>
                        <span  className=" ml-2 ">Portfolio</span>
                    </div>
                ):(
                    <Link to="/portfolio" className="h-full item-nav-bar flex items-center">
                    <Icon icon="emojione:star" width="20px"/>
                        <span  className=" ml-2 ">Portfolio</span>
                    </Link>
                )}
                   
                    <Link className="py-4 h-full item-nav-bar ml-7" to="/">
                        <span>Coins</span>
                    </Link>
                    <Link className="py-4 h-full item-nav-bar ml-7" to="/">
                        <span>Recently Added</span>
                    </Link>
                    <Link className="py-4 h-full item-nav-bar ml-7" to="/">
                        <span>Large Movers</span>
                    </Link>
                    <Link className="py-4 h-full item-nav-bar ml-7" to="/categories">
                        <span>Categories</span>
                    </Link>
                    <Link className="py-4 my-3 h-full item-nav-bar ml-7" to="/">
                        <span>Custom Tabs</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
export default Nav