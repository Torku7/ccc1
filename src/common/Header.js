// 웹서버 프로젝트의 공통 헤더
import React from 'react';
import '../css/header.css';  // 추가된 CSS 파일 import

// Logo 컴포넌트
export const Logo = () => {
    return (
        <div className="logo">
            <a href="ccc_main_log.html">
                <img src="/images/ccc_image/logo.png" alt="로고" />
            </a>
        </div>
    )
}

// SearchWrap 컴포넌트
export const SearchWrap = () => {
    return (
        <div className="search_wrap">
            <div className="search_box">
                <div className="search_">
                    <input type="text" id="search" name="search" placeholder="안녕나는검색창" className="input_text"
                        value="" maxLength="20" autoCapitalize="off" />
                    <span>
                        <button type="button" id="searchbooks">
                            <img src="/images/ccc_image/search.png" alt="search_button" />
                        </button>
                    </span>
                </div>
            </div>
        </div>
    )
}

// MenuWrap 컴포넌트
export const MenuWrap = () => {
    return (
        <div className="menu_wrap">
            <div className="library_icon">
                <button type="button" id="mybooksmove">
                    <img src="/images/ccc_image/books.png" alt="books_button" />
                </button>
            </div>
            <div className="mypage_icon">
                <button className="user_button" id="userpagemove2">
                    <img src="/images/ccc_image/user.png" alt="user_button" />
                </button>
            </div>
        </div>
    )
}

// Header 컴포넌트 추가
export const Header = ({ scrollPosition }) => {
    console.log('헤더 부분 렌더링 됨.');  // 이 줄 추가
    return (
        <div className="header">
            <Logo />
            <SearchWrap />
            <MenuWrap />
        </div>
    )
}