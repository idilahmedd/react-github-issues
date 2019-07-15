import React from 'react';
import ReactMarkdown from 'react-markdown';

export default function IssueShow(props) {
    let issue = props.issues.find(issue => (parseInt(props.match.params.id) === issue.id))
    return (
        <div className="showIssue">
            <h1>{issue.title}</h1>
                <h2>{issue.number}</h2>
                    <p>open status indicator
                        <span>amount of time issue has been open</span>
                    </p>
                    <hr />
                    <img src={issue.user.avatar_url} alt="user image" />
                    <div className="showIssueText">
                        <ReactMarkdown source={issue.body} />
                    </div>
        </div>
    )
}

