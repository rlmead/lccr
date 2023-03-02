import React, { useEffect, useState } from 'react';
import { Container, Row } from 'reactstrap';
import ColorBar from './components/ColorBar';
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

  const calculate = () => {
    let newTally = 0
    for (const color in itemCounts) {
      if (color != 'Pink') {
        let itemCost =
          (prices[color]['low']
          + prices[color]['high'])
          * multiplier
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
      <Row
        style={{ color: 'black' }}>
        Tally: ${tally.toFixed(2)}
      </Row>
    </Container>
  );
}

export default App;
