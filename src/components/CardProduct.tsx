import { Button, Card } from "react-bootstrap";
import { CartItem } from "../redux/reducer/cartReducer";

type ProductsProps = {
    id: string;
    dish: string;
    imgdata: string;
    address: string;
    delimg: string;
    somedata: string;
    price: number;
    rating: string;
    arrimg: string;
    stock: number;
    handler: (cartItem: CartItem) => void | undefined;
}

const CardProduct = ({ id, imgdata, dish, rating, address, price, arrimg, delimg, stock, handler }: ProductsProps) => {
    return (
        <>
            <Card style={{
                width: "22rem",
                border: "none",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                marginBottom: "20px"
            }} className='hove mb-4'
                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}>
                <Card.Img variant='top' style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "5px",
                    borderTopRightRadius: "5px"
                }} src={imgdata} />

                <div className="card_body" style={{ padding: "1rem" }}>
                    <div className="upper_data d-flex justify-content-between align-items-center">
                        <h4 className='mt-2' style={{
                            marginTop: 0,
                            fontSize: "1.25rem",
                            fontWeight: 600
                        }}>{dish}</h4>
                        <span style={{
                            fontSize: "1.1rem",
                            color: "#ffa41c"
                        }}>{rating}&nbsp;★</span>
                    </div>

                    <div className="lower_data d-flex justify-content-between ">
                        <h5 style={{
                            fontSize: "1rem",
                            color: "#888"
                        }}>{address}</h5>
                        <span style={{
                            fontSize: "1rem",
                            color: "#333",
                            fontWeight: 500
                        }}>₹ {price}</span>
                    </div>
                    <div className="extra"></div>

                    <div className="last_data d-flex justify-content-between align-items-center">
                        <img src={arrimg} style={{
                            width: "30px",
                            height: "30px"
                        }} alt="" />
                        <Button style={{
                            width: "150px",
                            background: "#ff3054db",
                            border: "none"
                        }} variant='outline-light' className='mt-2 mb-2'
                            onClick={() => handler({
                                id,
                                dish,
                                imgdata,
                                address,
                                delimg,
                                price,
                                stock,
                                quantity: 1
                            })}
                        >Add TO Cart</Button>
                        <img src={delimg} style={{
                            width: "30px",
                            height: "30px"
                        }} alt="" />
                    </div>
                </div>
            </Card>
        </>
    )
}

export default CardProduct