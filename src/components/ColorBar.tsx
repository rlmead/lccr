import React, { useEffect, useState } from "react";
import { Row, Col, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareMinus, faSquarePlus, faDollar } from "@fortawesome/free-solid-svg-icons";

function ColorBar(colorName: string, hex: string, low: number, high: number, handleItemCounts: (colorName: string, count: number) => void) {
  const [numItems, setNumItems] = useState(0)

  useEffect(() => {
    handleItemCounts(colorName, numItems)
  }, [numItems])

  function removeItem() {
    numItems > 0 && setNumItems(numItems - 1)
  }

  function addItem() {
    setNumItems(numItems + 1)
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
        <Col>
          {
            colorName !== 'Pink' ?
              <Row>
                <Col className='col-2'>
                  <FontAwesomeIcon
                    icon={faSquareMinus}
                    className='fa-xl'
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
                    min='0'
                    value={numItems}
                    onChange={(e) => setNumItems(Number(e.target.value))}
                  />
                </Col>
                <Col className='col-2'>
                  <FontAwesomeIcon
                    icon={faSquarePlus}
                    className='fa-xl'
                    style={{ cursor: 'pointer', outline: 'none' }}
                    onClick={addItem}
                  />
                </Col>
              </Row>
              :
              <Row>
              <Col className='col-2'>
                <FontAwesomeIcon
                  icon={faDollar}
                  className='fa-xl'
                  style={{ outline: 'none' }}
                />
              </Col>
                <Col className='col-8'>
                  <Input
                    type='number'
                    min='0'
                    onChange={(e) => setNumItems(Number(e.target.value))}
                  />
                </Col>
              </Row>
          }
        </Col>
      </Row>
    </div>
  )
}

export default ColorBar;