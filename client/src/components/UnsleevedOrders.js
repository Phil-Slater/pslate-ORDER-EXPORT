import axios from 'axios';
import { useEffect, useState } from 'react';
import '../css/styles.css';
import { NavLink } from 'react-router-dom';
import OrderNotReady from './OrderNotReady';
import OrderReadyToShip from './OrderReadyToShip';

function UnsleevedOrders() {

    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetchUnsleevedOrders()
    }, [])

    const fetchUnsleevedOrders = async () => {
        try {
            const orders = await axios.get('/unsleeved-order-numbers')
            console.log(orders.data)
            setOrders(orders.data)
        } catch (error) {
            console.log(error)
        }
    }

    const ordersMapped = orders.map(order => {
        return <NavLink to={`/order/${order.order_number}`} key={order.order_number}>
            {order.tags === "Ready to Ship" ? <OrderReadyToShip order={order} /> : <OrderNotReady order={order} />}
        </NavLink>
    })

    return (
        <div>
            <h1 className='text-white font-bold text-5xl p-4 text-center'>Unsleeved Orders</h1>
            <div className='buttons-div'>
                {orders ? <NavLink to="/missing-cables"><button className="py-4 w-80 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-xl transition duration-200 mb-2">View Missing Cables</button></NavLink> : null}
            </div>
            <div className='order-container'>{ordersMapped}</div>
        </div>
    )
}


export default UnsleevedOrders
