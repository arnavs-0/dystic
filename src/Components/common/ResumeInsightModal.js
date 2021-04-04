import React, {useState, useEffect} from 'react';
import '../../Styles/common/ResumeInsightModal.scss'
import SkillBar from 'react-skills-bars';


function ResumeInsightModal(props) {
    const [concepts, setConcepts] = useState([]);
    const [emotions, setEmotions] = useState([]);

    async function getResumeInsight(id) {
        return fetch('https://dystic-contact.herokuapp.com/analyze/' + id).then(res => res.json()).then(data => data)
    }

    useEffect(()=>{
        getResumeInsight(props.resumeID).then(value => {
            value.concepts.map(v => {
                // concepts.push({type: v.text, level: v.relevance*100})
                // console.log({type: v.text, level: v.relevance*100})
                setConcepts(prev => [...prev, {type: v.text, level: Math.round(v.relevance*100)}])
            })
            // value.emotion.document.emotion.map(v=>{
            //     setEmotions(prev => [...prev, {type: v.text, level: Math.round(v.relevance*100)}])
            // })
            Object.keys(value.emotion.document.emotion).map((key, index) => {
                setEmotions(prevState => [...prevState, {type:key, level: value.emotion.document.emotion[key]*100}])
            })

        })
    },[])



    console.log(emotions)

    return (
        <div className={"resume-insight-modal-container"}>
            <p className={"rim-title"}>{props.resumeID} Resume Insight</p>
            <p className="font-weight-bold">Emotions</p>
            <SkillBar skills={emotions} />
            <p className="font-weight-bold">Keywords</p>
            <SkillBar skills={concepts} />

            {/*<SkillBar skills={concepts}/>*/}
        </div>
    );
}

export default ResumeInsightModal;