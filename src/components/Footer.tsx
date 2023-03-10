import React, { useEffect, useState } from 'react';
import { Input, Navbar, Row, Col } from 'reactstrap';

function Footer(handleMultiplier: (value: number) => void) {
  const [multiplier, setMultiplier] = useState(100)

  useEffect(() => {
    handleMultiplier(multiplier)
  }, [multiplier])

  return (
    <Navbar
      className='m-0 p-0 fixed-bottom display-5'
      style={{ backgroundColor: '#732982' }}
    >
      <Row className='mx-auto slidecontainer display-5'>
        <Col
          className='col-12 d-flex justify-content-center text-center'
        >
          Sliding Scale
        </Col>
      </Row>
      <Row
        className='mx-auto slidecontainer'
      >
        <Col
          className='col-2 lead d-flex justify-content-end'
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
          className='col-2 lead d-flex justify-content-start'
        >
          high
        </Col>
      </Row>
    </Navbar>
  );
}

export default Footer;