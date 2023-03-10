import React, { useEffect, useState } from 'react';
import { Input, Navbar, Row, Col } from 'reactstrap';

function Header(handleMultiplier: (value: number) => void) {
  const [multiplier, setMultiplier] = useState(50)

  useEffect(() => {
    handleMultiplier(multiplier)
  }, [multiplier])

  return (
    <Navbar
      className='navbar-default sticky-top text-white'
      style={{ backgroundColor: '#732982' }}
    >
      <Row className='mx-auto slidecontainer display-5'>
        <Col
          className='col-12 d-flex justify-content-center text-center'
        >
          Sliding Scale Calculator
        </Col>
      </Row>
      <Row
        className='mx-auto slidecontainer'
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
    </Navbar>
  );
}

export default Header;