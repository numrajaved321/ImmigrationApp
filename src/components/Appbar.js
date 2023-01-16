import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import 'animate.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
const Appbar = () => {
  return (
    <>
      {/* <Navbar style={{backgroundColor:"transparent"}} expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            // className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Link</Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar> */}
  
    
    <Carousel slide={false}>
    <Carousel.Item>
   
      <img
        className="d-block w-100 "
        src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/banner-3.jpg"
        alt="First slide"
      />
      
      <Carousel.Caption>
        <div  class="animate__animated animate__bounceInRight animate__delay-0.5s">
        <h1 style={{fontWeight:"700", fontSize:"1.5rem", textAllign:"right",  padding: "10px 40px 30px"}}  >Effective Immigration Soloution</h1></div>
         <p> We are trusted immigration consultants who can handle your case and Our professional registered agents will assist you with your visa application.</p>
        <div class="animate__animated  animate__bounceInDown  animate__delay-0.5s">
        
        </div>
        <div class="animate__animated  animate__bounceInDown  animate__delay-0.5s">
        <Button variant="outline-light">Discover Soloutions</Button>{' '}
        </div>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="https://visarzo.smartdemowp.com/wp-content/uploads/2020/08/banner-2.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        
      <div  class="animate__animated animate__bounceInRight animate__delay-0.5s">
        <h1 style={{fontWeight:"700", fontSize:"1.5rem", textAllign:"right",  padding: "10px 40px 30px"}}  >Empowering Peoples Immigration Confidentlyl</h1></div>
       
        <div class="animate__animated  animate__bounceInDown  animate__delay-0.5s">
        <p> We are trusted immigration consultants who can handle your case and Our professional registered agents will assist you with your visa application..</p>
        </div>
        <div class="animate__animated  animate__bounceInDown  animate__delay-0.5s">
        <Button variant="outline-light">Discover Soloutions</Button>{' '}
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        style={{backgroundColor:"blue", zIndex:2}}
        src="	https://visarzo.smartdemowp.com/wp-content/uploads/2020/07/banner-1.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
      <div  class="animate__animated animate__bounceInRight animate__delay-0.5s">
        <h1 style={{fontWeight:"700", fontSize:"1.5rem", textAllign:"right",  padding: "10px 40px 30px"}}  >Our Simple Approach To Immigration Process</h1></div>
       
        <div class="animate__animated  animate__bounceInDown  animate__delay-0.5s">
        <p> We are trusted immigration consultants who can handle your case and Our professional registered agents will assist you with your visa application..</p>
        </div>
        <div class="animate__animated  animate__bounceInDown  animate__delay-0.5s">
        <Button variant="outline-light">Discover Soloutions</Button>{' '}
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </>
);

}

export default Appbar