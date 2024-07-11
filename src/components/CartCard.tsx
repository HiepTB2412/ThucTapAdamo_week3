import { MdDelete } from "react-icons/md";
import { CartItem } from "../redux/reducer/cartReducer";

type CartItemProps = {
    cartItem: CartItem;
    incrementHandler: (cartItem: CartItem) => void;
    decrementHandler: (cartItem: CartItem) => void;
    removeHandler: (id: string) => void;
};

const CartCard = ({
    cartItem,
    incrementHandler,
    decrementHandler,
    removeHandler,
}: CartItemProps) => {

    const { imgdata, dish, price, quantity, id } = cartItem;

    return (
        <>
            <tr>
                <td>
                    <button className='prdct-delete' onClick={() => removeHandler(id)}>
                        <MdDelete />
                    </button>
                </td>
                <td>
                    <div className='product-img' style={{ width: "50px", height: "50px", overflow: "hidden" }}>
                        <img src={imgdata} alt="" style={{ width: "100%", height: "auto" }} />
                    </div>
                </td>
                <td>
                    <div className='product-name'>
                        <p>{dish}</p>
                    </div>
                </td>
                <td>{price}</td>
                <td>
                    <div className="prdct-qty-container">
                        <button className='prdct-qty-btn' type='button' onClick={() => decrementHandler(cartItem)} >-</button>
                        <input type="text" className='qty-input-box' value={quantity} disabled />
                        <button className='prdct-qty-btn' type='button' onClick={() => incrementHandler(cartItem)}>+</button>
                    </div>
                </td>
                <td className='text-right'>{price * quantity}</td>
            </tr>
        </>
    )
}

export default CartCard