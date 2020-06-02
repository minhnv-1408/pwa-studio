import React, { useCallback } from 'react';
import {useAppContext} from '@magento/peregrine/lib/context/app';
import Button from '@magento/venia-ui/lib/components/Button';

const Greeting = props => {
    const [appState, appApi] = useAppContext();
    const booleanStatus = appState.overlay;
    const { toggleDrawer } = appApi;

    const toggleStatus = useCallback(() => {
        toggleDrawer('Greeting');
    });

    const text = booleanStatus ? 'On' : 'Off';

    return (
        <div>
            <div>
                <h3> Hello, I am Ming </h3>
            </div>
            <br/>
            <div>
                <Button onClick={toggleStatus}>{text}</Button>
            </div>
        </div>
    );
};

export default Greeting;
