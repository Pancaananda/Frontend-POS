import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/shared/Header';
import Layout from './components/shared/Layout';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Products from './components/POS/Products';
import Cart from './components/POS/Cart';
import Checkout from './components/POS/Checkout';
import { AuthProvider } from './contexts/AuthContext';

const App: React.FC = () => {
    return (
        <AuthProvider>
            <Router>
                <Header />
                <Layout>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <Route path="/products" component={Products} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/" exact component={Products} />
                    </Switch>
                </Layout>
            </Router>
        </AuthProvider>
    );
};

export default App;