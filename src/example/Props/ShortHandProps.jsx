import React from "react";

export default function ShortHandProps(props) {
  return (
    <header
      className="clean-header"
      title="Clean Code React"
      isDarkMode={true}
      isLogin={true}
      hasPadding={true}
      isFixed={true}
      isAdmin={true}
    >
      <ChildComponent {...props} />
    </header>
  );
}
