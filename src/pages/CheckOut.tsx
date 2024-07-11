import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useSelector } from 'react-redux';
import { CartItem, CartReducerInitialState } from '../redux/reducer/cartReducer';
import { useNavigate } from 'react-router-dom';
import OrderData from '../components/OrderData'

// Định nghĩa interface OrderData
interface Order {
    id: string;
    email: string;
    phoneNumber: string;
    address: string;
    orderItems: CartItem[];
}

// Định nghĩa props cho CheckOut
interface CheckOutProps {
    show: boolean;
    setShow: (show: boolean) => void;
}

function CheckOut(props: CheckOutProps) {
    const { show, setShow } = props;
    const navigate = useNavigate()
    const { cartItems } = useSelector((state: { cartReducer: CartReducerInitialState }) => state.cartReducer);

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');

    const handleClose = () => setShow(false);

    const handlePay = () => {
        // Tạo đơn hàng mới với ID duy nhất
        const order: Order = {
            id: Date.now().toString(),
            email: email,
            phoneNumber: phoneNumber,
            address: address,
            orderItems: cartItems
        };

        // Thêm đơn hàng mới vào mảng orders
        OrderData.push(order);

        console.log('Order created:', order);

        // Đóng modal sau khi xử lý thanh toán
        handleClose();
        navigate('/setting')
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CheckOut</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formPhoneNumber">
                            <Form.Label>PhoneNumber</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="phonenumber"
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="address"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handlePay}>
                        Pay
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CheckOut;
