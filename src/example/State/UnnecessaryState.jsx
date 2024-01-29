import React, { useState } from "react";

const MOCK_DATA = [
  { userId: 1, id: 1, title: "clean code", completed: false },
  { userId: 2, id: 2, title: " clean room", completed: true },
];

const CONSTANTS = {
  name: "My Components",
  value: "Clean Code React",
};

export default function UnnecessaryState(props) {
  /**
   * 불필요한 상태를 만든다면 ?
   *
   * 결국에는 리액트에 의해 관리되는 값이 늘어나는 것
   * 그러다보면 렌더링에 영향을 주는 값이 늘어나서 관리 포인트가 더더욱 늘어난다
   */
  const [userList, setUserList] = useState(MOCK_DATA);
  /** 렌더링마다 업데이트가 되고 고유의 값을 가진다고
   * 가정한다면 state보다는 변수로 활용하는 것이 낫다.
   */

  // 안좋은 예시 => const [complUserList, setComplUserList] = useState(MOCK_DATA);

  /**
    컴포넌트 내부의 변수는 ?
   - 렌더링 마다 고유의 값을 가지는 계산된 값 (Computed Value/공식 용어 아님) */
  const complUserList = MOCK_DATA.filter((el) => el.completed === true);

  return (
    <div>
      <header>{CONSTANTS.value}</header>
      <article>
        <ul>
          {MOCK_DATA.map((user) => (
            <li>
              {user.title} / {user.completed}
            </li>
          ))}
        </ul>
        {/** props를 state에 넣지 말고 바로 return 문에서 사용하는 것을 권장 */}
        <ul>
          {props.userList.map((user) => (
            <li>
              {user.title} / {user.completed}
            </li>
          ))}
        </ul>

        <ul>
          {complUserList.map((user) => (
            <li>
              {user.title} / {user.completed}
            </li>
          ))}
        </ul>
      </article>
    </div>
  );
}
