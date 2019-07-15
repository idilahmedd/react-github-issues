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
            <div className="issueNavHeader">
                <button>Filters</button>
                <input type="text" placeholder="Search all issues" />
                <button>Labels</button>
                <button>Milestones</button>
                <div className="flexFiller"></div>
                <button className="newIssueButton">New Issue</button>
            </div>
            <div className="issueList">
                <div className="issueNavListHeader">
                    <span>#open</span>
                    <span>#closed</span>
                    <div className="flexFiller"></div>
                    <span>Author</span>
                    <span>Projects</span>
                    <span>Labels</span>
                    <span>Milestones</span>
                    <span>Assignee</span>
                    <span>Sort</span>
                </div>
                {issues.map(issue => {
                    return (
                        <div className="issueListItem" key={issue.id}>
                            <div className="listItemHeader">
                                <span>{issue.state}</span>
                                <Link to={'/issues/' + issue.id}><h3>{issue.title}</h3></Link>
                                <div className="flexFiller"></div>
                                <p className="comments"> <i>comments</i> {issue.comments}</p>
                            </div>
                            <p>#{issue.number} | {issue.created_at}</p>
                        </div>
                    )
                })}
            </div>

        </div>
        </>
    )
}

