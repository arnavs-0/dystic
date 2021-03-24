import React, {useEffect, useState} from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../Styles/common/JobCardExpand.scss'
import Skeleton from 'react-loading-skeleton';
import {Link} from "react-router-dom";



export default class JobCardExpand extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            stars: 4,
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/jobs?jt=construction&jl=michigan&jn=physical")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }



    render() {
        const {error, isLoaded, items, stars} = this.state;
        const starComponents = Array(stars).fill('fas fa-star')
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div className={"job-card-container"}>
                            <div className="job-card-row-1">
                                <h1 className="job-card-u-jt mr-5">{item.jobTitle}</h1>
                                <div className="star-rating">
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
                                    item.jobType.map((type) => (
                                        <p className={"job-card-job-type"}>{type}</p>
                                    ))
                                }
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}
