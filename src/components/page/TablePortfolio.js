import { Table } from "react-bootstrap"
import store from "../redux/store"
import { useState,useEffect } from "react"
import { separator } from "../../App"
import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { setFavouriteCoinInDB,removeFavouriteCoinInDB } from "../services/firebaseServices"

const TablePortfolio = (props) => {
    const [uid,setUidUser] = useState(null)
    const [arrayOfFavorites,setArrayOfFavorites] = useState([])
    let array = []
    useEffect(() => {
        store.subscribe((data) =>{
            setUidUser(store.getState().user.uid)
            setArrayOfFavorites(store.getState().user.arrayOfFavouriteCoins)
        } )
       
    },[])
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
    for (let l = 0 ; l < props.coins.length ; l++){
        array.push(arrayOfFavorites.some((name) => {
            return name === props.coins[l].id
                
        }))
      
    }
    return(
        <div className="flex items-center ">
            <Table className="
                        table text-sm 
                        text-lg-normal 
                         mb-0 h-12 ">
                            <thead>
                                <tr>
                                    <th className="pt-2 w-4"></th>
                                    <th className="w-8 text-left">#</th>
                                    <th className="w-20 ">Coin</th>
                                    <th className="w-24 text-right">Price</th>
                                    <th className="w-6">1h</th>
                                    <th className="w-8">24h</th>
                                    <th>7d</th>
                                    <th>24h volume</th>
                                    <th className="w-28">Mkt Cap</th>
                                  

                                </tr>
                            </thead>
                            {props.coins.length !== 0?(

                                    <tbody>
                                        {props.coins.map((object,index) => {
                                            if(array[index]){
                                                return(
                                                    <tr key={index}>
                                                <td >
                                                <Icon id={object.id} onClick={favoriteCoin} className="cursor-pointer hidden" icon="akar-icons:star" width="15" height="15" />
                                                                <Icon className="cursor-pointer"  onClick={favoriteCoin} id={object.id + "selected"} icon="bi:star-fill" color="#f0bf3c" />
                                                </td>
                                           <td className="text-left  w-2 p-1">{index + 1}</td>
                                           <td className="flex p-3 justify-between w-72">
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
                                           <td className="text-center"
                                           style={{color:object.price_change_percentage_7d_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_7d_in_currency).toFixed(2)}%</td>
                                           <td className="text-center  p-2">${separator(object.total_volume)}</td>
                                           <td className="text-right  p-2">${separator(object.market_cap)}</td>
                                               </tr>
                                                )
                                            } else return(null)
                                          
                                        })}
                                    </tbody>
                                   
                                
                                        ):(
                                            <h1>Loading...</h1>
                                        )}
        </Table>
            
        </div>
    )
}
export default TablePortfolio