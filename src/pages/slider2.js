import React, { useEffect } from "react";
import Slider from "react-slick";
import "./slider2.css";

function Carousel() {
  const books = [
    { title: "도쿄 에일리언즈", image: "ccc_bookcover/도쿄 에일리언즈 7.jpg", author: "저자 이름", description: "책 소개..." },
    { title: "황제의 외동딸(만화)", image: "ccc_bookcover/황제의 외동딸(만화) 1.jpg", author: "저자 이름", description: "책 소개..." },
    // 다른 책들
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className="smain_container">
      <h2>오늘의 책</h2>
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="item1">
            <div className="slide-content">
              <img className="img1" src={book.image} alt="책 표지" />
              <div className="book-info">
                <p className="book-title">[분야]{book.title}</p>
                <p className="book-author">{book.author}</p>
                <p className="book-description">
                  <img src="ccc_image/dialogue.png" alt="말풍선" />
                  <span className="bookinfo">{book.description}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Carousel;
