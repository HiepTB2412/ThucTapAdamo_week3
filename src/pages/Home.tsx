import CardsData from "../components/Cardata";
import { useDispatch } from 'react-redux';
import { CartItem, addToCart } from '../redux/reducer/cartReducer';
import CardProduct from '../components/CardProduct';

const Home = () => {

    const dispatch = useDispatch()

    const addToCartHandler = (cartItem: CartItem) => {
        if (cartItem.stock < 1) return
        dispatch(addToCart(cartItem))
        console.log(cartItem);
    }

    return (
        <>
            <section className='iteam_section mt-4 container'>
                <h2 className='px-4' style={{ fontWeight: 400 }}>Restaurants in Ahmedabad Open now</h2>
                <div className='row mt-2 d-flex justify-content-around align-items-center'>
                    {
                        CardsData.map((i) => (
                            <CardProduct
                                key={i.id}
                                price={i.price}
                                delimg={i.delimg}
                                address={i.address}
                                dish={i.dish}
                                id={i.id}
                                imgdata={i.imgdata}
                                somedata={i.somedata}
                                stock={i.stock}
                                rating={i.rating}
                                arrimg={i.arrimg}
                                handler={addToCartHandler}
                            />
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Home;


//id, dish, imgdata, address, delimg, somedata, price, rating, arrimg, stock