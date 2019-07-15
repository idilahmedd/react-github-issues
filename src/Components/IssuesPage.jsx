import React from 'react';
import { Link } from 'react-router-dom';

export default function IssuesPage({ issues }) {
    return (
        <>
            <div className="cover">
                <h2>Want to submit an issue to bookface/actre?</h2>
                <p>If you have a bug or an idea, read the contributing guidelines before opening an issue. Issues labeled good first issue can be good first contributions</p>
            </div>
            <div className="issuesList">
                <div className="issueHeader">
                    <h2>10 Open Issues</h2>
                </div>
                <div className="issueList">
                    {issues.map(issue => {
                        return (
                            <div className="issueListItem" key={issue.id}>
                                <div className="listItemHeader">
                                    <Link to={'/issues/' + issue.id}><h3>{issue.title}</h3></Link>
                                    <div className="flexFiller"></div>
                                    <span>Id:{issue.number}</span>
                                </div>
                                <p style={{ display: "inline" }} className="green">{issue.state} </p>| <p style={{ display: "inline" }}>{issue.created_at}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

