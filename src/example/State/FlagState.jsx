/**플래그 상태
 *
 * 플래그 값
 * - 프로그래밍에서 주로 특정 조건 혹은 제어를 위한 조건을 불리언으로 나타내는 값
 */
import React, { useState, useEffect } from "react";

export default function flagState() {
  /** 굳이 useState를 사용하지 않고 컴포넌트 내부에 변수를 활용하는 방법 */
  const isLogin =
    hasToken && hasCookie && isValidToken && isValidCookie && !isNewUser;

  return <div>{isLogin && "안녕하세요! 반갑습니다."}</div>;
}
