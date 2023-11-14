import React, { useState } from 'react';
import './MyLibrary.css'; 
import logo from './images/logo.png'; 
import search from './images/search.png';
import books from './images/books.png';
import user from './images/user.png';
import upArrow from './images/up-arrow.png';
import ghost from './images/ghost.png';

const MyLibrary = () => {
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [gender, setGender] = useState("");
    const [currentPasswordInput, setCurrentPasswordInput] = useState("");
    const [newpasswordInput, setNewpasswordInput] = useState("");
    const [newpasswordcheck, setNewpasswordcheck] = useState("");
    const [genre, setGenre] = useState("");

    const handlePasswordSubmit = () => {
        // Handle password submit here
    };

    const handlePasswordChange = () => {
        // Handle password change here
    };

    return (
        <div className="main_container">
            <header className="header_normal">
                <div className="header_inner" id="inner1">
                    <div className="logo">
                        <a href="ccc_main_log.html">
                            <img src={logo} alt="로고" />
                        </a>
                    </div>
                    <div className="search_wrap">
                        <div className="search_box">
                            <div className="search_">
                                <input type="text" id="search" name="search" placeholder="안녕나는검색창" className="input_text"
                                    value="" maxLength="20" autocapitalize="off" />
                                <span>
                                    <button type="search_button" id="searchbooks">
                                        <img src={search} alt="search_button" />
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="menu_wrap">
                        <div className="library_icon"> 
                            <button type="books_button" id="mybooksmove">
                                <img src={books} alt="search_button" />
                            </button> 
                        </div>
                        <div className="mypage_icon">
                            <button className="user_button" id="userpagemove1">
                                <img src={user} alt="search_button" />
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header_fixed">
                {/* Similar to the above header structure */}
            </header>
            {/* Rest of the code follows a similar pattern */}
        </div>
    );
};

export default MyLibrary;
