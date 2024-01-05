import React, { useState } from 'react';
import { Button, Container, Row, Col, Carousel, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { BsGoogle, BsFacebook } from 'react-icons/bs'; // Import Bootstrap Icons
import './App.css'; // Import custom styles

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Container className="my-5">
      <Row className="g-0">
        {/* Carousel on the left */}
        <Col md={6} className="carousel-container">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </Col>

{/* Login details on the right */}
<Col md={6} className="login-details-container d-flex flex-column justify-content-center align-items-center">
  <div className="d-flex flex-row mt-2">
    <span className="h1 mb-0">Welcome Back!</span>
  </div>

  <h5 className="my-4 pb-3">Please sign in to continue</h5>

  <Form.Group className="mb-4">
    <Form.Control
      type="email"
      size="md"
      placeholder="ID number"
    />
  </Form.Group>

  <Form.Group className="mb-4 position-relative">
    <Form.Control
      type={showPassword ? 'text' : 'password'}
      size="md"
      placeholder="Password"
    />
    <i
      className={`bi bi-eye${showPassword ? '-slash' : ''} eye-icon`}
      onClick={() => setShowPassword(!showPassword)}
    ></i>
  </Form.Group>

  <Button className="mb-4 px-5 sign-in-btn" variant="warning" size="lg">
    Sign in
  </Button>

  <p>or</p>
  <Row>
  {/* Add Google and Facebook buttons with icons */}
  <Col className="d-flex justify-content-between">
    <Button className="mb-4 px-2 d-flex align-items-center" variant="light" size="md">
      <BsGoogle className="me-2" />
      Sign up with Google
    </Button>
    <Button className="mb-4 px-2 d-flex align-items-center" variant="primary" size="md">
      <BsFacebook className="me-2" />
      Sign up with Facebook
    </Button>
  </Col>
</Row>

  <a className="small text-muted" href="#!">
    Forgot password?
  </a>

  <p className="mb-5 pb-lg-2">
    Don't have an account?{' '}
    <a href="#!">Go to Registration</a>
  </p>
  <div className="d-flex flex-row justify-content-start">
    <p className="small text-muted me-1">&copy; 2020 SmartPOS App.</p>
  </div>
</Col>

      </Row>
    </Container>
  );
}

export default App;
