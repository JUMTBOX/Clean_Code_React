import React, { useState } from "react";
/**
 * 연관된 상태 객체로 묶어내기
 */

export default function ObjectState() {
  const [fetchState, setFetchState] = useState({
    isLoading: false,
    isFinish: false,
    isError: false,
  });

  const fetchData = () => {
    //fetch Data 시도
    setFetchState((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    fetch(url)
      .then(() => {
        //fetch Data 성공
        setFetchState((prevState) => ({
          ...prevState,
          isFinish: true,
        }));
      })
      .catch(() => {
        //fetch Data 실패
        setFetchState((prevState) => ({
          ...prevState,
          isError: true,
        }));
      });
  };

  if (fetchState.isLoading) return <LoadingComponent />;
  if (fetchState.isError) return <ErrorComponent />;
  if (fetchState.isFinish) return <SuccessComponent />;
}
