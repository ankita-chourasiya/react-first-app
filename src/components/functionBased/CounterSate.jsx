import React, { useEffect } from 'react'

const CounterState = (props) => {
  useEffect(() => {
      console.log("component did mount", props.countValue);
  }, []);

  useEffect(() => {
      console.log("component did mount", props.countValue);
  }, [props.countValue]);
}

export default CounterState;
