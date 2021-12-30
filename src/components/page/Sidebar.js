import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
const sideBarMenuNames = [
    {name:"Home",details:false},
    {name:"Subscribe",details:false},
    {name:"Coins",details:true},
    {name:"Exchanges",details:true},
    {name:"Defi",details:false},
    {name:"NFT",details:true},
    {name:"Portfolio",details:false},
    {name:"Publications",details:true},
    {name:"Resources",details:true},
    {name:"Products",details:true},
    {name:"CoinGecko",details:true},
    {name:"Help",details:true},

]


const Sidebar = (props) => {
    return(
        <div id='sideBar' className="modal-side p-4 flex flex-column h-sm-100" >
            <div className='w-full'>
                <div className="modal-side mb- flex flex-column h-sm-100 items-center pb-2">
                <Icon className='cursor-pointer' onClick={props.setSideBar} icon="bi:x" width="35" height="35" />
                    <Link className='w-full flex justify-center items-center  px-3' to="/">
                    <img className='w-40' src={require("/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png")}></img>
                    </Link>
                </div>
                <div>
                    {sideBarMenuNames.map((object,index) => {
                        if(object.details){
                            return(
                                <a key={index} href='/' 
                                className='font-light '>
                                    <div className='flex justify-between items-center py-5 border-bottom'>
                                        {object.name}
                                        <Icon icon="ant-design:caret-down-outlined" />
                                    </div>
                                </a>
                                
                            )
                        } else {
                            return(
                                <a key={index} href='/' className='font-light  '> 
                                    <div className='flex justify-between items-center py-5 b-2  border-bottom'>
                                        {object.name}
                                    </div>
                                </a>
                                    
                            )
                        }
                    })}
                </div>
                
            </div>
        </div>
    )
}
export default Sidebar