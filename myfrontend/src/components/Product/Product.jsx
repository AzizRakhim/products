import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import "./Product.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/bundle";
import { FreeMode, Navigation, Thumbs } from "swiper";

function Product() {
  let location = useLocation();
  let arr = useSelector(state => state.products);

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    arr.map((item, index) => {
      if(item.id === +location.pathname.split("/").at(-1)){
        return (
          <div className="product container" key={Date.now() + index}>
            <header className='product__header'>
              <Link to={"/"} className="product__tdn">
                <button className='product__header-btn d-flex align-items-center justify-content-center'>
                  <i className='bx bx-arrow-back'></i>
                  Back
                </button>
              </Link>
            </header>
            <div className="product__whole-container d-flex">
              <div className="product__img-holder col-md-12 col-lg-6">
                <div className='mb-5'>
                  <Swiper
                    style={{
                      "--swiper-navigation-color": "#fff",
                      "--swiper-pagination-color": "#fff",
                    }}
                    spaceBetween={10}
                    navigation={true}
                    thumbs={{ swiper: thumbsSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2"
                  >
                    {
                      item.images.map((element, idx) => {
                        return (
                          <SwiperSlide key={Date.now() + idx}>
                            <img src={element} alt={item.title} />
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
                </div>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper"
                >
                  {
                    item.images.map((el, i) => {
                      return (
                        <SwiperSlide key={Date.now() + i}>
                          <img src={el} key={item.title} />
                        </SwiperSlide>
                      )
                    })
                  }
                </Swiper>
              </div>
              <div className="product__info col-md-12 col-lg-6">
                <h2 className='product__title'>
                  <span>Brand:</span>
                  {item.brand}
                </h2>
                <h2 className='product__title'>
                  <span>Title:</span>
                  {item.title}
                </h2>
                <p className='product__category'>
                  <span>Category:</span>
                  {item.category}
                </p>
                <p className='product__desc'>
                  <span>Description:</span>
                  {item.description}
                </p>
                <p className='product__num'>
                  <span>Discount Percentage:</span>
                  {item.discountPercentage}
                </p>
                <p className='product__num'>
                  <span>Price:</span>
                  {item.price}
                </p>
                <p className='product__num'>
                  <span>Rating:</span>
                  {item.rating}
                </p>
                <p className='product__num'>
                  <span>Stock:</span>
                  {item.stock}
                </p>
              </div>
            </div>
          </div>
        )
      }
    })
  )
}

export default Product
