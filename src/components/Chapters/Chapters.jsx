import React from 'react'
import './Chapters.css'
import PLANETS from '../../assets/data/planets';

import{Row,Col,Container} from 'react-bootstrap'
import { Link } from 'react-router-dom';


const Chapters = () => {
  return (
    <div className="bg-color">
      <h1 className="text-center pt-3"> Bolumler</h1>
      <Container>
      <Row className="mt-3 p-3">
      { 
       
       PLANETS.map(planet => {
           return(             
            <Col key={planet.id} sm={3} md={3} lg={3} >  
            <Link className="alink" to="/space">           
              <div className="pt-2 a-shadow">
              <img className="rotate" src={planet.photo} alt={planet.name}></img>
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">{planet.name}</div>                   
                </div>                     
              </div>
              </Link>
            </Col>  
            
          );
         })        
      }
     </Row>
     </Container>   
    </div>
  )
}
export default Chapters