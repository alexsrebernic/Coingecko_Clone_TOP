import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
const Search = (props) => {
    const [coinName,setCoinName] = useState("")
    const [arrayOfMatchCoins,setArrayOfMatchCoins] = useState([])
    const handleInput = (e) => {
        setCoinName(e.target.value)
    }
    useEffect(() => {
        setArrayOfMatchCoins(props.coins.filter((object) => {
            return object.name.includes(coinName)
        }))
    },[coinName])
    return (
        <div id="search" className="container py-5 px-5">
           <div className='w-full'>
                <div className="flex flex-col  items-center pb-2">
                <div className="w-full flex items-center">
                <Icon className='cursor-pointer'  icon="bi:x" width="35" height="35" onClick={props.setSearch} />
                    <Link className='w-full flex justify-center items-center  px-3' to="/">
                    <img className='w-40' src={require("/home/alexsrebernic/Alex/Programacion/Projects/projectOdinJsPath/coingecko-clone-top/src/img/8HhyujVSxqve4ffxvG3t_ip.bitcointalk.org.png")}></img>
                    </Link>
                </div>
                    <div className="my-2 w-full h-10">
                        <input onChange={handleInput}
                        value={coinName} placeholder="Search" className="border w-full h-full px-2 py-1">
                        </input>
                    </div>
                </div>
                <div>
                <hr ></hr>

                    <div className="w-full h-10 px-3 py-3  flex items-center">
                        <span className="font-semibold text-sm">
                            {coinName === ""? <span>'Trending Search '<Icon icon="fxemoji:fire" /></span>:'Cryptocurrencies'}
                        </span>
                    </div>
                    <hr className="py-2"></hr>
                    <div className="w-full ">
                       {coinName === "" && props.trendingCoins.length !== 0?(
                           props.trendingCoins.coins.map((object,index) => {
                               return(
                                   <div key={index} className="flex p-3 w-full items-center">
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
                            <div key={index} className="flex p-2 w-full items-center">
                                   <span className="w-8">
                                   <img alt="logo trending coin" className="w-4 h-4" src={object.image}></img>
                                   </span>
                                     
                                       <span className="font-light w-full">{object.name} ({object.symbol.toUpperCase()})</span>
                                       <span className="font-light text-lime-600 text-sm">#{object.market_cap_rank}</span>
                                   </div>
                           )
                       }))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Search