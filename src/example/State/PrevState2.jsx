import React, { useState } from "react";

/** 두번의 이벤트 인터랙션이 같은 상태(state)를 바라보는 경우
 * - 이전 상태를 꺼내서 사용하는 것이 안전하다.
 */

export default function PrevState2() {
  const [cardState, setCardState] = useState({});

  const handleCardNumber = (cardNumber) => {
    setCardState((prevState) => ({
      ...cardState,
      cardNumber,
    }));

    if (cardNumber.length === 8) {
      setOpenCardPopup(true);
    }
  };

  const handleCardCompany = (cardCompany) => {
    setCardState((prevState) => ({
      ...cardState,
      ...cardCompany,
    }));

    setOpenCardPopup(false);
  };
  return (
    <div>
      <input
        type="number"
        value={cardState.cardNumber}
        onChange={(e) => handleCardNumber(e.target.value)}
      />
      <input
        type="text"
        value={cardState.cardCompany}
        onChange={(e) => handleCardCompany(e.target.value)}
      />
    </div>
  );
}
