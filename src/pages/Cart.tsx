import '../App.css'; // Ensure you import the CSS file
import { useDispatch, useSelector } from "react-redux";
import { CartItem, CartReducerInitialState, addToCart, cacalculatePrice, removeCartItem, removeToCart } from "../redux/reducer/cartReducer";
import CartCard from "../components/CartCard";
import { useEffect, useState } from "react";
import CheckOut from './CheckOut';

const Cart = () => {
    const { cartItems, total } = useSelector((state: { cartReducer: CartReducerInitialState }) => state.cartReducer);

    const dispatch = useDispatch()
    const incrementHandler = (cartItem: CartItem) => {
        if (cartItem.quantity >= cartItem.stock) return;

        dispatch(addToCart({ ...cartItem, quantity: cartItem.quantity + 1 }));
    };

    const decrementHandler = (cartItem: CartItem) => {
        if (cartItem.quantity <= 1) return;

        dispatch(removeToCart({ ...cartItem, quantity: cartItem.quantity - 1 }));
    };
    const removeHandler = (productId: string) => {
        dispatch(removeCartItem(productId));
    };

    useEffect(() => {
        dispatch(cacalculatePrice());
    }, [cartItems])

    const [show, setShow] = useState(false);

    return (
        <>
            <div className='row justify-content-center m-0'>
                <div className='col-md-8 mt-5 mb-5 cardsdetails'>
                    <div className="card">
                        <div className="card-header bg-dark p-3">
                            <div className='card-header-flex' style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                <h5 className='text-white m-0'>Cart Calculation</h5>
                                {
                                    cartItems.length > 0 ? (
                                        <button className='btn btn-danger btn-sm custom-btn' onClick={() => setShow(true)}>
                                            <span>CheckOut</span>
                                        </button>
                                    ) : ""
                                }
                            </div>
                        </div>
                        <div className="card-body p-0">
                            {
                                cartItems.length === 0 ? (
                                    <table className='table cart-table mb-0'>
                                        <tbody>
                                            <tr>
                                                <td colSpan={6}>
                                                    <div className='cart-empty' style={{ textAlign: "center", padding: "20px" }}>
                                                        <i className='fa fa-shopping-cart' style={{ fontSize: "2rem" }}></i>
                                                        <p>Your Cart Is Empty</p>
                                                    </div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                ) : (
                                    <table className='table cart-table mb-0 table-responsive-sm'>
                                        <thead>
                                            <tr>
                                                <th>Action</th>
                                                <th>Product</th>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Quantity</th>
                                                <th className='text-right'><span id="amount" className='amount'>Total Amount</span></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                cartItems.map((data, idx) => (
                                                    <CartCard
                                                        incrementHandler={incrementHandler}
                                                        decrementHandler={decrementHandler}
                                                        removeHandler={removeHandler}
                                                        key={idx}
                                                        cartItem={data}
                                                    />
                                                ))
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th colSpan={3}>&nbsp;</th>
                                                <th>Items In Cart <span className='ml-2 mr-2'>:</span><span className='text-danger'>{cartItems.length}</span></th>
                                                <th className='text-right'>Total Price <span className='ml-2 mr-2'>:</span><span className='text-danger'>₹ {total}</span></th>
                                            </tr>
                                        </tfoot>
                                    </table>
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
            <CheckOut show={show} setShow={setShow} />
        </>
    )
}

export default Cart;
