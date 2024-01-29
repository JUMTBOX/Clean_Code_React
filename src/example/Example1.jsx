import React, { useEffect, useState } from "react";

export default function InitState() {
  const [count, setCount] = useState("0");
  /**올바른 초기값 설정 */
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setList(result);
    };
    fetchData();
  }, []);

  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
      {/**초기 값을 제대로 설정하지 않을 경우 && 앞처럼 불필요한 코드가 붙게 됨 */}
      {Array.isArray(list) && list.map((item) => <div>{item}</div>)}
    </>
  );
}
