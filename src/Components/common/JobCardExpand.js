import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'
import '../../Styles/common/JobCardUnexpand.scss'
import ContentLoader from "react-content-loader";
import {Button} from "react-bootstrap";

export default class JobCardBack extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            stars: 4,
        };
    }

    shortenName = (str) => {
        if (str.length <= 25) {
            return str
        }
        return str.slice(0, 25) + "..."
    }


    componentDidMount() {
        const job = localStorage.getItem("jobInput")
        const location = localStorage.getItem("location")
        //const { job } = this.props.location.state
        //console.log(job);

        if (localStorage.getItem("res") == null) {
            let filter
            if (localStorage.getItem("isVision") === "true" || localStorage.getItem("isPhysical") === "true") {
                filter = "physical"
            } else if (localStorage.getItem("isLearning") === "true") {
                filter = "learning";
            } else {
                filter = "mental";
            }
            const link = "http://127.0.0.1:5000/jobs?jt=" + job + "&jl=" + location + "&jn=" + filter
            console.log(link)
            fetch(link)
                .then(res => res.json())
                .then(
                    (result) => {
                        localStorage.setItem("res", JSON.stringify(result))
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
        } else {
            let res = localStorage.getItem("res")
            let results = JSON.parse(res)
            this.setState({
                isLoaded: true,
                items: results
            })
        }
        //this.setState({isLoaded: true})
    }

    render() {
        // function callApi(url) {
        //     var uri = encodeURI(url)
        //     fetch('http://127.0.0.1:5000/details?ju=' + uri)
        //         .then(res => res.json)
        //         .then((results) => {
        //             console.log(results)
        //         })
        // }
        const {error, isLoaded, items, stars} = this.state;
        const starComponents = Array(stars).fill('fas fa-star')
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div>
                    <ContentLoader
                        speed={600}
                        height={360}
                        viewBox="0 0 400 160"
                        backgroundColor="#f3f3f3"
                        margin={200}
                        foregroundColor="#ecebeb"


                    >
                        <rect x="0" y="8" rx="3" ry="3" width="88" height="6"/>
                        <rect x="0" y="26" rx="3" ry="3" width="52" height="6"/>
                        <rect x="0" y="56" rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="72" rx="3" ry="3" width="220" height="6"/>
                        <rect x="0" y="104" rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="120" rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="136" rx="3" ry="3" width="240" height="6"/>
                        <rect x="0" y="152" rx="3" ry="3" width="220" height="6"/>
                        <rect x="0" y="168" rx="3" ry="3" width="150" height="6"/>
                        <rect x="0" y="194" rx="3" ry="3" width="150" height="6"/>


                    </ContentLoader>
                    <ContentLoader
                        speed={600}
                        height={360}
                        viewBox="0 0 400 160"
                        backgroundColor="#f3f3f3"
                        margin={200}
                        foregroundColor="#ecebeb"


                    >
                        <rect x="0" y="8" rx="3" ry="3" width="88" height="6"/>
                        <rect x="0" y="26" rx="3" ry="3" width="52" height="6"/>
                        <rect x="0" y="56" rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="72" rx="3" ry="3" width="220" height="6"/>
                        <rect x="0" y="104" rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="120" rx="3" ry="3" width="230" height="6"/>
                        <rect x="0" y="136" rx="3" ry="3" width="240" height="6"/>
                        <rect x="0" y="152" rx="3" ry="3" width="220" height="6"/>
                        <rect x="0" y="168" rx="3" ry="3" width="150" height="6"/>
                        <rect x="0" y="194" rx="3" ry="3" width="150" height="6"/>


                    </ContentLoader>
                </div>

            )
        } else {
            return (
                <div>
                    {items.map((item) => (
                        <div className={'job-card-container m-5 pl-4'}>
                            <div className={'m-1'}>
                                <div className='job-card-row-1'>
                                    <h1 className='job-card-u-jt mr-5'>{this.shortenName(item.JobTitle)}</h1>
                                    <div class='ratingstars'>
                                        {starComponents.map((cn) => (
                                            <i className={cn}/>
                                        ))}
                                    </div>
                                    <Button
                                        onClick={console.log('Hello')}
                                        role='button'
                                        className='job-card-detail-btn'
                                        href='/'
                                    >
                                        View Details
                                    </Button>
                                </div>
                                <div className='job-card-row-2'>
                                    <p className='job-card-company-title'>{item.Company}</p>
                                    <div className='d-flex'>
                                        <i className={'fas fa-map-marker-alt'}/>
                                        <p className='job-card-job-location ml-2'>
                                            {item.Location}
                                        </p>
                                    </div>
                                </div>
                                <p className='job-card-summary'>
                                    Job Summary: {item.Summary}
                                </p>

                                <div className='job-card-job-type-container'>
                                    {<p className={'job-card-job-type'}>{item.Remote}</p>}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}