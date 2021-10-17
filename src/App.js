import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {
    return (
        <>
            <Header />
            <Router>
                <Switch>''
                    <Route path="/" >
                        <Homepage />
                    </Route>
                </Switch>
            </Router>
            <Footer/>
        </>
    );
}

export default App;
