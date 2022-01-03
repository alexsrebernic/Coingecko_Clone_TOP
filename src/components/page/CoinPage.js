import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { useEffect, useState } from "react"
import ChartCoin from "./ChartCoin"
const CoinPage = (props) => {
    let [amountCoin,setAmountCoin] = useState("")
    let [amountUSD,setAmountUSD] = useState("")
    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    const handleAmountCoin = (event) => {
        setAmountCoin(event.target.value)

    }
    const handleAmountUSD = (event) => {
        setAmountUSD(event.target.value)

    }
  
    
    const {id} = useParams()
    const coin = props.coins.filter(object => {
        return object.id === id
    }).pop()
   
    useEffect(() => {
        if(coin){
        setAmountUSD(coin.current_price*amountCoin)

        }
       
    },[amountCoin,coin])
    useEffect(() => {
        if(coin){
        setAmountCoin(amountUSD/coin.current_price)

        }
      
    },[amountUSD,coin])
    return(
        <div>
        {coin !== undefined?(
            <div className=" xl:mx-80">
            <div className="filter-menu pt-4 pb-2 w-full">
                <div className="container px-4 xl:px-0">
                    <div className="flex items-center row justify-between">
                        <div className="py-2 w-48 text-sm">
                            <div className="flex flex-row items-center font-light">
                                <Link className="text-lime-600" to="/">Coins</Link>
                                <Icon className="text-lime-600"icon="akar-icons:chevron-right" width="14" height="14"  />
                                <span className="text-stone-400">{coin.name}</span>
                            </div>
                        </div>
                       

                    </div>
                </div>
            </div>
            <div className="container px-4 xl:px-0">
                <div className="grid grid-cols-1">
                    <div>
                        <div>
                            <div className="w-full">
                                <div className="rounded w-16 text-s text-center bg-black text-white">Rank #{separator(coin.market_cap_rank)}</div>
                            </div>
                           
                            <div className="flex text-gray-900 w-full font-bold items-center mt-3 text-2xl">
                                <img alt="logo coin" className="w-8" src={coin.image}></img>
                                <h1 className="pl-3">{coin.name} ({coin.symbol.toUpperCase()})</h1>
                            </div>
                            <div className="w-full">
                                 <div className="mb-3">
                                     <span className="text-4xl font-bold">${separator(parseFloat(coin.current_price))}</span>
                                     <span style={{color:coin.price_change_percentage_1h_in_currency > 0? "green" : "red"}} className="text-xl ml-2">{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</span>
                                 </div>
                                 <div >
                                     <button className="border px-5 py-3 rounded">
                                     <Icon icon="bx:bx-share" hFlip={true} />
                                     </button>
                                     <button className="border px-5 py-3 ml-2 rounded">
                                     <Icon icon="ci:notification" />
                                     </button>
                                     <button className="border px-5 py-3 ml-2 rounded"><Icon className="cursor-pointer" icon="akar-icons:star" width="15" height="15" /></button>

                                 </div>
                            </div>
                        </div>
                        <div className="w-full xl:w-2/3 xl:flex xl:text-sm">
                            <div className="w-full">
                                <div className="flex justify-between w-full py-3 border-b">
                                    <span className="text-stone-500">Market Cap</span>
                                    <span>${separator(coin.market_cap)}</span>
                                </div>
                                <div className="flex justify-between w-full py-3 border-b">
                                    <span className="text-stone-500">Total Volume</span>
                                    <span>${separator(coin.total_volume)}</span>
                                </div>
                                <div className="flex justify-between w-full py-3 border-b">
                                    <span className="text-stone-500">Fully Diluted Valuation</span>
                                    <span>{coin.fully_diluted_valuation === null?<Icon icon="bx:bx-infinite" width="12" />:`$${separator(coin.fully_diluted_valuation)}`}</span>
                                </div>
                            </div>
                            <div className="w-full xl:pl-4">
                                <div className="flex justify-between w-full py-3 border-b">
                                    <span className="text-stone-500">Circulating Supply</span>
                                    <span>{separator(coin.circulating_supply)}</span>
                                </div>
                                <div className="flex justify-between w-full py-3 border-b">
                                    <span className="text-stone-500">Total Supply</span>
                                    <span>{coin.total_supply === null?<Icon icon="bx:bx-infinite" width="12" />:separator(coin.total_supply) }</span>

                                </div>
                                <div className="flex justify-between w-full py-3 border-b">
                                    <span className="text-stone-500">Max Supply</span>
                                    <span>{coin.max_supply === null?<Icon icon="bx:bx-infinite" width="12" />:separator(coin.max_supply)}</span>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="w-full h-36  xl:h-34">
                    <div  className="bg-zinc-200 py-4 h-full flex flex-col justify-between items-center xl:flex-row xl:items-center xl:justify-center">
                        <div className="w-10/12 h-2/5 xl:flex xl:justify-end">
                            <span className="px-5 py-3 h-full border bg-zinc-100">{coin.symbol.toUpperCase()}</span>
                            <input value={amountCoin}  onChange={handleAmountCoin} className="w-auto h-full" type="number"></input>
                        </div>
                        <Icon icon="grommet-icons:transaction" className="xl:w-14" />
                        <div className="w-10/12 h-2/5">
                            <span className="px-5 py-3 h-full border bg-zinc-100">USD</span>
                            <input value={amountUSD}  onChange={handleAmountUSD} className="w-auto h-full" type="number"></input>
                        </div>
                    </div>
                </div>
            </div>
                <div>
                    <ChartCoin id={id}/>
                </div>
            </div>
        ):(
            <div>
                <h1>Loading...</h1>
            </div>
        )}

          
        </div>
    )
}
export default CoinPage