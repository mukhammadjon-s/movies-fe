// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import Counter from './components/counter/counter';

export function App() {
  const [count, setCount] = useState(0);
  return React.createElement(Counter, { count: count, setCount });
}

export default App;
