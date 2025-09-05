export default function TabContent({ h3, p, code, topic}) {
    return (
        <div id="tab-content">
            {topic && 
                <>
                    <h3 >{h3}</h3>
                    <p >{p}</p>
                    
                        <p className="skills">
                            {code}
                        </p>
                    
                </>
            }
        </div>
    );
}
