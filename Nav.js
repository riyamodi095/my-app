import React from 'react';
import { Link } from 'react-router-dom';

class Nav extends React.Component{
    mounted = false;
    constructor(props) {
        super(props);

        this.state= {
            error: null,
            feed: []
        };
    }

     async componentDidMount() {
         this.mounted = true;
         try {
             setInterval(async () => {
                 await fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2a2c3d0866554ec0994da0946724b338')
            .then(res => res.json())
            .then(
                (data) => {
                    if (this.mounted) {this.setState({feed: data.articles })}
                }
            )
            .catch((error) => {
                this.setState({
                    error
                });
            })
                 },
                 5000
             );
         } catch(e) {
             console.log(e);
         }
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        const { error, feed } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <nav>
                <Link to="/">
                    Home
                </Link>
                <br/><br/>
                <ul>
                    {feed.map(art => (
                        <li key={art.title}>
                            {art.title}
                        </li>
                    ))}

                </ul>
            </nav>
        )

    }
}

export default Nav;
