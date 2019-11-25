import React from 'react';
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";

class Title2 extends React.Component {
    render() {
        return (
            <div id="rootpage">
                <Header />
                <div className="second">
                    <div>
                        <h1 key='a1'>Title 2</h1>
                        <p key='a2'>Date: Nov 21, 2019</p>
                        <p key='a3'>Description  Here</p>
                    </div>
                    <Nav />
                </div>
                <Footer />
            </div>
        )
    }
}

export default Title2;
