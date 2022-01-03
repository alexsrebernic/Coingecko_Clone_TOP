import Nav from "./Nav"
import TableCategories from "./TableCategories"
const Categories = (props) => {
    
    return(
        <div className=" md:mx-14  xl:mx-80">
        <div className="container px-5 w-full xl:px-0">
            <Nav/>
            <div className="mt-4 text-left">
                <h1 className="mb-2 text-2xl font-semibold text-gray-700">Top Cryptocurrency Categories By Market Capitalization</h1>
                <p className="text-sm font-extralight">
                    The cryptocurrency category ranking is based on market capitalization. <br></br>
                        Note: Some cryptocurrencies may overlap across several categories
                </p>
            </div>
            <TableCategories categories = {props.categories}/>
        </div>
        </div> 
    )
}
export default Categories