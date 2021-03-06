import TableHome from "./TableHome"
import Nav from "./Nav"
import { withRouter } from "../../App"
const Home = (props,router) => {
    return(
        <div className=" md:mx-14  xl:mx-80" id="container-home">
            <div id="home" className="container px-5 w-full xl:px-0">
            <Nav/>
            <div className="gecko-table-container">
                <div>
                    <div className="w-full h-20 f text-2xl mt-2 font-semibold xl:h-10">
                        <h1 className="mr-2 mb-2">Cryptocurrency Prices by Market Cap</h1>
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
                    <button className="filter-button button-table w-20"><span >Filter</span></button>
                    </div>
                </div>
                <hr className="my-3"></hr>
                <div className="container-buttons-filter">
                    <button className="button-table mr-2"><span className="m-3 ">All Hashing Algorithms</span></button>
                    <button className="button-table"><span>All Platforms</span></button>
                </div>
            <TableHome coins={props.coins}/>
           
            </div>
            </div>
        </div>
    )
}
export default withRouter(Home)