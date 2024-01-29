import React, { useReducer } from "react";
/**
 * 구조화 된 상태를 원한다면 useReducer()
 */
const INIT_STATE = {
  isLoading: false,
  isSuccess: false,
  isError: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { isLoading: true, isSuccess: false, isError: false };
    case "FETCH_SUCCESS":
      return { isLoading: false, isSuccess: true, isError: false };
    case "FETCH_ERROR":
      return { isLoading: false, isSuccess: false, isError: true };
    default:
      return INIT_STATE;
  }
};

export default function StateToReducer() {
  /** useReducer의 첫번째 인자로는 리듀서 , 두번째 인자로는 초기 상태를 할당 */
  const [state, distpatch] = useReducer(reducer, INIT_STATE);

  const fetchData = () => {
    //fetch Data 시도
    distpatch({ type: "FETCH_LOADING" });

    fetch(url)
      .then(() => {
        //fetch Data 성공
        distpatch({ type: "FETCH_SUCCESS" });
      })
      .catch(() => {
        //fetch Data 실패
        distpatch({ type: "FETCH_ERROR" });
      });
  };

  if (state.isLoading) return <LoadingComponent />;
  if (state.isError) return <ErrorComponent />;
  if (state.isSuccess) return <SuccessComponent />;
}
