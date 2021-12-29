import { Table } from "react-bootstrap"
import Nav from "./Nav"
const Home = () => {
    return(
        <div className="container px-5">
         <Nav/>
         <div className="gecko-table-container">
             <div>
                <div className="w-full h-20 f text-2xl mt-2 font-semibold">
                    <h1 className="mr-2 mb-2">Criptocurrency Prices by Market Cap</h1>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">The global criptocurrency market cap today is Trillion, a change in the last 24 hours.<a className="ml-1" href="#">Read more</a></p>
                    <div className="flex items-center w-full
                    h-10">
                        <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                        </label>
                            <div className="font-semibold ml-2">
                                Show stats
                            </div>
                    </div>
                </div>
             </div>
             <div className="w-full h-10 my-2 flex justify-between items-center">
                 <div className="">
                 <button className="button-table w-20 mr-2 "><span className="">USD</span></button>
                 <button className="button-table w-32  mr-2"><span className="">All Categories</span></button>
                 <button className="button-table w-20"><span >Filter</span></button>
                 </div>
             </div>
             <hr className="my-3"></hr>
             <div className="container-buttons">
                 <button className="button-table mr-2"><span className="m-3 ">All Hashing Algorithms</span></button>
                 <button className="button-table"><span>All Platforms</span></button>
             </div>
             <div className="coingecko-table">
                 <div className="relative">
                    <div className="table-responsive">
                        <Table className="
                        table text-sm 
                        text-lg-normal 
                         mb-0 h-12">
                            <thead>
                                <th></th>
                                <th>#</th>
                                <th>Coin</th>
                                <th>Price</th>
                                <th>1h</th>
                                <th>24h</th>
                                <th>7d</th>
                                <th>24h volume</th>
                                <th>Mkt Cap</th>
                                <th>Last 7 days</th>
                            </thead>
                        </Table>
                    </div>
                 </div>
             </div>
           
         </div>
        </div>
        
    )
}
export default Home