// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import Counter from './components/counter/counter';
import styles from './app.module.css';
import { Header } from './components/header/header';

export function App() {
  const [count, setCount] = useState(0);
  const [search, onSearch] = useState("");
  return (
    <div className={styles['main-container']}>
      <Header search={search} onSearch={onSearch} />
    </div>
  )
}

export default App;
