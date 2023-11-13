import React, { useState } from "react";
import "../css/poll.css";

function GenrePoll() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [error, setError] = useState(false);

  const genres1 = ["소설", "시/에세이", "인문", "가정/육아", "요리", "건강", "취미/실용", "경제", "자기계발"];
  const genres2 = ["정치/사회", "역사/문화", "종교", "예술", "사회과학", "자연과학", "공학", "여행", "컴퓨터과학"];
  const genres3 = ["참고서", "잡지", "취업/수험서", "청소년", "만화"];

  const handleCheckboxChange = (event) => {
    const { value } = event.target;
    setSelectedGenres((prev) =>
      prev.includes(value) ? prev.filter((genre) => genre !== value) : [...prev, value]
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedGenres.length === 0) {
      setError(true);
    } else {
      setError(false);
      // 회원가입 로직
    }
  };

  return (
    <div className="popup show-popup" id="popup">
      <div className="overlay"></div>
      <div className="content-title">
        <h1>선호 장르 조사</h1>
      </div>
      <div className="content-explain">
        <h2>책 선호 장르를 선택해 주세요.</h2>
      </div>
      <div className="content">
        <form onSubmit={handleSubmit}>
          {[genres1, genres2, genres3].map((genres, index) => (
            <div key={index}>
              {genres.map((genre) => (
                <div key={genre}>
                  <input
                    type="checkbox"
                    name="genre"
                    value={genre}
                    onChange={handleCheckboxChange}
                  />{" "}
                  {genre}
                </div>
              ))}
            </div>
          ))}
          {error && <p className="error-message">적어도 하나의 장르를 선택해 주세요.</p>}
          <button type="submit" className="signup-btn">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}

export default GenrePoll;
