import { Table } from "react-bootstrap"
import { Icon } from "@iconify/react"
const TableHome =  (props) => {
    const arrayCoins099 = props.coins.slice(0,100)
    const arrayCoins100200 = props.coins.slice(100,200)
    return (
        <div className="coingecko-table">
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
                                    <th className="w- ">Last 7 days</th>
                                </tr>
                            </thead>
                            <tbody id="array099">
                                {arrayCoins099.map((object,index) => {
                                    return(
                                        <tr id={object.id} className="py-6 border-b"  key={index}>
                                            <td className="pl-1 pr-0"><Icon className="cursor-pointer" icon="akar-icons:star" width="15" height="15" /></td>
                                            <td className="text-left  w-6 p-4">{index + 1}</td>
                                            <td className="flex p-3 justify-between"><div className="flex font-bold cursor-pointer items-center"><img alt="logo coin" className="w-5 mr-3 h-5" src={object.image}></img> {object.name}</div> {object.symbol.toUpperCase()}</td>
                                            <td className="text-right p-2">${object.current_price}</td>
                                            <td className="text-right  p-2"style={{color:object.price_change_percentage_1h_in_currency.toFixed(2) > 0? "green" : "red"}}>{object.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
                                            <td className="text-right  p-2" style={{color:object.price_change_percentage_24h_in_currency.toFixed(2) > 0? "green" : "red"}}>{object.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
                                            <td className="text-right"
                                            style={{color:object.price_change_percentage_7d_in_currency.toFixed(2) > 0? "green" : "red"}}>{object.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
                                            <td className="text-right  p-2">${object.total_volume}</td>
                                            <td className="text-right  p-2">${object.market_cap}</td>
                                            <td className="text-right  p-2"></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tbody style={{display:"none"}}>
                                {arrayCoins100200.map((object,index) => {
                                    return(
                                        <tr id={object.id} className="py-6 border-b"  key={index}>
                                            <td className="pl-1 pr-0"><Icon className="cursor-pointer" icon="akar-icons:star" width="15" height="15" /></td>
                                            <td className="text-left  w-6 p-4">{index + 100 + 1}</td>
                                            <td className="flex p-3 justify-between"><div className="flex font-bold cursor-pointer"><img alt="logo coin" className="w-5 mr-3 " src={object.image}></img> {object.name}</div> {object.symbol.toUpperCase()}</td>
                                            <td className="text-right p-2">${object.current_price}</td>
                                            <td className="text-right  p-2"style={{color:object.price_change_percentage_1h_in_currency.toFixed(2) > 0? "green" : "red"}}>{object.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
                                            <td className="text-right  p-2" style={{color:object.price_change_percentage_24h_in_currency.toFixed(2) > 0? "green" : "red"}}>{object.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
                                            <td className="text-right"
                                            style={{color:object.price_change_percentage_7d_in_currency.toFixed(2) > 0? "green" : "red"}}>{object.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
                                            <td className="text-right  p-2">${object.total_volume}</td>
                                            <td className="text-right  p-2">${object.market_cap}</td>
                                            <td className="text-right  p-2"></td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                    </div>
                 </div>
             </div>
    )
}
export default TableHome