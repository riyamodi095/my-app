import React from 'react';
import './Home.css';
import Nav from "./Nav";
import Main from "./Main";
import Header from "./Header.js"
import Footer from "./Footer.js";

class Home extends React.Component{
    render(){
        return(
            <div id="rootpage">
                <Header />
                <div className="second">
                    <Main />
                    <Nav />
                </div>
                <Footer />
            </div>

        );
    }
}

export default Home;
