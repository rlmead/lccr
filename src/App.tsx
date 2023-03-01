import React, { useState } from 'react';
import { Container } from 'reactstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [tally, setTally] = useState(0);

  return (
    <Container>
      LCCR Shop Tally: {tally}
    </Container>
  );
}

export default App;
