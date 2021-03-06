import React, { useEffect, useRef } from 'react'
import { Layout } from '../Layout/Layout'
import './Mobile.scss'
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Filter } from '../UI/Filter/Filter2';
import { CardPro } from '../UI/CardPro/CardPro';
import ip13 from './../../access/image/product/ip13-pro_2.jpg'
import { useDispatch, useSelector } from 'react-redux';
import { getProductsByFilter } from '../../actions/product.action';

/**
* @author
* @function Mobile
**/


export const Mobile = (props) => {



    const product = useSelector(state => state.product);
    const dispatch = useDispatch();


    console.log("props1", props)

    const query = new URLSearchParams(props.location.search);
    let sss = (props.location.search);
    const categoryId = query.get('categoryId')
    const brandIdId = query.get('brandIdId')
    const price = query.get('price')
    const page = query.get('page')
    const size = query.get('size')
    console.log(sss)

    useEffect(() => {

        console.log("props2", props)
        const query = new URLSearchParams(props.location.search);
        const categoryId = query.get('categoryId')
        const brandId = query.get('brandId')
        const price = query.get('price')
        const page = query.get('page')
        const size = query.get('size')
        dispatch(getProductsByFilter(categoryId, brandId, price, page, size))
    }, [props.location.search])


    const ref = useRef({});

    // const next = () => {
    //     ref.current.slickNext();
    // };

    // const previous = () => {
    //     ref.current.slickPrev();
    // };
    const settings = {
        // className: 'section-outstanding__slider',
        dots: true,
        infinite: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (


        <Layout>

            <div className="test">

            </div>
            <div className="page_mobile">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col l-6 m-6 c-12">
                            <div className="slide_mobile">
                                <Slider ref={ref} {...settings}>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/flip-595-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col l-6 m-6 c-12">
                            <div className="slide_mobile hide-on-mobile-tablet">
                                <Slider ref={ref} {...settings}>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/flip-595-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                    <div>
                                        <a href="/#">
                                            <img src="https://cdn.cellphones.com.vn/media/resized//ltsoft/promotioncategory/apple-2021-590-100-max.png" alt="ss" />
                                        </a>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                    <div className="row sm-gutter list_subcate-box">
                        <div className="col l-12 m-12 c-12 list_subcate">
                            <div className="subcate_item" onClick={(e) => { e.preventDefault();console.log("props.history", props.history); sss += '&brandId=1'; props.history.push({ search: `${sss}` }) }}>
                                <a className=""
                                >
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-286.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item" onClick={(e) => { e.preventDefault(); console.log("props.history", props.history); sss += '&brandId=2'; props.history.push({ search: `${sss}` }) }}>
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-211.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item" onClick={(e) => { e.preventDefault(); console.log("props.history", props.history); sss += '&brandId=3'; props.history.push({ search: `${sss}` }) }}>
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-274.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-769.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-1214.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-721.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-vsmart.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-vivo.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-oneplus.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <img src="https://cellphones.com.vn/media/icons/brands/brand-nubia.svg" alt="ss" />
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <p>
                                        ??i???n Tho???i Ph??? Th??ng
                                    </p>
                                </a>
                            </div>
                            <div className="subcate_item">
                                <a href="/#" className="">
                                    <p>
                                        Tin ?????n M???i Ra
                                    </p>
                                </a>
                            </div>





                        </div>
                    </div>
                    <div className="row block_filter">
                        <div className="col l-12 m-12 c-12 block_filter-list">
                            <div clasName="test-filter">

                                <div className="block_filter__tittle">Ch???n theo ti??u ch??</div>
                                <div className="list_filter box_list">
                                    <Filter
                                        title={'B??? L???c'}

                                    />
                                    <Filter
                                        title={'Gi??'}
                                        listItem={['D?????i 5 tri???u', '5 - 10 tri???u', '10 - 15 tri???u', '15 - 20 tri???u', 'Tr??n 20 tri???u']}
                                    />
                                    <Filter
                                        title={'Lo???i ??i???n tho???i'}
                                    />
                                    <Filter
                                        title={'Dung l?????ng RAM'}
                                    />
                                    <Filter
                                        title={'B??? nh??? trong'}
                                    />
                                    <Filter
                                        title={'K??ch th?????c m??n h??nh'}
                                    />
                                    <Filter
                                        title={'Ki???u m??n h??nh'}
                                    />
                                    <Filter
                                        title={'T???n s??? qu??t'}
                                    />
                                    <Filter
                                        title={'T??nh n??ng ?????c bi???t'}
                                    />
                                    <Filter
                                        title={'T??nh n??ng ?????c bi???t'}
                                    />
                                    <Filter
                                        title={'T??nh n??ng ?????c bi???t'}
                                    />
                                    <Filter
                                        title={'T??nh n??ng ?????c bi???t'}
                                    />

                                </div>
                            </div>
                        </div>
                        <div className="col l-12 m-12 c-12 block_filter-sort">
                            <div className="block_filter__tittle">S???p x???p theo</div>
                            <div className="list_sort box_list">
                                <Filter
                                    title={'Gi?? cao'}
                                    sort_link={'https://www.google.com'}
                                />
                                <Filter
                                    title={'Gi?? th???p'}
                                    sort_link={'https://www.google.com'}
                                />
                                <Filter
                                    title={'Xem nhi???u'}
                                    sort_link={'https://www.google.com'}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row product_wrapper">
                        <div className="col l-12 m-12 c-12">
                            <div className="row sm-gutter product_list">
                                {product && product.products && product.products.length > 0  ?
                                <>
                                  {product.products.map((item, index) => (
                                    <div key={index} className="col l-2-4 m-3 c-6 mb-10">
                                        <div className="product_item">
                                            <CardPro
                                                myroute={`/productDetails/${item.id}`}
                                                image={item.imageurl}
                                                percent={'0%'}
                                                name={item.productname}
                                                monitor={item.monitor}
                                                ram={item.ram}
                                                pin={item.pin}
                                                stock={'H??ng Hot'}
                                                special__price={item.price}
                                                old__price={item.price}
                                                promotion={item.infomation}
                                                rating={'59'}
                                            />
                                        </div>
                                    </div>
                                ))}
                                </>
                                : null

                                }
                                
                               
                            </div>
                        </div>
                        <div className="col l-12 m-12 c-12">
                            <div className="more_product">
                                <a className="btn_load_more">
                                    Xem th??m s???n ph???m
                                    <i class="fas fa-chevron-down"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Layout>
    )

}