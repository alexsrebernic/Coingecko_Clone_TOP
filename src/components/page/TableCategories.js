import { Table } from "react-bootstrap"
import { Link } from "react-router-dom"
const TableCategories =  (props) => {
    function separator(numb) {
        var str = numb.toString().split(".");
        str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return str.join(".");
    }
    return (
       
            <div className="coingecko-table">
            {props.categories.length !== 0?(
            <div>
               <div className="table-responsive ">
                   <Table className="
                   table text-sm 
                   text-lg-normal 
                    mb-0 h-12 xl:w-full">
                       <thead className="h-10">
                           <tr className="">
                               <th className="text-left  p-1">#</th>
                               <th className="w-4 text-left  p-1">Category</th>
                               <th className="w-8">Top Coins</th>
                               <th className="w-8 text-right  p-1">24h MKC</th>
                               <th className="w-4 text-right  p-1">Mkt Cap</th>
                               <th className="w-8 text-right  p-1">24h Volume </th>
                               
                           </tr>
                       </thead>
                       <tbody>
                           {props.categories.map((object,index) => {
                               return(
                                       <tr  className="py-6 border-b h-14"  key={index}>
                                           <td className="text-left  w-2 p-1">{index + 1}</td>
                                           <td className="flex p-3 justify-between">
                                               <Link to={`/categories/${object.id}`} className="flex justify-between w-full">
                                                   <div className="flex font-semibold cursor-pointer items-center">
                                                   {object.name}</div> 
                                               </Link>
                                           </td>
                                           <td className="text-right ">
                                           <div className="flex">
                                            <img src={object.top_3_coins[0]}></img>
                                            <img src={object.top_3_coins[1]}></img>
                                            <img src={object.top_3_coins[2]}></img>

                                           </div>
                                           </td>
                                           <td className="text-right  " style={{color:object.market_cap_change_24h > 0? "green" : "red"}}>{parseFloat(object.market_cap_change_24h).toFixed(2)}%</td>
                                           <td className="text-right  ">${separator(object.market_cap)}</td>
                                           <td className="text-right ">${separator(object.volume_24h)}</td>
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
export default TableCategories