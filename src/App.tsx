import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Container, Row, Col } from 'reactstrap';
import ColorBar from './components/ColorBar';
import Header from './components/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  interface IPrices {
    [colorName: string]: {
      [key: string]: any
    }
  }
  interface IItemCounts {
    [colorName: string]: number
  }

  const prices: IPrices = {
    'Red': {
      hex: '#E40303',
      low: 0.05,
      high: 1.00,
    },
    'Orange': {
      hex: '#FF8C00',
      low: 1.00,
      high: 3.00,
    },
    'Yellow': {
      hex: '#FFED00',
      low: 3.00,
      high: 6.00,
    },
    'Green': {
      hex: '#008026',
      low: 6.00,
      high: 10.00,
    },
    'Blue': {
      hex: '#24408E',
      low: 10.00,
      high: 20.00,
    },
    'Pink': {
      hex: '#EB008E',
    }
  }

  const [tally, setTally] = useState(0);
  const [itemCounts, setItemCounts] = useState<IItemCounts>({});
  const [multiplier, setMultiplier] = useState(0.5);

  const handleItemCounts = (colorName: string, count: number) => {
    setItemCounts({ ...itemCounts, [colorName]: count });
  };

  const handleMultiplier = (value: number) => {
    setMultiplier(value)
  }

  const calculate = () => {
    let newTally = 0
    for (const color in itemCounts) {
      if (color != 'Pink') {
        let increment = (prices[color]['high'] - prices[color]['low']) / 100
        console.log(increment)
        let itemCost = prices[color]['low'] + (multiplier * increment)
        newTally += itemCounts[color] * itemCost
      } else {
        newTally += itemCounts[color]
      }
    }
    setTally(newTally)
  }

  useEffect(() => {
    calculate()
  }, [itemCounts, multiplier])

  return (
    <>
      {
        Header(handleMultiplier)
      }
      <Container>
        {
          Object.keys(prices).map((colorName) => {
            return (
              ColorBar(
                colorName,
                prices[colorName]['hex'],
                prices[colorName]['low'],
                prices[colorName]['high'],
                handleItemCounts
              )
            )
          })
        }
        <Navbar
          className='m-0 p-0 fixed-bottom display-5'
          style={{ backgroundColor: '#732982' }}
        >
          <Row className='mx-auto slidecontainer display-5'>
            <Col
              className='col-12 d-flex justify-content-center text-center'
            >
              Tally: ${tally.toFixed(2)}
            </Col>
          </Row>
        </Navbar>
      </Container>
    </>
  );
}

export default App;
