import { Table } from "react-bootstrap"
import { Icon } from "@iconify/react"
import { Link } from "react-router-dom"
const TableHome =  (props) => {
    return (
       
            <div className="coingecko-table">
            {props.coins.length !== 0?(
            <div className="relative">
               <div className="table-responsive">
                   <Table className="
                   table text-sm 
                   text-lg-normal 
                    mb-0 h-12">
                       <thead>
                           <tr>
                               <th className="pt-2 w-4  p-2"></th>
                               <th className="w-8  p-2">#</th>
                               <th className="w-20 text-left  p-2">Coin</th>
                               <th className="w-24 text-right  p-2">Price</th>
                               <th className="w-14 text-right  p-2">1h</th>
                               <th className="w-16 text-right  p-2">24h</th>
                               <th className="w-16 text-right  p-2">7d</th>
                               <th className="w-32 text-right  p-2">Total volume</th>
                               <th className="w-28 text-right  p-2">Mkt Cap</th>
                           </tr>
                       </thead>
                       <tbody>
                           {props.coins.map((object,index) => {
                               return(
                                       <tr id={object.id} className="py-6 border-b"  key={index}>
                                           <td className="pl-1 pr-0"><Icon className="cursor-pointer" icon="akar-icons:star" width="15" height="15" /></td>
                                           <td className="text-center  w-6 p-4">{index + 1}</td>
                                           <td className="flex p-3 justify-between">
                                               <Link to={`/coins/${object.id}`} className="flex justify-between w-full">
                                                   <div className="flex font-bold cursor-pointer items-center">
                                                   <img alt="logo coin" className="w-5 mr-3 h-5" src={object.image}>
                                                   </img> {object.name}</div> 
                                                   {object.symbol.toUpperCase()}
                                               </Link>
                                           </td>
                                           <td className="text-right p-2">${object.current_price}</td>
                                           <td className="text-right  p-2"style={{color:object.price_change_percentage_1h_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                                           <td className="text-right  p-2" style={{color:object.price_change_percentage_24h_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_24h_in_currency).toFixed(2)}%</td>
                                           <td className="text-right"
                                           style={{color:object.price_change_percentage_7d_in_currency > 0? "green" : "red"}}>{parseFloat(object.price_change_percentage_7d_in_currency).toFixed(2)}%</td>
                                           <td className="text-right  p-2">${object.total_volume}</td>
                                           <td className="text-right  p-2">${object.market_cap}</td>
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