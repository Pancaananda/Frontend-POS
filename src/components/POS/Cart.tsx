import React from 'react';

const Cart: React.FC = () => {
    const [items, setItems] = React.useState<any[]>([]);

    const addItem = (item: any) => {
        setItems([...items, item]);
    };

    const removeItem = (itemId: string) => {
        setItems(items.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setItems([]);
    };

    return (
        <div className="cart">
            <h2>Your Cart</h2>
            {items.length === 0 ? (
                <p>No items in the cart.</p>
            ) : (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} - ${item.price}
                            <button onClick={() => removeItem(item.id)}>Remove</button>
                        </li>
                    ))}
                </ul>
            )}
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    );
};

export default Cart;