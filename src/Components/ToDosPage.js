import { useNavigate} from 'react-router-dom';
import styled from "styled-components";
import { ProfilePhoto } from './SignUpPage';
import { useEffect,useState } from "react";
import doneIcon from '../media/doneicon.svg'
import deleteIcon from '../media/deleteicon.svg'

function ToDosPage() {
  const photoUrl = localStorage.getItem('photoUrl')
  const name = localStorage.getItem('name')

  const [todoList,setTodoList]=useState(JSON.parse(localStorage.getItem('todoList')) )
  const [isDone, setIsDone] = useState(false)
  const [newTodo,setNewTodo]=useState(localStorage.getItem('newTodo') || '')
  const [isLoggedIn,setIsLoggedIn]=useState(true)

  const navigate = useNavigate()
  
  useEffect(()=>{
    if(!photoUrl || name === ''){
      setIsLoggedIn(true)
      navigate('/')
    }
  },[name,navigate,photoUrl])

  useEffect(()=>{
    localStorage.setItem('newTodo', newTodo);
    localStorage.setItem('todoList',JSON.stringify(todoList))
  },[newTodo,todoList])


  const handleClickAdd = () =>  {
    if(newTodo.length > 0 && newTodo.trim() !== ''){
      todoList.push({id: todoList.length  , text: newTodo, done:false})
      setNewTodo('')
    }
      setIsDone(!isDone) 
  }

  const handleClickDone = (todoId) => {
    const updatedTodos = todoList.map((todo) =>
      todo.id === todoId ? { ...todo, done: !todo.done } : todo
    );
    setTodoList(updatedTodos);
  };

  const handleClickDelete = (todoId)=>{
    const newTodos = todoList.filter((todo,index)=>{
      // return todoId !== index
      return todoId !== todo.id
    })
    setTodoList(newTodos)
  }

  const handleLogOut = ()=>{
      navigate('/')
      localStorage.clear()
      setIsLoggedIn(false)
  }

  return (
    <>
      <ToDosHeader>
        <Logo>TO DO</Logo>
        <MyInformation>
          
          <UserName onClick={()=>{setIsLoggedIn(!isLoggedIn)}}>{name}</UserName>
          <Profile src={photoUrl} onClick={()=>{setIsLoggedIn(!isLoggedIn)}}/>
          {!isLoggedIn ? <LogOutMenu> <span onClick={handleLogOut}>Log Out</span> </LogOutMenu> : ''}
          
        </MyInformation>
      </ToDosHeader>
      
      <Container>
          <TodoHeading>Add Your Daily Tasks</TodoHeading>
          <div style={{width:'100%',display:'flex'}}>
            <AddToDosInput 
            type='text' 
            placeholder='my task'
            value={newTodo}
              onChange={(e)=>{
                  setNewTodo(e.target.value)
              }}
            />
            <AddBtn onClick={()=> handleClickAdd()}>Add</AddBtn>
          </div>

          <ul style={{width:'100%'}}> 
          {todoList.map((todo,index)=>{
          return (
          <StyledList key={Math.random()} style={{ backgroundColor: todo.done ? '#5efc8d' : '' }} > 
            <p>{todo.text}</p> 
            <div>
              <img src={doneIcon} 
              style={{marginRight:'29.29px',cursor:'pointer'}}
              onClick={()=>handleClickDone(todo.id)}
              alt='V'
            />
              <img src={deleteIcon}
              style={{cursor:'pointer'}}
              onClick={()=>handleClickDelete(todo.id)}
              alt='X'
              />
            </div>
          </StyledList>
          )
      })}
          </ul>
      </Container>
    </>
  );
}

export default ToDosPage;

// STYLED COMPONENTS 

// This is header styles
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

  @media (max-width:550px){
    font-size: 25px;
    font-weight: 600;
  }
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
 @media (max-width:350px){
    display: none;
  }
`

// this is container styles

const Container = styled.div`
  max-width: 595px;
  width: 100%;
  margin: 0 auto;
  margin-bottom: 50px;
  padding: 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TodoHeading = styled.h1`
  font-size: 42px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 27px;
  text-align: center;
  @media (max-width:550px){
    font-size: 30px;
  }
`
const AddToDosInput = styled.input`
  width: calc(100% - 108px);
  height: 76px;
  margin-bottom: 51px;
  padding: 0 24px;
  border: none;
  border-radius: 4px;
  background: #e6ebff;
  font-size:22px;
  font-weight: 300;

  :focus{
        outline: none;
        border: 1px solid #5efc8d;
    }
  
  @media (max-width:550px){
  font-size: 18px;
  height: 60px;
  width: calc(100% - 80px);
  }
`
const AddBtn = styled.button`
  width:108px;
  height:76px;
  background-color:#5efc8d;
  border-radius: 4px;
  font-size:32px;
  color:#000000;
  cursor: pointer;
  transition: all .5s;

  &:hover{
    background-color: aqua;
  }
  @media (max-width:550px){
    font-size: 22px;
    height: 60px;
    width: 80px;
  }
`
const StyledList = styled.li`
  width: 100%;
  min-height: 54px;
  background-color: #000000;
  border-radius: 4px;
  font-weight: 300;
  color: #FFFFFF;
  font-size:22px;
  margin-bottom: 16px;
  padding: 11.5px 11.7px 11.5px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all .5s;

  &:hover{
    background-color: #e6ebff;
  }
  @media (max-width:550px){
    font-size: 18px;
  }
  @media (max-width:350px){
    font-size: 15px;
    padding: 10px;
  }
`

const LogOutMenu = styled.div`

  width: 120px;
  height: 48px;

  top: 90px;
  right: 5px;
  position: absolute;
  border-radius: 6px;

  background: #5EFC8D;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 25px;
  font-weight: 900;
  opacity: 0.8;
  cursor: pointer;

  &:hover{
    background-color: aqua;
  }
`;