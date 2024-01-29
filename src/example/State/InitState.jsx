/** 초기 값?
 * - 가장 먼저 렌더링 될때 순간적으로 보여질 수 있는 값
 * - 당연히 초기에 렌더링 되는 값
 *
 * - 지키지 않을 경우 ? => 렌더링 이슈, 무한 루프, 타입 불일치로 의도치 않은 동작 => 런타임 에러
 * - 넣지 않으면 ? => undefined
 * - 상태를 CRUD => 상태를 지울때도 초기값을 잘 기억해놔야 원상태로 돌아간다.
 * - 빈값 ? => null 처리를 위한 불필요한 방어코드도 줄여준다.
 */

import React, { useEffect, useState } from "react";

export default function InitState() {
  /**타입을 제대로 설정하지 않은 경우 */
  const [count, setCount] = useState("0");
  /** 값을 비워둔 경우 */
  const [list, setList] = useState();

  const resetState = () => {
    setCount(INIT_COUNT_STATE);
  };

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
      {/** 타입 문제 초래 */}
      <button onClick={() => setCount((v) => v + 1)}>Increment</button>
      {/**초기 값을 제대로 설정하지 않을 경우 && 앞처럼 불필요한 방어코드가 붙게 됨 */}
      {Array.isArray(list) && list.map((item) => <div>{item}</div>)}
    </>
  );
}
