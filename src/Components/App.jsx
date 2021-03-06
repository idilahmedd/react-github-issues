import React from 'react';
// import logo from './logo.svg';
import axios from 'axios';
import '../App.css';
import LandingPage from './LandingPage';
import IssuesPage from './IssuesPage';
import ShowIssuePage from './ShowIssuePage';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            issues: []
        }
    }
    componentDidMount() {
        console.log('component did mount')
        axios.get('https://api.github.com/repos/facebook/react/issues?page=1&per_page=10')
            .then(result => {
                this.setState({
                    issues: result.data
                })
            })
    }
    render() {
        return (
            <Router>
                <nav className="nav">
                    <img src="https://image.flaticon.com/icons/svg/25/25231.svg"></img>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                    }}
                        to="/">Home</Link>{' '}
                    <input placeholder="Search"></input>
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                    }}
                        to="/issues">Issues</Link>{' '}
                    <Link style={{
                        textDecoration: 'none',
                        color: 'white',
                        margin: '5px',
                        padding: '5px'
                    }}
                        to="/">Pull Requests</Link>{' '}
                </nav>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/issues'
                    render={props => <IssuesPage issues={this.state.issues} {...props} />} />
                <Route path='/issues/:id'
                    render={props => <ShowIssuePage issues={this.state.issues} {...props} />} />
            </Router>
        );
    }
}




export default App;
