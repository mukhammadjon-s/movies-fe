import React from 'react';
export interface CounterProps {
  count: number;
  setCount: (count: number) => void;
}

export function Counter({ count, setCount }: CounterProps) {
  return React.createElement(
    'div',
    null,
    `Current counter: ${count}`,
    React.createElement('br'),
    React.createElement('br'),
    React.createElement(
      'button',
      { onClick: () => setCount(count - 1) },
      'Decrement'
    ),
    React.createElement(
      'button',
      { onClick: () => setCount(count + 1) },
      'Increment'
    )
  );
}

export default Counter;
