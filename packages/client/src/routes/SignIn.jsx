import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container'
import axios from 'axios';

function SignIn() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    email:'',
    password:''

  })
const handleChange = (e) => {
setFormData({
  ...formData,
  [e.target.name]:e.target.value
})
}

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
axios.post('http://localhost:3000/users/login', formData, {
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
}).then((response)=>{
  if(response.statusText === 'OK' || response.status === 200)
    {
    alert('로그인 성공!')
    location.href = '/'
  }
})

  };

  return (
    <Container className="py-5">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="12" controlId="validationCustom01">
            <Form.Label>이메일</Form.Label>
            <Form.Control
              required
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row>
          <Form.Group as={Col} md="12" controlId="validationCustom02">
            <Form.Label>비밀번호</Form.Label>
            <Form.Control
              required
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          </Row>
        <Row className="py-3"><Col><Button type="submit">Submit form</Button></Col></Row>
      </Form>
    </Container>
  );
}

export default SignIn;