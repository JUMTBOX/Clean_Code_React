import React, { useState } from "react";

export default function PrevState() {
  const [age, setAge] = useState(42);

  function updateState() {
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
    setAge(age + 1); // setAge(42 + 1)
  }

  /** 권장되는 방식 */
  function updateState2() {
    setAge((prevAge) => prevAge + 1); // setAge(42 => 42 + 1)
    setAge((prevAge) => prevAge + 1); // setAge(43 => 43 + 1)
    setAge((prevAge) => prevAge + 1); // setAge(44 => 44 + 1)
  }

  return (
    <>
      <div>PrevState</div>
    </>
  );
}
