import React, { useState } from "react";
/**불필요한 Props 복사 지양 */
export default function CopyProps({ value }) {
  const [copyVal] = useState(value);

  return <div>{copyVal}</div>;
}
