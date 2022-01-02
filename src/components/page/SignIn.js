import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { signInUser,signOutUser } from "../services/firebaseServices"
const SignIn = (props) => {
    return(
        <div id="signin" className="px-3 py-5">
              <div className="flex flex-column  items-center pb-2">
                <Icon onClick={props.setSignIn} className='cursor-pointer'  icon="bi:x" width="35" height="35" />
                    <Link className='w-full flex justify-center items-center  px-3' to="/">
                    <img className='w-40' src={require("/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png")}></img>
                    </Link>
                </div>
                    <div id="usermenu">
                    <Link  to="/portfolio">
                        <div id='asd' className='flex justify-between items-center py-5 b-2 border-b '>
                            Portfolio
                            <Icon icon="ant-design:caret-down-outlined" />

                        </div>
                    </Link>
                    <a  href='/' className='font-light  '> 
                        <div id='asd' className='flex justify-between items-center py-5 b-2 border-b '>
                            Price alert
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' className='font-light  '> 
                        <div id='asd' className='flex justify-between items-center py-5 b-2  border-b'>
                            My Candies
                            <Icon icon="ant-design:caret-down-outlined" />

                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Rewards
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Login and Security
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' className='font-light  '> 
                        <div id='asd' className='flex justify-between items-center py-5 b-2 border-b '>
                            Subscription
                            <Icon icon="ant-design:caret-down-outlined" />

                        </div>
                    </a>
                    <a onClick={signOutUser}  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Sign out
                        </div>
                    </a>
                   
                    
                </div>
            
                    <div id="signincontainer" className="w-100 h-72 py-5">
                        <div >
                            <h1 className="text-2xl">Log in</h1>
                            <span>With:</span>
                        </div>
                        <div className="flex h-full w-full py-4">
                        <div onClick={signInUser} className="flex  items-center w-full px-2 border h-12  cursor-pointer">
                        <Icon  icon="flat-color-icons:google" />
                            <span className="pl-4">Google</span>
                        </div>
                        </div>
                    </div>
                
               
        </div>
    )
}
export default SignIn