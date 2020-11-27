import React  from "react"; 
import styled from 'styled-components';

import { 
  Illustration,
  Faq 
} from './components';

const Conteiner = styled.div`
  background: linear-gradient(hsl(273, 75%, 66%), hsl(240, 73%, 65%) );
  background-repeat: no-repeat;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;


  @media (min-width: 900px){
    height: 100vh;
  } 



`;


const Card = styled.div`
  background: white;
  box-shadow: -1px 5px 18px 0px #00000045;
  max-width: 300px;
  border-radius: 20px;
  padding: 20px;
  margin-top: 220px;
  margin-bottom: 100px;
  width: 90%;



  @media (min-width: 900px){
    max-width: 850px;
    height: 430px;
    display: flex;
    align-items: center;
    padding: 0;
    margin-bottom: 200px;
  } 


`;



const App = () => {
  return (
    <Conteiner>
      
      <Card>

        <Illustration/>

        <Faq/>

      </Card>


      
    </Conteiner>
    )
}

export default App;
