import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { displayCategory } from '../../store/CategorySlice';
import { filter, search } from '../../store/ProductsSlice';
import "./Header.scss";

function Header() {
  let dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/category").
      then(res => res.json()).
      then(data => dispatch(displayCategory({data : data})));
  }, []);

  let category = useSelector(state => state.category);
  let [check, setCheck] = useState("all");

  const searchHandler = (e) => {
    if(check === "all"){
      fetch(`/api/product?name=${e.target.value}`).
        then(res => res.json()).
        then(data => dispatch(search({data : data.products})));
    } else {
      fetch(`/api/product?name=${e.target.value}&category=${check}`).
        then(res => res.json()).
        then(data => dispatch(search({data : data.products})));
    }
  }

  const filterHandler = (e) => {
    if(e.target.value === "all"){
      fetch(`/api/product`).
        then(res => res.json()).
        then(data => dispatch(filter({data : data.products})));
    } else {
      fetch(`/api/product?category=${e.target.value}`).
        then(res => res.json()).
        then(data => dispatch(filter({data : data.products})));
    }

    setCheck(e.target.value);
  }

  return (
    <div className='header site-header'>
      <div className='container'>
        <div className='header__container d-flex align-items-center justify-content-between'>
          <div className='header__search-box d-flex align-items-center'>
            <input 
              type="text" 
              className='header__search-input' 
              name='search' 
              placeholder='input search text' 
              required
              onChange={searchHandler}
            />
            <button className='header__btn d-flex align-items-center justify-content-between'>
              <i className='bx bx-search'></i>
            </button> 
          </div>
          <div className='header__filter-box d-flex align-items-center justify-content-center'>
            <select 
              name="products" 
              id="products"
              className='header__select'
              onChange={filterHandler}
              value={check}
            >
              <option value="all">All</option>
              {
                category.map((item, index) => {
                  return (
                    <option 
                      key={Date.now() + index} 
                      value={item}
                      className="header__option"
                    >
                      {item}
                    </option>
                  )
                })
              }
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
