import styled from "styled-components";
import { StarterDiv } from "./StarterPage";
import cameraIcon from '../media/add-photo.svg'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpPage() {
    const [photoUrl, setPhotoUrl] = useState(localStorage.getItem('photoUrl') || '');
    const [name, setName] = useState(localStorage.getItem('name') || '');
    const [allowNextPage,setAllowNextPage]=useState('')
    const navigate = useNavigate()

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPhotoUrl(reader.result);
        };
      };
    const checkPhotoUrl = () => {
        if(!photoUrl){
            alert('Please upload photo...')
        }
    }

    const handleSubmit = (event)=>{
        event.preventDefault()
        if(photoUrl && name !== ''){
            setAllowNextPage(true)
        }else {
                setAllowNextPage('')
        }  
    }

        useEffect(()=>{
            localStorage.setItem('photoUrl', photoUrl);
            localStorage.setItem('name', name);
        const storedPhotoUrl = localStorage.getItem('photoUrl');
        const storedName = localStorage.getItem('name'); 
            if (storedPhotoUrl && storedName) {
                setPhotoUrl(storedPhotoUrl);
                setName(storedName);
            } 
    },[photoUrl,name])

    useEffect(()=>{
        if(allowNextPage){
            navigate('/ToDos', { state: { photoUrl, name } })
        }
    },[allowNextPage])

  return (
    <StarterDiv>
        <Form onSubmit={handleSubmit}>
            <FormHeading>Get Started</FormHeading>
            <InputHeading>add a photo</InputHeading>
                <PhotoContainer>
                    <label>
                        {photoUrl ?  <ProfilePhoto src={photoUrl}/> :<CameraIcon src={cameraIcon}/> }
                        <PhotoInput 
                        type="file" 
                        accept="image/*"  
                        onChange={handlePhotoChange}
                        required 
                        />
                    </label>
                </PhotoContainer>
            <InputHeading>fill in you name</InputHeading>
            <NameInput 
            type="text" 
            placeholder="your name"
            value={name}
            onChange={(e)=>{
                setName(e.target.value)
            }}
            maxLength={30}
            required
            />
            <SignUpBtn onClick={checkPhotoUrl} >Sign In</SignUpBtn>
            
        </Form>
    </StarterDiv>
  );
}
export default SignUpPage;

// STYLED COMPONENTS 

const Form = styled.form`
max-width: 588px;
height: 688px;
background-color: #ffffff;
border-radius: 4px;
display: flex;
flex-direction: column;
align-items: center;
padding: 33px 50.5px;
margin:40px 20px;
@media (max-width:600px){
    padding: 33px 0;
}
`
const FormHeading = styled.h1`
text-align: center;
color: #000000;
font-size: 48px;
margin-bottom: 44px;
@media (max-width:600px){
    font-size: 35px;
}
`
const InputHeading = styled.h4`
    font-size: 22px;
    color: #000000;
    font-weight: 300;
`

const PhotoContainer = styled.div`
    width: 122px;
    height: 122px;
    border-radius: 50%;
    margin: 0 auto;
    background-color: #e6ebff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    margin-bottom: 53px;
`
const PhotoInput = styled.input`
    display: none;
`
const CameraIcon = styled.img`
    display: inline-block;
    width: 44px;
    height: 40px;
    background-size: contain;
    cursor: pointer;
    background-size: contain;
    cursor: pointer;
`
export const ProfilePhoto = styled.img`
    width: 122px;
    height: 122px;
    border-radius: 50%;
    cursor: pointer;
`

const NameInput = styled.input`
    background-color: #e6ebff;
    width:100%;
    height: 76px;
    border-radius: 4px;
    font-size: 22px;
    padding: 0 24px;
    margin-top: 16px;

    :focus{
        outline: none;
        border: 1px solid #5efc8d;
    }
`

const SignUpBtn = styled.button`
    margin-top: 76px;
    width: 258px;
    height: 66px;
    font-size: 45px;
    border-radius: 4px;
    background-color: #5efc8d;
    color: #000000;
    font-size: 45px;
    transition: linear .3s ;
    cursor: pointer;

    &:hover{
        background-color: aqua;
    }

  @media (max-width:600px){
    font-size: 30px;
    width: 200px;
    height: 80px;
  }
`