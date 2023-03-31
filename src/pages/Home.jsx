import { useEffect, useState } from "react";
import { getAllMobile } from "../services/mobile";
import { Link } from "react-router-dom";
import { Spinner } from "react-bootstrap";


function Home() {

  const [allMobile, setAllMobile] = useState(null);
  const [isFeaching, setIsFeaching] = useState(true);
  useEffect(()=>{
    getData()
  },[])

  const getData = async () =>{
    setIsFeaching(true)
    try {
      const response = await getAllMobile();
      setAllMobile(response.data)
      setIsFeaching(false)
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>

      {isFeaching ? (<h2>Buscando....</h2>): (
        <div>
          {allMobile.map((eachMobile)=>{
          return(
            <p key= {eachMobile._id}>
              <Link to={`/phones/${eachMobile._id}`}>
                {eachMobile.name}
              </Link>
            </p>
          )
        })}
        </div>
      )}
    </div>
  )
}

export default Home
