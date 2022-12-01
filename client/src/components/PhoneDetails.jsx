import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { phoneDetailsService } from '../services/phones.services'


function PhoneDetails() {
const {id} = useParams()
console.log("id", id)
const [details,setDetails] = useState(null)
const [isFetching, setIsFetching] = useState(true)


useEffect(() => {
    
    getData()
    
  }, [id])
  
  const getData = async () => {
    try {
        const response = await phoneDetailsService(id)
      
        setDetails(response.data)
        console.log(response.data)
        setIsFetching(false)
        
    } catch (error) {
        console.log(error)
    }
}
if (isFetching === true) {
  return (
      <h3>...Loading</h3>
      
  )
}



    
    
  return (
    <div>
        <h3>Phone Details</h3>
        <h3>{details.name}</h3>

        <h3>{details.color}</h3>
        <h3>{details.manufacturer}</h3>
        <h3>{details.description}</h3>

        

    </div>
  )
}

export default PhoneDetails