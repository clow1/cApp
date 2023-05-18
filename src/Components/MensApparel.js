import React from "react";
import './Apparel.css';
import data from "../DB/data.json";
import { Container, Grid, Header, List, Image } from "semantic-ui-react";

class MensApparel extends React.Component {
  
  render() {
    return (
     

     <Container>
      <Header> Men's Apparel </Header>
       
      
        <List>
            {
            data.Mens.map(el => {
              
              return ( 
                <div className="Apparel">
                  <List.Item key={el.id}>
                    <List.Content>
                      {el.extras}
                      <Image src = {el.content} />    
                    </List.Content>           
                  </List.Item>
              </div>
          
               
              );
           
              
            })}
        </List>
       
      </Container>

    );
  }

  
   
   
} export default MensApparel;