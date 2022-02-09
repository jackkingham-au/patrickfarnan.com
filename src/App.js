import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import Checkout from './pages/Checkout';
import FreeTraining from './pages/FreeTraining';
import CustomPage from './pages/CustomPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Box } from '@mui/material';

const App = () => {

    return (
        <>
            <Header />
            <Box sx={{minHeight: 'calc(100vh - 300px)'}}>
                <Router>
                    <Switch>
                        <Route path="/checkout">
                            <Checkout />
                        </Route>
                        <Route path="/free-training">
                            <FreeTraining />
                        </Route>
                        <Route path="/:customPage">
                            <CustomPage />
                        </Route>
                        <Route path="/" >
                            <Homepage />
                        </Route>
                    </Switch>
                </Router>
            </Box>
            <Footer/>
        </>
    );
}

export default App;
