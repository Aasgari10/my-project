import Svgsli from "./SvgsLi.jsx";
import {SVGS} from '../../../data.js'; 

export default function CoreConcepts(){
    return(
    <section id='svgs'>
        <ul>
            {SVGS.map((items)=> <Svgsli key={items.title} {...items}/>)}
        
        </ul>  
    </section> 
    )
}