import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProfilePhoto } from './SignUpPage';

function ToDosPage() {
    const { state } = useLocation();
    const { photoUrl, name } = state;
    const todos = ['lecture', 'homework','workout','sleep']
  return (
    <>
      <ToDosHeader>
        <Logo>TO DO</Logo>
        <MyInformation>
          <UserName>{name}</UserName>
          <Profile src={photoUrl}/>
        </MyInformation>
      </ToDosHeader>
      <Container>
          <TodoHeading>Add Your Daily Tasks</TodoHeading>
          <AddToDosInput type='text' placeholder='my task'/>
          <AddBtn>Add</AddBtn>
          {todos.map((todo,index)=>{
            return 
            <div style={{width:'100%',backgroundColor:'black'}}>
              <span key={index}>{todo}</span>
            </div>
          })}
      </Container>
    </>
  );
}

export default ToDosPage;

const ToDosHeader = styled.header`
  width: 100%;
  height: 98px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 28px;
`
const Logo = styled.span`
  color: #ffffff;
  font-size:36px ;
  font-weight: 900;
`
const MyInformation = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`
const Profile = styled(ProfilePhoto)`
  width:68px;
  height:68px;
`
const UserName= styled.h5`
 color: #ffffff;
 font-size: 22px;
 font-weight: 300;
`
const Container = styled.div`
  max-width: 595px;
  margin: 0 auto;
  background-color: red;
  padding: 35px 0;
`
const TodoHeading = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 27px;
  text-align: center;
`
const AddToDosInput = styled.input`
  width: 487px;
  height: 76px;
  padding: 0 24px;
  font-size:22px;
  background-color:#e6ebff;
  position: relative;

  :focus{
        outline: none;
        border: 1px solid #5efc8d;
    }
`
const AddBtn = styled.button`
  width:108px;
  height:76px;
  background-color:#5efc8d;
  border-radius: 4px;
  font-size:32px;
  color:#000000;
  position: absolute;
  cursor: pointer;
  
  &:hover{
    background-color: aqua;
  }
`