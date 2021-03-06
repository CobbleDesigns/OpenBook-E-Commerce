import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Signup from './Signup';
import Signin from './Signin';
import Home from '../core/Home';
import Shop from '../core/Shop';
import Cart from '../core/Cart';
import Product from '../core/Product';
import PrivateRoute from '../auth/PrivateRoute';
import Dashboard from './UserDashboard';
import Profile from './Profile';
import AdminRoute from '../auth/AdminRoute';
import AdminDashboard from './AdminDashboard';
import AddCategory from '../admin/AddCategory';
import Orders from '../admin/Order';
import AddProduct from '../admin/AddProduct';
import ManageProduct from '../admin/ManageProduct';
import UpdateProduct from '../admin/UpdateProduct';
const Routes=()=>{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/product/:productId" exact component={Product} />
                <PrivateRoute path="/user/dashboard" exact component={Dashboard} />
                <PrivateRoute path="/profile/:userId" exact component={Profile} />
                <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoute path="/create/category" exact component={AddCategory} />
                <AdminRoute path="/create/product" exact component={AddProduct} />
                <AdminRoute path="/admin/orders" exact component={Orders} />
                <AdminRoute path="/admin/products" exact component={ManageProduct} />
                <AdminRoute path="/admin/product/update/:productId" exact component={UpdateProduct} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;
