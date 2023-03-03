import React, { useEffect, useState } from 'react';
import { Input, Navbar, Nav, Row, Col } from 'reactstrap';

function Footer(handleMultiplier: (value: number) => void) {
  const [multiplier, setMultiplier] = useState(50)

  useEffect(() => {
    console.log(multiplier);
    handleMultiplier(multiplier)
  }, [multiplier])

  return (
    <Navbar
      className='fixed-bottom text-white'
      style={{ backgroundColor: '#732982' }}
    >
      <Nav
        className='mx-auto d-flex justify-content-center slidecontainer'
      >
        <Row className='slidecontainer display-5'>
          <Col
            className='col-12 d-flex justify-content-center text-center'
          >
            Sliding Scale Calculator
          </Col>
        </Row>
        <Row
          className='slidecontainer'
        >
          <Col
            className='col-2 lead'
          >
            low
          </Col>
          <Col
            className='col-8 slidecontainer'
          >
            <Input
              type='range'
              min='0'
              max='100'
              value={multiplier}
              className='slider'
              onChange={(e) => setMultiplier(Number(e.target.value))}
            />
          </Col>
          <Col
            className='col-2 lead'
          >
            high
          </Col>
        </Row>
      </Nav>
    </Navbar>
  );
}

export default Footer;