import React from 'react';
import "./Products.scss";
import ReactPaginate from "react-paginate";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { displayData } from '../../store/ProductsSlice';
import { Link } from 'react-router-dom';
import { Image } from 'antd';

function Products() {
  let dispatch = useDispatch();

  useEffect(() => {
    fetch("/api/product").
      then(res => res.json()).
      then(data => dispatch(displayData({data : data.products})));
  }, []);

  let arr = useSelector(state => state.products);

  const [pageNumber, setPageNumber] = useState(0);

  const productsPerPage = 3;
  const pagesVisited = pageNumber * productsPerPage;

  const displayProducts = arr
    .slice(pagesVisited, pagesVisited + productsPerPage)
    .map((item, index) => {
      return (
        <li key={Date.now() + index} className='products__item col-4'>
          <div className='products__holder'>
            <div className='products__img-box'>
              <Image
                width={370}
                height={195}
                src={item.thumbnail}
              />
            </div>
            <div className='products__info'>
              <h3 className='products__title'>
                <span>title:</span> {item.title}
              </h3>
              <p className='products__text'>
                <span>description:</span> {item.description}
              </p>
              <div className='products__btn-holder d-flex justify-content-center'>
                <Link to={`/item/${item.id}`}>
                  <button className='products__btn'>
                    See more
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </li>
      )
    })

  const pageCount = Math.ceil(arr.length / productsPerPage);

  const changePage = ({selected}) => {
    setPageNumber(selected);
  }

  return (
    <div className='container'>
      <ul className='products products__list d-flex flex-wrap'>
        {displayProducts} 
      </ul>
      <ReactPaginate 
        previousLabel={<i className='bx bx-chevron-left'></i>}
        nextLabel={<i className='bx bx-chevron-right'></i>}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        onPageChange={changePage}
        containerClassName={"paginationBtns"}
        previousLinkClassName={"previousBtn"}
        nextLinkClassName={"nextBtn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  )
}

export default Products
