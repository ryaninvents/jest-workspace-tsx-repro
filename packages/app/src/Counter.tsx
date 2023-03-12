import * as React from 'react';
import Button from '~ui/Button';

export default function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <p>
        Count:
        <span data-testid="count-value">{count}</span>
      </p>
      <Button data-testid="increment" onClick={() => setCount((c) => c + 1)}>
        Increment
      </Button>
    </div>
  );
}
