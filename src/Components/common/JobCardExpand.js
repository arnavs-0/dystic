import React, {useEffect, useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../Styles/common/JobCardExpand.scss'
import Skeleton from 'react-loading-skeleton';


function JobCardExpand(props) {
    let stars = Number(props.starCount);
    const starComponents = Array(stars).fill('fas fa-star')
    const Results = () => {
    const [error, isLoaded, items, stars] = useState(null);

    useEffect(() => {
        setTimeout( async () => { 
            const res = await fetch('127.0.0.1:5000/jobs?q=construction&l=waterloo')
            const data = await res.json();
            setitems(data); 
        }, 5000)
    })
}
    return (
        <div>
            {items.map(item => (
            <div className={"job-card-container"}>
                <div className="job-card-row-1">                  
                    <h1 className="job-card-u-jt mr-5">{item.jobTitle}</h1>
                    <div className = "star-rating">
                        {starComponents.map((cn) => (
                            <i className={cn}/>
                        ))
                        }
                    </div>
                    <button className="job-card-detail-btn">Apply</button>
                </div>
                <div className="job-card-row-2">
                    <p className="job-card-company-title">{item.Company}</p>
                    <div className="d-flex">
                        <i className={'fas fa-map-marker-alt'}/>
                        <p className="job-card-job-location ml-2">{item.Location}</p>
                    </div>
                </div>
                <p className="job-card-summary">
                    Job Summary: {item.Summary}
                </p>

                <div className="job-card-job-type-container">
                    {
                        item.jobType.map((type)=>(
                            <p className={"job-card-job-type"}>{type}</p>
                        ))
                    }
                </div>
            </div>
            ))}
        </div>
    );

}

export default JobCardExpand;