"use client";

import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0)
  return (
    <>
      <h2>The Count is: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Bump it</button>
    </>
  )
}
