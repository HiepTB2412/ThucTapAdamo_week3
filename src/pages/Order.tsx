import Table from 'react-bootstrap/Table';
import OrderData from '../components/OrderData'

function Order() {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>PhoneNumber</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                {OrderData.map((i) => (
                    <tr key={i.id}>
                        <td>{i.id}</td>
                        <td>{i.email}</td>
                        <td>{i.phoneNumber}</td>
                        <td>{i.address}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default Order;