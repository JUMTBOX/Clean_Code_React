import React, { useState, useRef, useEffect } from "react";
/**
 리렌더링 방지가 필요하다면 useState 대신 useRef
 
 컴포넌트의 전체적인 수명과 동일하게 지속된 정보를 일관적으로 제공해야하는 경우 
*/
export default function RefInsteadOfState() {
  // state를 사용하여 불필요한 리렌더링을 만드는 코드
  // const [isMount, setIsMount] = useState(false);
  const isMount = useRef(false);

  useEffect(() => {
    // if (!isMount) {
    //    setIsMount(true);
    // }
    isMount.current = true;

    return () => isMount.current === false;
  }, []);

  return <div>{isMount && "컴포넌트 마운트 완료!!"}</div>;
}
