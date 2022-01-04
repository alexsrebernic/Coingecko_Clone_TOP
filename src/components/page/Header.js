import { Icon } from '@iconify/react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { signInUser,signOutUser } from "../services/firebaseServices"
import store from '/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/components/redux/store.js'
let Header = (props) => {
    const [coinName,setCoinName] = useState("")
    const [arrayOfMatchCoins,setArrayOfMatchCoins] = useState([])
    const [isShowingSearchBox,setShowingSearchBox] = useState(false)
    const [uid,setUidUser] = useState(null)
    const handleInput = (e) => {
        setCoinName(e.target.value)
    }
  
    const checkSearchBox = (e) => {
        if(isShowingSearchBox){
            setShowingSearchBox(false)
        } else {
            setShowingSearchBox(true)
        }
    }
    useEffect(() => {
        store.subscribe((data) => setUidUser(store.getState().user.uid))
    },)
    useEffect(() => {
        setArrayOfMatchCoins(props.coins.filter((object) => {
            return object.name.includes(coinName)
        }))
    },[coinName])
    useEffect(() => {
        let searchingBox = document.querySelector("#searchbox")
      
        if(isShowingSearchBox){
            searchingBox.style.display = "block"
        }  else if(!(isShowingSearchBox)){
            searchingBox.style.display = "none"
        }
    })
        document.onclick = (e) => {if(e.target.id !== 'inputsearchbox') return setShowingSearchBox(false)}
    return(
        <header id='header'>
            <div className='hidden border-b xl:block'>
                    <div className='flex items-center justify-end px-2 py-4  mx-4 mx-80 '>
                    {uid === null?(
                        <div className='flex items-center'>
                            <Icon onClick={signInUser} id='loginportfoliobuttonxl'  className='pr-2 cursor-pointer mb-1 hover:text-lime-500' icon="bi:bookmark-fill" width="25" height="25"/>
                            <span id='textsignin' onClick={signInUser} className="hover:text-lime-500 cursor-pointer text-sm">Sign In</span>
                        </div>
                    ):(
                        <div className='flex items-center'>
                        <Link id='toportfolioxl' to="/portfolio">
                            <Icon  className='pr-2 cursor-pointer mb-1 hover:text-lime-500' icon="bi:bookmark-fill" width="25" height="25"/>
                        </Link>
                         
                        <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 dropdown z-10'>
                                <Icon  id='userButtonXl' className='mb-1 cursor-pointer hover:text-lime-500' icon="carbon:user-filled" color="black" width="25" height="20"/>

                                <div className='dropdown-content z-10'>
                                    <div>
                                        <Link to="/portfolio">
                                            Portfolio
                                        </Link>
                                        <a href='/'>Price Alert</a>
                                        <a href='/'>Login And Security</a>
                                        <a href='/'>Subscription</a>
                                        <a onClick={signOutUser} href='/'>Sign Out</a>
                                    </div>
                                    
                                </div>
                      
                        </li>
                        </div>
                    )}
                      
                      
                    </div>
            </div>
            <div className='hidden xl:flex items-center justify-start  py-3 mx-80 '>
                <div className=' flex items-center w-3/4'>
                <Link to="/">
                <img className='h-10 cursor-pointer ' alt='logo' src={require('/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png')}>

                </img>
                </Link>
                    <div>
                        <ul className='font-extralight flex ml-6'>
                        <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 pr-6 dropdown'>
                            <span  className='dropbtn hover:text-lime-500'>Coins</span>
                                <div className='dropdown-content'>
                                    <div>
                                        <a href='/'>Market Cap Rank</a>
                                        <a href='/'>Rencently Added</a>
                                        <a href='/'>Categories</a>
                                        <a href='/'>Discover</a>
                                        <a href='/'>Large Movers</a>
                                        <a href='/'>High Volumes</a>

                                    </div>
                                    <div>
                                        <span>Derivates</span>
                                        <a href='/'>Perpetuals</a>
                                        <a href='/'>Futures</a>

                                    </div>
                                </div>
                                
                            </li>
                            <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 pr-6 dropdown'>
                            <span className='dropbtn hover:text-lime-500'>Exchanges</span>
                                <div className='dropdown-content'>
                                    <div>
                                        <a href='/'>Spot</a>
                                        <a href='/'>DEX</a>
                                        <a href='/'>Derivates</a>

                                    </div>
                                    
                                </div>
                                
                            </li>
                            <li className='cursor-pointer text-sm hover:text-lime-500 pr-6'>DeFi</li>
                            <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 pr-6 dropdown'>
                            <span className='dropbtn hover:text-lime-500'>NFT</span>
                                <div className='dropdown-content'>
                                    <div>
                                        <a href='/'>NFT & Collectibles</a>
                                        <a href='/'>NFT Spotlight</a>
                                        <a href='/'>NFT Related Coins</a>

                                    </div>
                                   
                                </div>
                                
                            </li>
                            <li className='cursor-pointer text-sm hover:text-lime-500 pr-6'>Portfolio</li>
                            <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 pr-6 dropdown'>
                            <span className='dropbtn hover:text-lime-500'>Publications</span>
                                <div className='dropdown-content'>
                                    <div>
                                        <a href='/'>Crypto Reports</a>
                                        <a href='/'>Newsletter</a>
                                        <a href='/'>Podcast</a>
                                        <a href='/'>Blog</a>

                                    </div>
                                    <div>
                                        <span>Books</span>
                                        <a href='/'>How To Bitcoin</a>
                                        <a href='/'>How To DeFi</a>

                                    </div>
                                    <div>
                                        <span>Guides</span>
                                        <a href='/'>Coingecko Buzz</a>
                                        <a href='/'>Glossary</a>

                                    </div>
                                </div>
                                
                            </li>
                            <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 pr-6 dropdown'>
                            <span className='dropbtn hover:text-lime-500'>Resources</span>
                                <div className='dropdown-content'>
                                    <div>
                                        <a href='/'>Earn Crypto</a>
                                        <a href='/'>Yield Farming</a>
                                        <a href='/'>Compare Coins</a>
                                        <a href='/'>Explore All Coins</a>
                                        <a href='/'>Bitcoin Halving</a>

                                    </div>
                                    <div>
                                     <span>Public Company Treasury</span>
                                        <a href='/'>Bitcoin Treasury</a>
                                        <a href='/'>Ethereum Treasury</a>

                                    </div>
                                    <div>
                                     <span>In The News</span>
                                        <a href='/'>Beam Updates</a>
                                        <a href='/'>Latests News</a>

                                    </div>
                                </div>
                                
                            </li>
                            <li id='productsmenu' className='cursor-pointer text-sm hover:text-lime-500 pr-6 dropdown'>
                            <span className='dropbtn hover:text-lime-500'>Products</span>
                                <div className='dropdown-content'>
                                    <div>
                                        <a href='/'>Premiun Subscription</a>
                                        <a href='/'>Mobile App</a>
                                        <a href='/'>Store</a>

                                    </div>
                                    <div>
                                        <span>Developers</span>
                                        <a href='/'>Crypto API</a>
                                        <a href='/'>Widgets</a>
                                        <a href='/'>Request Form</a>
                                        <a href='/'>Methodology</a>

                                    </div>
                                </div>
                                
                            </li>
                            
                        </ul>
                    </div>
                </div>
                <div className=' w-1/4 search-box'>
                <input id='inputsearchbox' onChange={handleInput}  onClick={checkSearchBox} placeholder='Search' className='px-3 py-1 w-full border z-0 relative'></input>
                <div id='searchbox' className='py-3 absolute'>
                    <div className='bg-white border '>
                       
                        <div className='w-80 '>
                    <div className="w-full h-10 px-3 py-3  flex items-center">
                        <span className="font-semibold text-sm">
                            {coinName === ""? <span className="flex">Trending Search<Icon icon="fxemoji:fire" /></span>:'Cryptocurrencies'}
                        </span>
                    </div>
                    <hr className="py-2"></hr>
                    <div className="w-full text-sm pl-2">
                       {coinName === "" && props.trendingCoins.length !== 0?(
                           props.trendingCoins.coins.map((object,index) => {
                               return(
                                   <div key={index} className="flex p-3 w-full items-center cursor-pointer hover:bg-gray-200">
                                   <span className="w-8">
                                   <img alt="logo trending coin" className="w-4 h-4" src={object.item.large}></img>
                                   </span>
                                     
                                       <span className="font-light w-full">{object.item.name} ({object.item.symbol})</span>
                                       <span className="font-light text-lime-600 text-sm">#{object.item.market_cap_rank}</span>
                                   </div>
                               )
                           })
                       ):(arrayOfMatchCoins.map((object,index) => {
                           return (
                            <Link to={`/coins/${object.id}`}>
                            <div key={index} className="flex p-2 w-full items-center cursor-pointer hover:bg-gray-200">
                                   <span className="w-8">
                                   <img alt="logo trending coin" className="w-4 h-4" src={object.image}></img>
                                   </span>
                                     
                                       <span className="font-light w-full">{object.name} ({object.symbol.toUpperCase()})</span>
                                       <span className="font-light text-lime-600 text-sm">#{object.market_cap_rank}</span>
                                   </div>
                            </Link>
                           )
                       }))}
                    </div>
                        </div>
                    </div>
                </div>
                </div>                   
            </div>
            <div className=' h-28 flex flex-col justify-center py-2 px-4 md:mx-14 xl:hidden'>
                <div className='flex justify-between'>
                    <div >
                        <Icon onClick={props.setSideBar} className='cursor-pointer' icon="heroicons-outline:menu"         width="30" height="40" />
                    </div>
                    <Link to="/">
                        <img className='h-9 cursor-pointer' alt='logo' src={require('/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png')}>
                    </img>
                    </Link>
                    <div className='flex items-center '>
                        <Link to="/portfolio">
                            <Icon  className='pr-2 cursor-pointer mb-1' icon="bi:bookmark-fill" width="30" height="25"/>
                        </Link>
                        <Icon onClick={props.setSignIn} id='userButton' className='mb-1 cursor-pointer' icon="carbon:user-filled" color="black" width="30" height="40"/>
                    </div>
                </div>
                <span onClick={props.setSearch}  className='input-header flex h-10 cursor-pointer  items-center justify-between py-1 px-3'>
                    <span className='font-light '>
                        Search
                    </span>
                    <Icon className='float-right' icon="radix-icons:magnifying-glass" color="#828282" width="20" height="25" />
                </span>
            </div>
            <div className='header-data w-full flex justify-evenly text-xs font-medium h-10 items-center py-3 xl:justify-start xl:py-5'>
                <div className='overflow-auto container  px-5 translate-y-2 xl:mx-80 xl:px-0 '>
                        <div className='flex flex-row text-2xs pb-3 whitespace-nowrap md:justify-center xl:justify-start '>
                            <div className='mr-3 flex'>
                                <span className='font-bold' >Coins</span>
                                :
                                <a className='font-light ml-2 text-teal-500' href='/'>12131</a>
                            </div>
                            <div className='mr-3 flex'>
                                <span className='font-bold' >Exchanges</span>
                                :
                                <a className='font-light ml-2 text-teal-500'  href='/'>539</a>
                            </div>
                            <div className='mr-3 flex'>
                                <span className='font-bold inline-block ' >Market Cap</span>
                                :
                                <a className='font-light ml-2 text-teal-500' href='/'> $2,380,617,041,691</a>
                            </div>
                            <div className='mr-3 flex'>
                                <span className='font-bold' >24h Vol</span>
                                :
                                <a className='font-light ml-2 text-teal-500' href='/'>$74,871,567,560</a>
                            </div>
                            <div className='mr-3 flex'>
                                <span className='font-bold' >Dominance</span>
                                :
                                <a className='font-light ml-2' href='/'> BTC 37.5% ETH 19.1% </a>
                            </div>
                            <div className='mr-3 flex'>
                                <span className='font-bold' >ETH Gas</span>
                                :
                                <a className='font-light ml-2 ' href='/'>101 gwei </a>
                            </div>
                        </div>
                </div>
            </div>
        </header>
        )
    }

export default Header