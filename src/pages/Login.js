import React, { useState } from "react";
import "../css/login.css";

function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (id === "" || password === "") {
      if (id === "") {
        document.getElementById("id").placeholder = "아이디를 입력해주세요.";
        document.getElementById("id").classList.add("error-input");
      }
      if (password === "") {
        document.getElementById("pw").placeholder = "비밀번호를 입력해주세요.";
        document.getElementById("pw").classList.add("error-input");
      }
    } else {
      // 로그인 로직
    }
  };

  const handleRegister = () => {
    // 회원가입 페이지로 이동하는 로직
  };

  return (
    <div className="login-container">
      <a href="ccc_main_log.html">
        <img src="images/ccc_image/logo.png" alt="Logo" className="logo" />
      </a>
      <div className="login_wrap">
        <form action="/login" method="post">
          <div className="panel_inner" role="tabpanel" aria-controls="loinid">
            <div className="id_pw_wrap">
              <div className="input_row" id="id_line">
                <input
                  type="text"
                  id="id"
                  name="id"
                  placeholder="아이디"
                  title="아이디"
                  className="input_text required-input"
                  maxLength="20"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="input_row" id="pw_line">
                <input
                  type="text"
                  id="pw"
                  name="pw"
                  placeholder="비밀번호"
                  title="비밀번호"
                  className="input_text required-input"
                  maxLength="16"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="btn_login_wrap">
              <button type="submit" className="btn_login" id="log.login" onClick={handleLogin}>
                <span className="btn_text">로그인</span>
              </button>
            </div>
            <div className="dotted-line">
              <span>또는</span>
            </div>
            <div className="btn_with_wrap">
              <button type="submit" className="btn_with" id="Apple">
                <img src="images/ccc_image/apple.png" alt="Apple 로고" className="button-icon" />
                <span className="sign-in-with">Sign in with Apple</span>
              </button>
              <button type="button" className="btn_with" id="Google">
                <img src="images/ccc_image/google.png" alt="Google 로고" className="button-icon" />
                <span className="sign-in-with">Sign in with Google</span>
              </button>
            </div>
            <div className="dotted-line2">
              <p>
                계정이 없으신가요?{" "}
                <button type="button" id="registerButton" onClick={handleRegister}>
                  회원가입
                </button>
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
