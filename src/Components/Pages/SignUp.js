import React, {useState} from 'react';
import '../Navbar/SignUp.css';
import {db} from '../Firebase/firebase'
import styled from 'styled-components'

const StyledFormWrapper = styled.div`
display:flex;
justify-content: center;
align-items: center;
align-content: center;
margin-top: 10px;
margin-bottom: 10px;
margin-left: 450px;
margin-right: 450px;
  //  width: 400px;
  //  padding: 20px;
   height: 550px;
  background-color: brown;
  color: white;

`;

const StyledForm = styled.form`
height: 400px;
  width: 400px;
  display: relative;
  align-items: center;
  align-content: center;
  flex-direction: column;
  justify-content: center;
`;

const StyledInput = styled.input`
 padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  
`;

const StyledTextArea = styled.textarea`
 padding: 20px;
  border-radius: 3px;
  /* box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.137); */
  margin-bottom: 20px;
  border: 1px solid lightgray;
  /* border: none; */
  background: #fff;
  font-size: 16px;
  color: rgb(0, 0, 32);
  outline: none;
  
`;
const StyledButton = styled.button`
   padding: 20px;
  border: none;
  background-color: rgb(2, 2, 110);
  font-weight: 500;
  font-size: 20px;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  margin-top: 10px;
`;


function SignUp() {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);
        //this .collection is inside of the database
        //here you use .add. .set overrides the previous data
        db.collection("contacts").add({
            name: name,
            email: email,
            message: message,
        })
            //right after user has submitted the form and firebase has stored it
            //you wanna ma ke sure that the user knows that its done
            .then(() => {
                alert("Message has been submitted !!");
                setLoader(false);
            })
            //let catch an error if there's some
            .catch((error) => {
                alert(error.message);
                setLoader(false);
            })

        //after we submit, the inputs are going to stay same as we have used prevent.default()
        //so we set the input fields to empty after submitting
        setName("");
        setEmail("");
        setMessage("");

    }
    return (

            <StyledFormWrapper>
                <StyledForm className = "form" onSubmit = {handleSubmit}>
                    <h1>Contact Us</h1>

                    <label>Name</label>
                    <StyledInput placeholder = "Name"
                                 value = {name}
                                 onChange = { (e) => setName(e.target.value)}
                    /> {/* As the state of name changes, we wanna run an arrow function
                On the change we will set the empty state to the input*/}

                    <label>Email</label>
                    <StyledInput placeholder = "Email"
                                 value = {email} //{email} : what ever user types in
                                 onChange = { (e) => setEmail(e.target.value)}
                    />

                    <label>Message</label>
                    <StyledTextArea placeholder = "Message"
                                    value = {message}
                                    onChange = { (e) => setMessage(e.target.value)}
                    />

                    <StyledButton type = "submit" style = {{background : loader
                            ? "#ccc" : "rgb(2,2,110"}}>Submit</StyledButton>
                </StyledForm>
            </StyledFormWrapper>
    )
}

export default SignUp
