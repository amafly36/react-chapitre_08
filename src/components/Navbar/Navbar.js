import React from 'react'
import * as ReactBootStrap from "react-bootstrap";
import { Nav, } from 'react-bootstrap';




const bar = () => {
  return (
    <div>
      
      <ReactBootStrap.Navbar bg="dark" variant="dark">
        
        <Nav>
          
          <Nav.Link href="/Home">Home</Nav.Link>
          <Nav.Link href="/Login">Login</Nav.Link>
          
        </Nav>
        
      </ReactBootStrap.Navbar>
    </div>
  )
}


export default bar