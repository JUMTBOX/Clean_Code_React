import React from "react";
/**
 * Curly Braces 언제 사용할까?
 * jsx의 returnn 구문에서 속성에 문자열로 들어갈 때는 생략
 */
export default function CurlyBraces() {
  const styles = {
    backgroundColor: "blue",
    width: 1000,
  };

  return (
    <header
      className={"clean-header"}
      id={"clean-code"}
      style={styles} // === style={{ backgroundColor: "blue", width: 1000 }}
      title={"clean code react"}
    >
      <img
        className={"profile"}
        src={"fake-path/fake-file.jpg"}
        alt={"profile-image"}
      />
    </header>
  );
}
