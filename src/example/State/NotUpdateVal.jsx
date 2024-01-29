/**변수를 컴포넌트 내부에 직접적으로 가지고 있는 경우 */
import React, { useState } from "react";

export default function NotUpdateVal() {
  // 상수를 다루거나 혹은 일반적인 방치
  // 업데이트가 되지 않는 일반적인 객체
  // 하지만 아래 코드에서 children으로, 다른 컴포넌트에 내리는 props로 활용되고 있다.
  // 좋지 못한 이유 => 컴포넌트 내부에 있기 때문에 컴포넌트가 렌더링 될때마다 같은 값이어도 항상 참조해서 트리거해야함
  // 해결 방법 => 리액트 상태로 바꾸거나 아예 컴포넌트 외부로 내보낸다.
  const INFO = {
    name: "My Component",
    value: "Clean Code React",
  };

  const [count, setCount] = useState(0);

  const onIncrement = () => setCount((v) => v + 1);
  const onDecrement = () => setCount((v) => v - 1);

  return (
    <div>
      <main>
        <header>{INFO}</header>
        <ShowInfo info={INFO} count={count} />
        <ButtonGroup onIncrement={onIncrement} onDecrement={onDecrement} />
      </main>
    </div>
  );
}
