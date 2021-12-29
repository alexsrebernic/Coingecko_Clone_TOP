import { Icon } from '@iconify/react';
let Header = () => {
    return(
        <header>
            <div className='w-full h-28 flex flex-col justify-center py-2 px-4'>
                <div className='flex justify-between'>
                    <div >
                        <Icon icon="heroicons-outline:menu"         width="30" height="40" />
                    </div>
                        <img className='h-9' alt='logo' src={require('/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png')}>
                    </img>
                    <div className='flex items-center '>
                        <Icon className='pr-2 mb-1' icon="bi:bookmark-fill" width="30" height="25"/>
                        <Icon className='mb-1' icon="carbon:user-filled" color="black" width="30" height="40"/>
                    </div>
                </div>
                <span  className='input-header flex h-10  items-center justify-between py-1 px-3'>
                    <span className='font-light '>
                        Search
                    </span>
                    <Icon className='float-right' icon="radix-icons:magnifying-glass" color="#828282" width="20" height="25" />
                </span>
            </div>
            <div className='header-data w-full flex justify-evenly text-xs font-medium h-10 items-center'>
                <span >Coins:</span>
                <span >Exchanges:</span>
                <span >Market Cap:</span>

            </div>

        </header>
    )
}
export default Header