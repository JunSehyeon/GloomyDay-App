import React from "react";
import "./style/LandingPage.style.css"; // 스타일 파일을 연결합니다.

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="hero">
        <img
          src="/image/홈페이지사진.png"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default LandingPage;