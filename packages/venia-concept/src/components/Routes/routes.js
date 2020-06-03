import React, { Suspense, lazy } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';
import { useScrollTopOnChange } from '@magento/peregrine/lib/hooks/useScrollTopOnChange';

const CartPage = lazy(() => import('@magento/venia-ui/lib/components/CartPage'));
const CheckoutPage = lazy(() => import('@magento/venia-ui/lib/components/CheckoutPage'));
const CreateAccountPage = lazy(() => import('@magento/venia-ui/lib/components/CreateAccountPage'));
const Search = lazy(() => import('@magento/venia-ui/lib/RootComponents/Search'));
const Foo = lazy(() => import('../Foo'));
const Gretting = lazy(() => import('../Gretting'));
const Countries = lazy(() => import('../Countries'));
const Country = lazy(() => import('../Country'));

const Routes = () => {
    const { pathname } = useLocation();
    useScrollTopOnChange(pathname);

    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                <Route exact path="/countries">
                    <Countries />
                </Route>
                <Route path="/country/:id?">
                    <Country />
                </Route>
                <Route exact path="/gretting">
                    <Gretting name="MinhNV" />
                </Route>
                <Route exact path="/foo">
                    <Foo />
                </Route>
                <Route exact path="/search.html">
                    <Search />
                </Route>
                <Route exact path="/create-account">
                    <CreateAccountPage />
                </Route>
                <Route exact path="/cart">
                    <CartPage />
                </Route>
                <Route exact path="/checkout">
                    <CheckoutPage />
                </Route>
                <Route>
                    <MagentoRoute />
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
