import React, { useState } from "react";
import "../css/register.css";

function Register() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // 회원가입 로직
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
    if (e.target.value !== "") {
      e.target.style = { color: "#692ead", fontWeight: "700" };
    } else {
      e.target.style = { color: "#929294", fontWeight: "normal" };
    }
  };

  return (
    <div className="register-container">
      <div className="inner">
        <a href="ccc_main_log.html">
          <img src="images/ccc_image/logo.png" alt="Logo" className="logo" />
        </a>
        <div className="content">
          <form id="join_form" method="post" action="register_system.php" className="form" onSubmit={handleSubmit}>
            <div className="form_content">
              <div className="form_section">
                <div className="form_list">
                  <div className="form_item user" id="divId">
                    <input
                      type="text"
                      id="id"
                      name="userid"
                      placeholder="아이디"
                      className="input"
                      maxLength="20"
                      autocapitalize="off"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                    />
                  </div>
                  <div className="form_item lock password" id="divPasswd">
                    <input
                      type="password"
                      id="pswd1"
                      name="userpw"
                      placeholder="비밀번호"
                      className="input"
                      maxLength="16"
                      autocomplete="new-password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
                <div className="form_list">
                  <div className="form_item user" id="divName">
                    <input
                      type="text"
                      id="name"
                      name="username"
                      placeholder="이름"
                      className="input"
                      maxLength="20"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="form_item adult" id="divIdentityGender">
                    <ul className="adult_list" id="listIdentityGender">
                      <li className="radio_item frist">
                        <input type="radio" id="identityGender1" name="identityGender" value="M" className="blind" onChange={() => setGender("M")} />
                        <label for="identityGender1">남자</label>
                      </li>
                      <li className="radio_item frist">
                        <input type="radio" id="identityGender2" name="identityGender" value="F" className="blind" onChange={() => setGender("F")} />
                        <label for="identityGender2">여자</label>
                      </li>
                    </ul>
                    <ul className="adult_list" id="listForeigner">
                      <li className="radio_item second">
                        <label for="foreigner1">연령대</label>
                      </li>
                      <li className="radio_item2 second">
                        <select id="foreigner2" name="foreigner" className="custom-select" onChange={handleAgeChange}>
                          <option value="">선택하세요▽</option>
                          <option value="10">10대</option>
                          <option value="20">20대</option>
                          <option value="30">30대</option>
                          <option value="40">40대</option>
                          <option value="50">50대</option>
                          <option value="60">60대</option>
                          <option value="70">70대</option>
                          <option value="80">80대</option>
                        </select>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="btn_submit_wrap" id="divBtnAuth">
              <button type="submit" className="btn_submit" id="btnSend">
                회원가입
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
