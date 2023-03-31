import { useEffect, useState } from "react";
import { getAllMobile } from "../services/mobile";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Home() {
  const [allMobile, setAllMobile] = useState(null);
  const [isFeaching, setIsFeaching] = useState(true);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setIsFeaching(true);
    try {
      const response = await getAllMobile();
      setAllMobile(response.data);
      setIsFeaching(false);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {isFeaching ? (
        <h2>Buscando....</h2>
      ) : (
        <div className="d-flex justify-content-between flex-wrap p-4">
          {allMobile.map((eachMobile) => {
            return (
              <p key={eachMobile._id}>
                <Card style={{ width: "18rem" }}>
                  <Card.Body>
                    <Card.Title>{eachMobile.name}</Card.Title>
                    <Card.Text>{eachMobile.manufacturer}</Card.Text>
                    <Link to={`/phones/${eachMobile._id}`}>
                      <Button variant="primary">Detalles</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;
