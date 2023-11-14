import React, { useState, useEffect, useRef } from 'react';
import '../css/mylibrary.css';
import { Header } from '../common/Header';

const MyLibrary = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const headerNormalRef = useRef(null);
    const headerFixedRef = useRef(null);

    const handleScroll = () => {
        setScrollPosition(window.pageYOffset);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const headerNormalHeight = document.querySelector('.header_normal')?.offsetHeight || 0;

    return (
        <div>
            <Header />
            <a href="#" className="top-button" onClick={() => window.scrollTo(0, 0)}>
                <img src="ccc_image/up-arrow.png" alt="Top 버튼" />
            </a>
            <main>
                <div className="libraryAll">
                    <div className="library">
                        <span id="libraryTitle">내 서재</span>
                        <span id="bookCount">{/* 동적으로 책의 수를 표시하는 코드 */}</span>
                    </div>

                    <div className="library-convert">
                        <div className="editAll">
                            <button id='selectAllBtn' style={{display:'none'}}>전체 선택</button>
                            <button id='selectAllcancelBtn' style={{display:'none'}}>전체 선택 취소</button>
                            <div className="edit">
                                <button id='editBtn'>편집</button>
                                <button id='deleteBtn' style={{display:'none'}}>삭제</button>
                                <button id='cancelBtn' style={{display:'none'}}>취소</button>
                            </div>
                        </div>

                        <div className="listAll">
                            <div className="library-list">
                                <div className="library-cover">
                                    <button className="listCoverBtn" id='listCoverBtn'>
                                        <img src="images/ccc_library/list-2.png" alt="Image 1" id='buttonImage1'/>
                                    </button>
                                </div>
                                <div className="library-view">
                                    <button className="listViewBtn" id='listViewBtn'>
                                        <img src="images/ccc_library/grid-1.png" alt="Image 2" id='buttonImage2'/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="concontainer">
                        <div className="container1">
                            <div className="book-container1" id="bookContainer">
                                {/* 동적으로 생성될 책 항목 */}
                            </div>
                        </div>
                        <div className="container2">
                            <div className="book-container2" id="bookContainer2">
                                {/* 동적으로 생성될 책 항목 */}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div 
                style={{ display: scrollPosition > headerNormalHeight ? 'none' : 'block' }} 
                className="header_normal" 
                ref={headerNormalRef} 
            ></div>
            <div 
                style={{ display: scrollPosition > headerNormalHeight ? 'block' : 'none' }} 
                className="header_fixed" 
                ref={headerFixedRef} 
            ></div>

            {scrollPosition > headerNormalHeight ? (
                <div style={{ display: 'none' }} className="header_normal"></div>
            ) : (
                <div style={{ display: 'block' }} className="header_normal"></div>
            )}
        </div>
    );
};

export default MyLibrary;
