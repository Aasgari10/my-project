
import { EXAMPLES } from '../../../data.js'; 
import { useState } from "react"
import TabButton from '../TabButton/tabbutton.jsx';
import TabContent from '../TabContent/tabcontent.jsx';
export default function Examples (){
    const [selectedTopic , setSelectedTopic] = useState (false);
function handleSelect(selectedButton) {
    setSelectedTopic(false);
    setTimeout(() => {
        setSelectedTopic(selectedButton); 
    }, 1); 
}
    return(
        <>
        <section id='examples'>
                    <h2>My Skills</h2>
                    <menu>
                      <TabButton isSelected={selectedTopic ==="JavaScript" } onSelect={() => handleSelect("JavaScript")}>JavaScript</TabButton>
                      <TabButton isSelected={selectedTopic=== "ReactJs"} onSelect={() => handleSelect("ReactJs")}>ReactJs</TabButton>
                      <TabButton isSelected={selectedTopic==="NextJs"} onSelect={()=> handleSelect("NextJs")}>NextJs</TabButton>
                      <TabButton isSelected={selectedTopic==="TypeScript"} onSelect={()=> handleSelect("TypeScript")}>TypeScript</TabButton>
                    </menu>
                  </section>
                  {selectedTopic ? (<TabContent topic={selectedTopic}h3={EXAMPLES[selectedTopic].title}p={EXAMPLES[selectedTopic].description}code={EXAMPLES[selectedTopic].code}/>):( <p>Please select a topic</p>)}
    </>
    )
}