import React, { useEffect, useReducer } from "react";
/**
 * 로직에 대한 부분을 컴포넌트로부터 분리하는 방법 (커스텀 훅을 사용하여)
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

/**커스텀 훅 구현부 */
const useFetchData = (url) => {
  const [state, distpatch] = useReducer(reducer, INIT_STATE);
  useEffect(() => {
    const fetchData = async () => {
      //fetch Data 시도
      distpatch({ type: "FETCH_LOADING" });

      await fetch(url)
        .then(() => {
          //fetch Data 성공
          distpatch({ type: "FETCH_SUCCESS" });
        })
        .catch(() => {
          //fetch Data 실패
          distpatch({ type: "FETCH_ERROR" });
        });
    };
    fetchData();
  }, [url]);
  return state;
};

export default function CustomHooks() {
  const { isLoading, isSuccess, isError } = useFetchData("url");

  if (isLoading) return <LoadingComponent />;
  if (isError) return <ErrorComponent />;
  if (isSuccess) return <SuccessComponent />;
}
