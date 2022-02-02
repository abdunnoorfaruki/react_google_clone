import {useState, useEffect} from 'react'




export const useGoogleSEarch = (term)=>{
    const [data, setData] = useState(null) 

    useEffect(() =>{
        const API_KEY = process.env.REACT_APP_CUSTOME_SEARCH_API_KEY
        const SEARCH_ENGINE_ID = process.env.REACT_APP_SEARCH_ENGINE_ID
        const URL = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${term}`
       async function fetchData(){
            const response = await fetch(URL)

            const result = await response.json()
            setData(result)
       }
       fetchData()

    },[term])

    return{
        data
    }
   
}