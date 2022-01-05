import { Table } from "react-bootstrap"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
import { setFavouriteCoinInDB,signInUser,removeFavouriteCoinInDB } from "../services/firebaseServices"
import { useEffect, useState } from "react"
import store from "../redux/store"
import { setArrayOfFavouriteCoins } from "../redux/UserInfo"
const TableHome =  (props) => {
    const [uid,setUidUser] = useState(null)
    const [arrayOfFavorites,setArrayOfFavorites] = useState([])
    let [coinsSelected,setCoinsSelected] = useState([])
    let array = []
    useEffect(() => {
        store.subscribe((data) =>{
            setUidUser(store.getState().user.uid)
            setArrayOfFavorites(store.getState().user.arrayOfFavouriteCoins)
        } )
    },)
      for (let l = 0 ; l < props.coins.length ; l++){
            array.push(arrayOfFavorites.some((name) => {
                return name === props.coins[l].id
                    
            }))
          
        }
        console.log(array)
    const favoriteCoin = (e) => {
        let coindId = e.target.id.substr(-8,8)
        if(coindId !== "selected"){
            let notClickedStar = document.getElementById(e.target.id)
            notClickedStar.style.display = "none"
            let clickedStar = document.getElementById(e.target.id + "selected")
            clickedStar.style.display = "block"
            setFavouriteCoinInDB(e.target.id,uid)
        }else {
            let idNotClickedStar = e.target.id.slice(0,-8)
            let notClickedStar = document.getElementById(idNotClickedStar)
            let clickedStar = document.getElementById(e.target.id)
            notClickedStar.style.display = "block"
            clickedStar.style.display = "none"
            removeFavouriteCoinInDB(idNotClickedStar,uid)
        }
       
    }
    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    return (
       
            <div className="coingecko-table">
            {props.coins.length !== 0?(
            <div className="relative">
               <div className="table-responsive ">
                   <Table className="
                   table text-sm 
                   text-lg-normal 
                    mb-0 h-12 xl:w-full">
                       <thead className="h-10">
                           <tr className="">
                               <th className="pt-2 w-2  p-1"></th>
                               <th className="text-left  p-1">#</th>
                               <th className="w-20 text-left  p-1">Coin</th>
                               <th className="w-24 text-right  p-1">Price</th>
                               <th className="w-14 text-right  p-1">1h</th>
                               <th className="w-16 text-right  p-1">24h</th>
                               <th className="w-16 text-right  p-1">7d</th>
                               <th className="w-32 text-right  p-1">Total volume</th>
                               <th className="w-28 text-right  p-1">Mkt Cap</th>
                           </tr>
                       </thead>
                       <tbody>
                           {props.coins.map((object,index) => {
                               return(
                                       <tr  className="py-6 border-b h-14"  key={index}>
                                           <td >
                                            {uid === null?(
                                                <div>
                                                <Icon onClick={signInUser} className="cursor-pointer" icon="akar-icons:star" width="15" height="15" />
                                                </div>
                                            ):(
                                            <div>

                                            {array !== null?(
                                                <div>
                                                {array[index]?(
                                                    <div className="w-full">
                                                                <Icon id={object.id} onClick={favoriteCoin} className="cursor-pointer hidden" icon="akar-icons:star" width="15" height="15" />
                                                                <Icon className="cursor-pointer"  onClick={favoriteCoin} id={object.id + "selected"} icon="bi:star-fill" color="#f0bf3c" />
                                                            </div>
                                                        
                                                ):(
                                                    <div>
                                                            <Icon id={object.id} onClick={favoriteCoin} className="cursor-pointer" icon="akar-icons:star" width="15" height="15" />
                                                            <Icon className="hidden cursor-pointer" onClick={favoriteCoin} id={object.id + "selected"} icon="bi:star-fill" color="#f0bf3c" />
                                                            </div>
                                                )}
                                                </div>
                                            ):(
                                                
                                                <div>
                                                <Icon id={object.id} onClick={favoriteCoin} className="cursor-pointer" icon="akar-icons:star" width="15" height="15" />
                                            <Icon className="hidden" onClick={favoriteCoin} id={object.id + "selected"} icon="bi:star-fill" color="#f0bf3c" />
                                                </div>
                                            )}
                                            
                                            
                                            </div>
                                            )}
                                           </td>
                                           <td className="text-left  w-2 p-1">{index + 1}</td>
                                           <td className="flex p-3 justify-between">
                                               <Link to={`/coins/${object.id}`} className="flex justify-between w-full">
                                                   <div className="flex font-semibold cursor-pointer items-center">
                                                   <img alt="logo coin" className="w-5 mr-3 h-5" src={object.image}>
                                                   </img> {object.name}</div> 
                                                   {object.symbol.toUpperCase()}
                                               </Link>
                                           </td>
                                           <td className="text-right p-2">${separator(object.current_price)}</td>
                                           <td className="text-right  p-2"style={{color:object.price_change_percentage_1h_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                                           <td className="text-right  p-2" style={{color:object.price_change_percentage_24h_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_24h_in_currency).toFixed(2)}%</td>
                                           <td className="text-right"
                                           style={{color:object.price_change_percentage_7d_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_7d_in_currency).toFixed(2)}%</td>
                                           <td className="text-right  p-2">${separator(object.total_volume)}</td>
                                           <td className="text-right  p-2">${separator(object.market_cap)}</td>
                                       </tr>
                               )
                           })}
                       </tbody>
                   </Table>
               </div>
            </div>
        ):<h1>Loading...</h1>}

        </div>
      
    )
}
export default TableHome