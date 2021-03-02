import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../Styles/common/JobCardUnexpand.scss'

function JobCardUnexpand(props) {
    let stars = Number(props.starCount);
    const starComponents = Array(stars).fill('fas fa-star')
    return (
        <div className={"job-card-container"}>
            <div className="job-card-row-1">
                <h1 className="job-card-u-jt mr-5">{props.jobTitle}</h1>
                <div>
                    {starComponents.map((cn) => (
                        <i className={cn}/>
                    ))
                    }
                </div>
                <button className="job-card-detail-btn">
                    View Details
                </button>
            </div>
            <div className="job-card-row-2">
                <p className="job-card-company-title">{props.company}</p>
                <div className="d-flex">
                    <i className={'fas fa-map-marker-alt'}/>
                    <p className="job-card-job-location ml-2">{props.jobLocation}</p>
                </div>
            </div>
            <p className="job-card-summary">
                Job Summary: {props.jobSummary}
            </p>

            <div className="job-card-job-type-container">
                {
                    props.jobType.map((type)=>(
                        <p className={"job-card-job-type"}>{type}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default JobCardUnexpand;