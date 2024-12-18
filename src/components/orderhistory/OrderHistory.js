import React, { useContext } from "react";
import { CartContext } from "../../App";
import "./OrderHistory.css";


const OrderHistory = () => {
    // Mock data for demonstration purposes
    const orders = [
        { id: 1, item: "Book 1", price: 200, date: "2024-12-01" },
        { id: 2, item: "Book 2", price: 350, date: "2024-12-05" },
        { id: 3, item: "Book 3", price: 500, date: "2024-12-10" },
    ];

    return (
        <div style={{ padding: "20px" }}>
            <h2>Order History</h2>
            {orders.length > 0 ? (
                <table style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                        <tr>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Order ID</th>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Item</th>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Price</th>
                            <th style={{ border: "1px solid #ccc", padding: "10px" }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.id}</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.item}</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.price} ₹</td>
                                <td style={{ border: "1px solid #ccc", padding: "10px" }}>{order.date}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No orders have been placed yet.</p>
            )}
        </div>
    );
};

export default OrderHistory;
