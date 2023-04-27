import { useLocation } from 'react-router-dom';
import styled from "styled-components";
import { ProfilePhoto } from './SignUpPage';
import { useEffect, useRef, useState } from "react";
import doneIcon from '../media/doneicon.svg'
import deleteIcon from '../media/deleteicon.svg'

function ToDosPage() {
    const { state } = useLocation();
    const { photoUrl, name } = state;
    const todos = [
      { id: 0, text: 'Lecture', done: false },
      { id: 1, text: 'Homework', done: false },
      { id: 2, text: 'Workout', done: false },
      { id: 3, text: 'Sleep', done: false }
    ]
    const [todoList,setTodoList]=useState(todos)
    const [isDone, setIsDone] = useState(false)
    const [newTodo,setNewTodo]=useState(localStorage.getItem('newTodo') || '')

    useEffect(()=>{
      localStorage.setItem('newTodo', newTodo);
},[todos])

    function handleClickAdd()  {
      if(newTodo.length > 0){
        todoList.push({id: todoList.length  , text: newTodo, done:false})
      }
      setIsDone(!isDone)
      console.log(todoList);
    }
    const handleClickDone = (todoId) => {
      const updatedTodos = todoList.map((todo) =>
        todo.id == todoId ? { ...todo, done: !todo.done } : todo
      );
      setTodoList(updatedTodos);
    };

    const handleClickDelete = (todoIndex)=>{
      const newTodos = todoList.filter((todo,index)=>{
        return todoIndex !== index
      })
      setTodoList(newTodos)
    }
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
            <AddToDosInput 
            type='text' 
            placeholder='my task'
            value={newTodo}
              onChange={(e)=>{
                  setNewTodo(e.target.value)
              }}
            />
            <AddBtn onClick={()=> handleClickAdd()}>Add</AddBtn>
          <ul> 
          {todoList.map((todo,index)=>{
          return (
          <StyledList key={todo.id} style={{ backgroundColor: todo.done ? 'green' : '' }} > 
            {todo.text} 
            <div>
              <img src={doneIcon} 
              style={{marginRight:'29.29px',cursor:'pointer'}}
              onClick={()=>handleClickDone(todo.id)}
            />
              <img src={deleteIcon}
              style={{cursor:'pointer'}}
              onClick={()=>handleClickDelete(index)}
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
 @media (max-width:550px){
    display: none;
  }
`
const Container = styled.div`
  max-width: 595px;
  margin: 0 auto;
  padding: 35px 0;
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
  width: 487px;
  height: 76px;
  padding: 0 24px;
  margin-bottom: 51px;
  font-size:22px;
  background-color:#e6ebff;
  position: relative;

  :focus{
        outline: none;
        border: 1px solid #5efc8d;
    }
`
const AddBtn = styled.button`
  width: 108px;
  width:108px;
  height:76px;
  background-color:#5efc8d;
  border-radius: 4px;
  font-size:32px;
  color:#000000;
  position: absolute;
  cursor: pointer;
  transition: all .5s;

  &:hover{
    background-color: aqua;
  }
`
const StyledList = styled.li`
  width: 100%;
  height: 54px;
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
`