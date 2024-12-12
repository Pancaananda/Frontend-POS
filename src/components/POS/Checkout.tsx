import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { processOrder } from '../../../services/api';

const Checkout: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const history = useHistory();

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);
        try {
            await processOrder();
            history.push('/success');
        } catch (err) {
            setError('Failed to process order. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="checkout">
            <h2>Checkout</h2>
            {error && <p className="error">{error}</p>}
            <button onClick={handleCheckout} disabled={loading}>
                {loading ? 'Processing...' : 'Complete Order'}
            </button>
        </div>
    );
};

export default Checkout;