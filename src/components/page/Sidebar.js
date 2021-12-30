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
                <div className="flex flex-column  items-center pb-2">
                <Icon className='cursor-pointer' onClick={props.setSideBar} icon="bi:x" width="35" height="35" />
                    <Link className='w-full flex justify-center items-center  px-3' to="/">
                    <img className='w-40' src={require("/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png")}></img>
                    </Link>
                </div>
                <div>
                    <a  href='/' className='font-light  '> 
                        <div id='asd' className='flex justify-between items-center py-5 b-2 border-b '>
                            Home
                        </div>
                    </a>
                    <a  href='/' className='font-light  '> 
                        <div id='asd' className='flex justify-between items-center py-5 b-2  border-b'>
                            Subscribe
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Coins
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Exchanges
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' className='font-light  '> 
                        <div id='asd' className='flex justify-between items-center py-5 b-2 border-b '>
                            Defi
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            NFT
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <Link onClick={props.setSideBar} to="/portfolio">
                        <div id='asd' className='flex justify-between items-center py-5 b-2 border-b '>
                            Portfolio
                        </div>
                    </Link>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Publications
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5 border-b '>
                            Resources
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Products
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            CoinGecko
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                    <a  href='/' 
                    className='font-light '>
                        <div id='asd' className='flex justify-between items-center py-5  border-b'>
                            Help
                            <Icon icon="ant-design:caret-down-outlined" />
                        </div>
                    </a>
                </div>
                
            </div>
        </div>
    )
}
export default Sidebar