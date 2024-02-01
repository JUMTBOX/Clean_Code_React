import React, { useMemo, useState } from "react";
/**불필요한 Props 복사 지양 */
export default function CopyProps({ value }) {
  const [copyVal] = useState(value);

  return <div>{copyVal}</div>;
}

/** 올바른 예시 */
function CopyPropsRight({ value }) {
  return <div>{value}</div>;
}

/**자주보이는 안티 패턴 */
function CopyPropsAntiPattern({ value }) {
  //잘못된 예시들
  const [copyVal] = useState(값비싸고_무거운_연산(value));
  const copyVal2 = 값비싸고_무거운_연산(value);
  //올바른 예시 (해결법)
  const copyValue = useMemo(() => 값비싸고_무거운_연산(value), [value]); // ===> 애초에 props를 받아오기 이전에 컴포넌트 외부에서 이러한 연산을 처리해서 내리는 것이 BEST

  return <div>{copyVal}</div>;
}
