import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, checkOut, getCartItems, removeCartItem } from '../../actions/cart.action';
import { Layout } from '../Layout/Layout'
import { MaterialButton, MaterialInput, Modal } from '../MaterialUI';
import CartItem from './CartItem/CartItem';
import './CartPage.scss'
/**
* @author
* @function CartPage
**/

export const CartPage = (props) => {
    const cart = useSelector(state => state.cart);
    //const cartItems = cart.cartItems;
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const [loginModal, setLoginModal] = useState(false);
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [fullname, setFullname] = useState("");
    const [note, setNote] = useState("");

    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)



    useEffect(() => {
        setCartItems(cart.cartItems);
    }, [cart.cartItems]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
        }
        console.log('getcaeeeee')
    }, [auth.authenticate]);


    const onQuantityIncrement = (item, qty) => {
        const id = item.productid;
        const { productname, price, imageurl } = item;
        dispatch(addToCart({ id, productname, price, imageurl }, 1));
    }

    const onQuantityDecrement = (item, qty) => {
        const id = item.productid;
        const { productname, price, imageurl } = item;
        dispatch(addToCart({ id, productname, price, imageurl }, -1));
    }

    const onRemoveCartItem = (productid) => {
        dispatch(removeCartItem(productid));
    };

    const onCheckOut = () => {
        var today = new Date();
        var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var orderDate = date+' '+time;
        // const orderDate = "2021-11-21 13:02";
        const payload = {
            address,
            phone,
            fullname,
            note,
            orderDate
        }
        dispatch(checkOut(payload));
        setLoginModal(false);
    }


    if (cart.cartItems.length === 0) {
        return (

            <Layout>
                <div className="test">

                </div>
                <div className="cart-page">
                    <div className="grid wide">
                        <div className="row sm-gutter">
                            <div className="col l-12 m-6 c-12">
                                <div className="module">
                                    <div className="left">
                                        <Link to={`/product`} > <i className="fa fa-chevron-left"></i> Ti???p t???c t??m ki???m s???n ph???m</Link>
                                    </div>
                                    <div className="right">
                                        <h1>Gi??? h??ng c???a b???n tr???ng</h1>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </Layout>
        );
    }
    return (
        <Layout>

            <div className="test">
            </div>
            <div className="cart-page">
                <div className="grid wide">
                    <div className="row sm-gutter">
                        <div className="col l-12 m-6 c-12">
                            <div className="module">
                                <div className="left">
                                    <Link to={`/product`} > <i className="fa fa-chevron-left"></i> Ti???p t???c t??m ki???m s???n ph???m</Link>
                                </div>
                                <div className="right">
                                    <h1>Gi??? h??ng c???a b???n</h1>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="row sm-gutter">
                        <div className="col l-12 m-6 c-12">
                            {cart.cartItems.map((item, index) =>

                                <>
                                    <CartItem
                                        key={index}
                                        cartItem={item}
                                        onQuantityInc={onQuantityIncrement}
                                        onQuantityDec={onQuantityDecrement}
                                        onRemoveCartItem={onRemoveCartItem}
                                    />
                                </>
                            )}
                            <div className="totalPriceCart">
                                <h2 className="total_title">
                                    T???ng ti???n ph???i thanh to??n:
                                </h2>
                                <h2 className="total_price">
                                    {cart.cartItems.reduce((temp, item) =>
                                        temp + item.price * item.quantity, 0
                                    )}
                                    <span style={{ marginLeft: '5px', }}>VN??</span>
                                </h2>

                            </div>
                            <div className="totalPriceCart">
                                <button className="box-button box-button-buy"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setLoginModal(true);
                                    }}
                                >Thanh To??n</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>


            {/* Login modal */}
            <Modal visible={loginModal} onClose={() => setLoginModal(false)}>
                <div className="authContainer">
                    <div className="">
                        <div className="leftspace more_1">
                            <p>Th??ng Tin Thanh To??n</p>
                        </div>
                        <div className="rightspace">
                            <div className="loginInputContainer">
                                <MaterialInput
                                    type="text"
                                    label="?????a Ch???"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />

                                <MaterialInput
                                    type="text"
                                    label="T??n Ng?????i Nh???n"
                                    value={fullname}
                                    onChange={(e) => setFullname(e.target.value)}
                                />

                                <MaterialInput
                                    type="text"
                                    label="S??? ??i???n tho???i"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                />



                                <MaterialInput
                                    type="text"
                                    label="Ghi ch??"
                                    value={note}
                                    onChange={(e) => setNote(e.target.value)}
                                />

                                {/* <MaterialInput
                                    type="text"
                                    label="Ng??y ?????t h??ng"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                /> */}

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: "center",
                                    }}
                                >
                                    <input type="radio" name="paymentOption" value="cod"
                                        style={{

                                            margin: "10px",
                                        }} />
                                    <div>Thanh to??n khi giao h??ng</div>
                                </div>

                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: "center",
                                    }}
                                >
                                    <input type="radio" name="paymentOption" value="cod"
                                        style={{

                                            margin: "10px",
                                        }}
                                    />
                                    <div>Thanh to??n qua th???</div>
                                </div>
                                <MaterialButton
                                    title={`Thanh to??n ${cart.cartItems.reduce((temp, item) =>
                                        temp + item.price * item.quantity, 0
                                    )}  VN??`}
                                    bgColor="#fb641b"
                                    textColor="#ffffff"
                                    style={{
                                        margin: "20px 25px 20px",
                                    }}
                                    onClick={onCheckOut}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
            {/* Login modal end */}
        </Layout>
    )

}