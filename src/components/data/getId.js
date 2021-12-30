const getAPIStatus = async () => {
    let response = await fetch('https://api.coingecko.com/api/v3/ping')
    if(response.ok){
        return response
    } else {
        throw new Error("The API from Coingecko is not avalaible, please come later.")
    }
}
