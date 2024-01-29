import React, { useState } from "react";
/** 연관된 상태 단순화 하기 */

const PROMISE_STATE = {
  INIT: "Init",
  LOADING: "Loading",
  ERROR: "Error",
  FINISH: "Finish",
};

export default function FlatState() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [isFinish, setIsFinish] = useState(false);
  //   const [isError, setIsError] = useState(false);

  const [promiseState, setPromiseState] = useState(PROMISE_STATE.INIT);

  const fetchData = () => {
    //fetch Data 시도
    // setIsLoading(true);
    setPromiseState(PROMISE_STATE.LOADING);

    fetch(url)
      .then(() => {
        //fetch Data 성공
        // setIsLoading(false);
        // setIsFinish(true);
        setPromiseState(PROMISE_STATE.FINISH);
      })
      .catch(() => {
        //fetch Data 실패
        // setIsError(true);
        setPromiseState(PROMISE_STATE.ERROR);
      });
  };

  if (promiseState === PROMISE_STATE.LOADING) return <LoadingComponent />;
  if (promiseState === PROMISE_STATE.ERROR) return <ErrorComponent />;
  if (promiseState === PROMISE_STATE.FINISH) return <SuccessComponent />;
}
