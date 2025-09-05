import DATA from "../data";
import './AboutMe.css';

export default function MySkillsD({index}){
    return( <>
        <h3>{DATA[index].title}</h3>
        <p className='skills-description'>{DATA[index].description}</p></>
    )
} 