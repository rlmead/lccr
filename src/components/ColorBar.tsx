import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus, faDollar } from "@fortawesome/free-solid-svg-icons";

function ColorBar(colorName: string, hex: string, low: number, high: number, handleItemCounts: (colorName: string, count: number | undefined) => void) {
  const [numItems, setNumItems] = useState<number | undefined>(undefined)

  useEffect(() => {
    handleItemCounts(colorName, numItems)
  }, [numItems])

  function removeItem() {
    (typeof numItems == 'number' && numItems > 0) && setNumItems(numItems - 1)
  }

  function addItem() {
    typeof numItems == 'number'
      ? setNumItems(numItems + 1)
      : setNumItems(1)
  }

  return (
    <div>
      <Row
        className='m-2'
        style={{ backgroundColor: hex, borderRadius: '5px' }}
      >
        <Col>
          <div className='display-1'>
            {colorName}
          </div>
          {
            colorName !== 'Pink'
              ? `$${low.toFixed(2)}-$${high.toFixed(2)}`
              : 'custom-priced'
          }
        </Col>
        <Col className='d-flex align-items-center'>
          {
            colorName !== 'Pink' ?
              <Row className='d-flex align-items-center'>
                <Col className='col-2 d-flex justify-content-start'>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className='fa-2xl'
                    style={{
                      cursor: 'pointer',
                      outline: 'none'
                    }}
                    onClick={removeItem}
                  />
                </Col>
                <Col className='col-8'>
                  <Input
                    type='number'
                    inputMode='numeric'
                    min='0'
                    value={numItems}
                    onChange={(e) => setNumItems(Number(e.target.value))}
                  />
                </Col>
                <Col className='col-2 d-flex justify-content-end'>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className='fa-2xl'
                    style={{ cursor: 'pointer', outline: 'none' }}
                    onClick={addItem}
                  />
                </Col>
              </Row>
              :
              <Row className='d-flex align-items-center'>
                <Col className='col-2 d-flex justify-content-start'>
                  <FontAwesomeIcon
                    icon={faDollar}
                    className='fa-2xl'
                    style={{ outline: 'none' }}
                  />
                </Col>
                <Col className='col-8'>
                  <Input
                    type='number'
                    inputMode='decimal'
                    min='0'
                    onChange={(e) => setNumItems(Number(e.target.value))}
                  />
                </Col>
                <Col className='col-2 d-flex justify-content-end'>
                </Col>
              </Row>
          }
        </Col>
      </Row>
    </div>
  )
}

export default ColorBar;