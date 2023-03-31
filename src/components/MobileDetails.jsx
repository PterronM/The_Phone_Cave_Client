import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getOneMobileId } from "../services/mobile";


function MobileDetails() {


  const params = useParams()
  
  const [oneMobile, setOneMobile] = useState(null);
  const [isFeacht, setIsFeacht] = useState(true);

  useEffect(()=>{
    getData()
  },[])

  const getData = async()=>{
    try {
      
      const response =  await getOneMobileId(params.id)
      console.log(response)
      setOneMobile(response.data)
      setIsFeacht(false)
    } catch (error) {
      console.log(error)
    }
  }





  return (
    <div>
        {isFeacht === true
        ? <h3>Buscando....</h3>
        : <div>
            <h2>{oneMobile.name}</h2>
            <h4>Fabricante:{oneMobile.manufacturer}</h4>
            <p>{oneMobile.description}</p>
            <p>Pantalla:{oneMobile.screen}</p>
            <p>Procesador:{oneMobile.processor}</p>

          </div>}
    </div>
  )
}

export default MobileDetails
