import React from 'react';

class Main extends React.Component {
    render() {
        return (
            <main>
                <div key='1'>
                    <h1 key='a1'><a href='#'>Title 1</a></h1>
                    <p key='a2'>Date: Nov 21, 2019</p>
                    <p key='a3'>Summary: Summary for Title 1</p>
                    <br/>
                </div>
                <div key='2'>
                    <h1 key='b1'><a href='#'>Title 2</a></h1>
                    <p key='b2'>Date: Nov 21, 2019</p>
                    <p key='b3'>Summary: Summary for Title 2</p>
                    <br/>
                </div>
                <div key='3'>
                    <h1 key='c1'><a href='#'>Title 3</a></h1>
                    <p key='c2'>Date: Nov 21, 2019</p>
                    <p key='c3'>Summary: Summary for Title 3</p>
                </div>
            </main>
        );
    }
}

export default Main;
