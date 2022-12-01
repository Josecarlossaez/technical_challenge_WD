
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { phoneListService } from '../services/phones.services'

function PhoneList(props) {
   const [list, setList] = useState([])
   const [isFetching, setIsFetching] = useState(true)

   useEffect(() => {
    getData()
   }, [])
   const getData = async () => {
    try {
        const response = await phoneListService()
        setList(response.data)
        console.log(response.data)
        
        setIsFetching(false)

    } catch (error) {
      console.log(error)  
    }
   }
   if (isFetching === true) {
    return <h3>...Loading</h3>;
  }


  return (
    <div>
        <h3>Lista de teléfonos</h3>
        {list.map((eachPhone) => {
            return(
                <Link to={`/phones/${eachPhone.id}`} key={eachPhone.id}>
                   <h3>{eachPhone.name}</h3>   
                </Link>
            ) 
        })}
    </div>
  )
}

export default PhoneList
              