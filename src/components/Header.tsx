import React from 'react';
import { Navbar, Row, Col } from 'reactstrap';

function Header(tally: number) {
  return (
    <Navbar
      className='navbar-default sticky-top text-white'
      style={{ backgroundColor: '#732982' }}
    >
      <Row className='mx-auto slidecontainer display-5'>
        <Col
          className='col-12 d-flex justify-content-center text-center'
        >
          Suggested Total:<br/>
          ${tally.toFixed(2)}
        </Col>
      </Row>
    </Navbar>
  )
}

export default Header;