import React, {useState, useEffect} from "react"
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Axios from "axios"

function Signup() {

const [firstName, setFirst_Name] = useState('')
const [lastName, setLast_Name] = useState('')
const [userEmail, setUser_Email] = useState('')
const [password, setPassword] = useState('')
const submitForm = () =>{
    Axios.post ("http://localhost:5500/insert",{
        firstName : firstName, 
        lastName  : lastName, 
        userEmail : userEmail,
        password : password
    })
}
  return (
    <Form>
        <Row>
           <Col>
             <Form.Control size="md" placeholder="First name" name="firstName" onChange={(e)=>{
          console.log(e)
          setFirst_Name(e.target.value);
        }} />

         </Col>
           <Col>
          <Form.Control size="md" placeholder="Last name" name="lastName" onChange={(e)=>{
          console.log(e)
          setLast_Name(e.target.value);
        }}/>
            </Col>
         </Row>
         <br/>
         <Form.Group className="mb-3" controlId="formGroupEmail" name="userEmail"
         onChange={(e)=>{
            console.log(e)
            setUser_Email(e.target.value);
          }}>
    
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword" name="password" onChange={(e)=>{
          console.log(e)
          setPassword(e.target.value);
        }}>
     
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
     
        <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" />



      </Form.Group>
      <Button onClick={submitForm} type="submit">SIGN UP</Button>{' '}
       </Form>
  );
}

export default Signup;


  



    



