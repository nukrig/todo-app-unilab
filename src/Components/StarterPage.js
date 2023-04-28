import styled from "styled-components";
import todoImg from '../media/todoImg.svg'
import { Link , useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";

function StarterPage() {
  const photoUrl = localStorage.getItem('photoUrl')
  const name = localStorage.getItem('name')
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const navigate = useNavigate()

  useEffect(()=>{
    if(photoUrl && name !== ''){
      setIsLoggedIn(true)
      navigate('/SignUp')
      console.log('you are logged in, loggedIn : ', !isLoggedIn);
    }
  },[name,navigate,photoUrl])
  
  return (
    <StarterDiv>
      <TodoImg src={todoImg} alt="todoImg" />
      <StarterH1>Keep Track Of Daily Tasks In Life</StarterH1>
      <Link to='/SignUp'><StarterButton>Get Started</StarterButton></Link>
    </StarterDiv>
  );
}

export default StarterPage;

// STYLED COMPONENTS 

export const StarterDiv = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const TodoImg = styled.img`
  width:90px;
  height:165px;
  margin-top: 74px;
`
const StarterH1 = styled.h1`
  color: #ffffff;
  font-size: 54px;
  margin-top: 46px;
  font-weight: 600;
  text-align: center;

  @media (max-width:600px){
    font-size: 40px;
  }
`
  const StarterButton = styled.button`
  margin-top: 140px;
  margin-bottom: 40px;
  width: 388px;
  height: 98px;
  border-radius: 4px;
  background-color: #5efc8d;
  color: #000000;
  font-size: 48px;
  transition: linear .3s ;
  cursor: pointer;

  &:hover{
    background-color: aqua;
  }

  @media (max-width:600px){
    font-size: 40px;
    width: 288px;
    height: 80px;
  }
  @media (max-width:400px){
    font-size: 30px;
    width: 200px;
    height: 80px;
  }
`

