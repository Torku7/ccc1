import React, { useState } from "react";
import "../css/popup_week.css";

function BookOfTheWeek() {
  const [showPopup, setShowPopup] = useState(true);
  const [doNotOpen, setDoNotOpen] = useState(false);

  const handleClose = () => {
    setShowPopup(false);
    if (doNotOpen) {
      const date = new Date();
      date.setTime(date.getTime() + (24 * 60 * 60 * 1000));
      document.cookie = 'popup_closed=true; expires=' + date.toUTCString() + '; path=/';
    }
  };

  const handleCheckChange = () => {
    setDoNotOpen(!doNotOpen);
  };

  return (
    showPopup &&
    <div className="popup">
      <div className="week">
        <div className="week-book">
          <h4>금주의 책</h4>
        </div>
        <span className="close" onClick={handleClose}>&times;</span>
      </div>
      <hr />
      <div className="book">
        <div className="book-cover">책 표지</div>
        <div className="book-explain">
          <div className="book-title"><h1>책 제목</h1></div>
          <div className="book-author"><h5>저자</h5></div>
          <div className="book-review"><h4>동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세</h4></div>
        </div>
      </div>
      <hr />
      <div className="check-close">
        <input type="checkbox" id="remember" onChange={handleCheckChange} />
        <label htmlFor="remember">오늘 하루 열지 않음</label>
      </div>
    </div>
  );
}

export default BookOfTheWeek;