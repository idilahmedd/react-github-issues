import React from 'react';
import { Link } from 'react-router-dom';



const LandingPage = props => (
    <>
        <div className="cover">
            <h2>Want to submit an issue to bookface/actre?</h2>
            <p>If you have a bug or an idea, read the contributing guidelines before opening an issue. Issues labeled good first issue can be good first contributions</p>
        </div>
        <div className="dont">
            <Link to="/issues"><button>Go to Issues</button></Link>
        </div>
    
    </>
)

export default LandingPage;