import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
let Header = (props) => {
  
    return(
        <header>
            <div className='w-full h-28 flex flex-col justify-center py-2 px-4'>
                <div className='flex justify-between'>
                    <div >
                        <Icon onClick={props.setSideBar} className='cursor-pointer' icon="heroicons-outline:menu"         width="30" height="40" />
                    </div>
                        <img className='h-9 cursor-pointer' alt='logo' src={require('/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png')}>
                    </img>
                    <div className='flex items-center '>
                        <Icon  className='pr-2 cursor-pointer mb-1' icon="bi:bookmark-fill" width="30" height="25"/>
                        <Icon className='mb-1 cursor-pointer' icon="carbon:user-filled" color="black" width="30" height="40"/>
                    </div>
                </div>
                <span  className='input-header flex h-10 cursor-pointer  items-center justify-between py-1 px-3'>
                    <span className='font-light '>
                        Search
                    </span>
                    <Icon className='float-right' icon="radix-icons:magnifying-glass" color="#828282" width="20" height="25" />
                </span>
            </div>
            <div className='header-data w-full flex justify-evenly text-xs font-medium h-10 items-center py-3'>
            <div className='overflow-auto container  px-5 translate-y-2'>
                    <div className='flex flex-row text-2xs pb-3 whitespace-nowrap'>
                        <div className='mr-3 flex'>
                            <span className='font-bold' >Coins</span>
                            :
                            <a href='/'>Example</a>
                        </div>
                        <div className='mr-3 flex'>
                            <span className='font-bold' >Exchanges</span>
                            :
                            <a href='/'>Example</a>
                        </div>
                        <div className='mr-3 flex'>
                            <span className='font-bold inline-block' >Market Cap</span>
                            :
                            <a href='/'>Example</a>
                        </div>
                        <div className='mr-3 flex'>
                            <span className='font-bold' >24h Vol</span>
                            :
                            <a href='/'>Example</a>
                        </div>
                        <div className='mr-3 flex'>
                            <span className='font-bold' >Dominance</span>
                            :
                            <a href='/'>Example</a>
                        </div>
                        <div className='mr-3 flex'>
                            <span className='font-bold' >ETH Gas</span>
                            :
                            <a href='/'>Example</a>
                        </div>
                    </div>
            </div>
            </div>
        </header>
        )
    }

export default Header