//로그인
import React from "react";
import "../css/login.css";

export default function Login() {
  return (
    // <>
    // <meta charset="UTF-8"></meta>
    // <title>ㅊㅊㅊ-로그인</title>
    // <link rel="stylesheet" type="text/css" href="ccc_login.css">
    //   <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    // </>
    <body>
      <div class="login-container">
        <a href="ccc_main_log.html">
          <img src="images/ccc_image/logo.png" alt="Logo" class="logo"></img>
        </a>
        <div class="login_wrap">
          <form action="/login" method="post">
            <ul class="panel_wrap">
              <li class="panel_item" style={{ display: "block" }}>
                <div class="panel_inner" role="tabpanel" aria-controls="loinid">
                  <div class="id_pw_wrap">
                    <div class="input_row" id="id_line">
                      <input
                        type="text"
                        id="id"
                        name="id"
                        placeholder="아이디"
                        title="아이디"
                        class="input_text required-input"
                        maxlength="20"
                        value=""
                      ></input>
                    </div>
                    <div class="input_row" id="pw_line">
                      <input
                        type="text"
                        id="pw"
                        name="pw"
                        placeholder="비밀번호"
                        title="비밀번호"
                        class="input_text required-input"
                        maxlength="16"
                      ></input>
                    </div>
                    {/* <script>
      $(document).ready(function () {
        $('.btn_login').click(function (e) {
          var isFormValid = true;

          $('.required-input').each(function () {
            if ($(this).val() === "") {
              e.preventDefault();
              $(this).addClass('error-input');
              if ($(this).attr('name') === 'id') {
                $(this).attr('placeholder', '아이디를 입력해주세요.');
              } else if ($(this).attr('name') === 'pw') {
                $(this).attr('placeholder', '비밀번호를 입력해주세요.');
              }

              isFormValid = false;
            } else {
              $(this).removeClass('error-input');
            }
          });

          // If any of the required fields are empty, prevent form submission
          if (!isFormValid) {
            e.preventDefault();
          }
        });

        // When a required input field is focused, reset its placeholder and remove error style
        $('.required-input').focus(function () {
          if ($(this).attr('name') === 'id') {
            $(this).attr('placeholder', '아이디');
          } else if ($(this).attr('name') === 'pw') {
            $(this).attr('placeholder', '비밀번호');
          }

          // Remove the error style
          $(this).removeClass('error-input');
        });
      });
    </script> */}
                  </div>

                  <div class="btn_login_wrap">
                    <button type="submit" class="btn_login" id="log.login">
                      <span class="btn_text">로그인</span>
                    </button>
                  </div>
                  <div class="dotted-line">
                    <span>또는</span>
                  </div>
                  <div class="btn_with_wrap">
                    <button type="submit" class="btn_with" id="Apple">
                      <img
                        src="images/ccc_image/apple.png"
                        alt="Apple 로고"
                        class="button-icon"
                      ></img>
                      <span class="sign-in-with">Sign in with Apple</span>
                    </button>
                    <button type="button" class="btn_with" id="Google">
                      <img
                        src="images/ccc_image/google.png"
                        alt="Google 로고"
                        class="button-icon"
                      ></img>
                      <span class="sign-in-with">Sign in with Google</span>
                    </button>
                  </div>

                  <div class="dotted-line2">
                    <p>
                      계정이 없으신가요?{" "}
                      <button type="button" id="registerButton">
                        회원가입
                      </button>
                    </p>
                  </div>

                  {/* <script>
      document.getElementById("registerButton").onclick = function () {
        location.href = "ccc_register.php";
      };
    </script> */}
                </div>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </body>
  );
}
