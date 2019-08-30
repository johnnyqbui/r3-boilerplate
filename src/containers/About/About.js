import React from 'React'
import { H1, Button } from 'shared'

export default (props) => {
  const incrementCounter = () => {
    props.incrementCounter()
  }

  return (
    <section>
      <>
        <H1>About Page</H1>
        <Button onClick={incrementCounter}>Increment</Button>
        <p>Current Count: {props.counter}</p>
      </>
    </section>
  );
}
