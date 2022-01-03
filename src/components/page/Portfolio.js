import { Link } from "react-router-dom"
import { Icon } from "@iconify/react"
import { Button } from "react-bootstrap"
import { Table } from "react-bootstrap"
const Portfolio = () => {
    return(
        <div id="portfolio" className="xl:mx-80">
            <div className="filter-menu pt-4 pb-2">
                <div className="container px-4 xl:px-0">
                    <div className="flex items-center row justify-between">
                        <div className="py-2 w-48 text-sm">
                            <div className="flex flex-row items-center font-light">
                                <Link className="text-lime-600" to="/">Home</Link>
                                <Icon className="text-lime-600"icon="akar-icons:chevron-right" width="14" height="14"  />
                                <span className="text-stone-400">My portfolio</span>
                            </div>
                        </div>
                        <div className="flex items-center font-light ">
                        <Icon icon="uil:comment-alt-exclamation" width="18" height="16" rotate={2} vFlip={true} />
                        <span className="ml-1">Give Feedback</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className="container px-4 xl:px-0">
                <div className="h-32 py-5 xl:flex xl:justify-between">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-semibold ">My Portfolio</h1>
                        <Icon icon="bx:bx-chevron-down" width="20" height="20" rotate={2} vFlip={true} />
                    </div>
                    <div className="flex mt-4 items-center xl:mt-0">
                        <a className="p-2"><Icon icon="fa-regular:eye" width="35" height="30" rotate={2} vFlip={true} /></a>
                        <a className="p-2">
                        <Icon icon="bx:bxs-pie-chart-alt-2" width="35" height="30" rotate={2} vFlip={true} />
                        </a>
                        <a className="p-2">
                        <Icon icon="bx:bx-grid" width="35" height="30" rotate={2} vFlip={true} />
                        </a>
                        <a className="p-2">
                        <Icon icon="bi:three-dots-vertical" width="35" height="30" rotate={2} vFlip={true} />
                        </a>
                        <button className="w-32 h-12 bg-lime-500 text-white rounded "><span className="font-light">Add New Coin</span></button>
                    </div>
                </div>
                <div className="portfolio-overview flex flex-col xl:flex-row">
                <span className="mr-2 p-3 mb-4 inline-block shadow-lg h-20 flex flex-col items-center font-light">
                    <span className="text-xl">$0.00</span>
                    <div>
                        <span>
                            Total Balance
                        </span>
                    </div>
                </span>
                 <span className="mr-2 p-3 mb-4 inline-block shadow-lg h-20 flex flex-col items-center font-light">
                    <span className="text-xl">$0.00</span>
                    <div>
                        <span>
                            24h Portfolio Change (+0%)
                        </span>
                    </div>
                </span>
                <span className="mr-2 p-3 mb-4 inline-block shadow-lg h-20 flex flex-col items-center font-light">
                    <span className="text-xl">$0.00</span>
                    <div>
                        <span>
                            Total Profit Loss (-)
                        </span>
                    </div>
                </span>

            </div>
            <div className="coingecko-table">
                 <div className="relative">
                 <hr ></hr>

                    <div className="table-responsive">
                        <Table className="
                        table text-sm 
                        text-lg-normal 
                         mb-0 h-12 xl:w-full">
                            <thead>
                                <tr>
                                    <th className="pt-2 w-4"></th>
                                    <th className="w-8 ">#</th>
                                    <th className="w-20 text-left">Coin</th>
                                    <th className="w-24 text-right">Price</th>
                                    <th className="w-14">1h</th>
                                    <th className="w-16">24h</th>
                                    <th>7d</th>
                                    <th>24h volume</th>
                                    <th className="w-28">Mkt Cap</th>
                                    <th className="w-34">Last 7 days</th>
                                    <th>Holdings</th>
                                    <th>PNL</th>

                                </tr>
                            </thead>
                        </Table>
                    </div>
                 </div>
             </div>
            </div>
          
        </div>
    )
}
export default Portfolio