import React from 'React'
import Button from 'components/Button'

export default (props) => {
  const incrementCounter = () => {
    props.incrementCounter()
  }

  return (
    <section>
      <>
        <h1>About Page</h1>
        <Button onClick={incrementCounter}>Increment</Button>
        <p>Current Count: {props.counter}</p>
      </>
    </section>
  );
}
