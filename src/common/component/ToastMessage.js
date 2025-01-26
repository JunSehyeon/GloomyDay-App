import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = () => {
  const { toastMessage } = useSelector((state) => state.ui);

  useEffect(() => {
    if (toastMessage) {
      const { message, status } = toastMessage;
      if (message !== "" && status !== "") {
        toast[status](message, {
          theme: "dark", // 다크 테마
          progressStyle: { background: "#ffffff" }, // 진행 바 스타일(흰색)
        });
      }
    }
  }, [toastMessage]);

  return (
    <ToastContainer
      position="top-right"
      autoClose={5000} // 5초 뒤 닫힘
      hideProgressBar={false} // 진행 바 표시
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark" // 전체 컨테이너 다크 테마
    />
  );
};

export default ToastMessage;