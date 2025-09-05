import React from 'react';
import DATA from '../data';
import { useState } from 'react';
import MySkillsd from './MySkillsD.jsx'
import './AboutMe.css';
import WhoAmI from '../assets/pictures/rocks.jpg'
import Mem from '../assets/pictures/meE.jpg'
import telegram from '../assets/pictures/telegram.svg'
import insta from '../assets/pictures/insta.svg'
import linkdin from '../assets/pictures/linkedin.svg'
import facebook from '../assets/pictures/facebook.svg'
import MySkills from './MySkills';
import uparrow from '../assets/pictures/uparrow.svg'; // Ensure the correct file extension
import leftarrow from '../assets/pictures/leftarrow.svg'; // Ensure the correct file extension

const AboutMe = () => {
        const [arrows, setArrows] = useState(DATA.map(() => uparrow));
        const [selectedIndex, setSelectedIndex] = useState(0); // State to store the currently selected index
        const [selectedIndexForPhone, setselectedIndexForPhone] = useState(null); // State to store the currently selected index


    function handleClick(index) {
    const newArrows = DATA.map((_, i) => {
    if (i === index && arrows[index]===uparrow) {
    return leftarrow;
     } else {
    return uparrow; 
    }
});
        setSelectedIndex(index); 
        setArrows(newArrows);

let found = false;

for (let i = 0; i < arrows.length; i++) {
  if (i === index && arrows[i] === uparrow) {
    setselectedIndexForPhone(index);
    found = true; 
    break; 
  }
}

if (!found) {
  setselectedIndexForPhone(null); // Call this only if not found
}}

    return (
       <>
       <div className="first-part-container">
            <li className='top-left-li'>A L I &nbsp; A S G A R I</li>
            <div className='center-dive'>
                <hr />
                <h2 className='pc-h2'>Passionate and dedicated to problem-solving.</h2>
                <h2 className='phone-h2'>dedicated to proggramming</h2>
                <hr />
            </div>
            <ul className="top-right-list">
                <li className='about-li'><a href='#ali-asgari'>INTRODUCTION</a></li>
                <li className='main-li'><a href='#my-skills'>MY SKILLS</a></li>
                <li className='phone-li'><a href='#my-skills'>MAIN PAGE</a></li>
                <li className='li-right-phone'><a href='#details2'>INTRODUCTION</a></li>
                <li className='li-right-phone-skills'><a href='#section2'>MY SKILLS</a></li>
                <li className='li-right-phone'><a href='#section2'>MAIN PAGE</a></li>
            </ul>
        </div>
         <div className='mobiile-second-container'>       
                <img className='mobile-profile-image' src={WhoAmI}/>
                <div className='details'>
                <h3>What are the characteristics of my work style?  </h3>
                <hr/>
                <p>Dedication is at the heart of my personal and professional life. It fuels my ambition and drives me to pursue my goals with unwavering commitment, even when faced with challenges. I believe that success stems from hard work and perseverance, and I strive to inspire those around me with my passion and determination. My focus on continuous improvement ensures that I am always pushing myself to achieve excellence.</p>
            </div>
        </div>
        
        <div>
            
        </div>
        <div className='second-part-container'>
            
            <div className='details'>
                <h3>What are the characteristics of my work style?  </h3>
                <hr/>
                <p>Dedication is at the heart of my personal and professional life. It fuels my ambition and drives me to pursue my goals with unwavering commitment, even when faced with challenges. I believe that success stems from hard work and perseverance, and I strive to inspire those around me with my passion and determination. My focus on continuous improvement ensures that I am always pushing myself to achieve excellence.</p>
                <p className='second-paragraph'>My passion for programming motivates me to continually learn and solve complex problems. I enjoy creating innovative solutions and exploring new technologies, which fuels my commitment to excellence in every project I undertake.</p>
                <p className='third-paragraph'>With my strong sense of responsibility and proven experience in programming, I assure you that your project will be in reliable hands. I prioritize quality and attention to detail, enabling me to effectively manage challenges and deliver successful results. You can trust me to complete your project with confidence.</p>
                <div className='how-to-contact-mem'><h3 className='how-to-contact-me'>How to Contact Me</h3>
                <hr/>
                <p>If you are interested in collaborating with me, you can find my contact information in the footer of this page.</p>
                </div>
            </div>
            <div className='rocks-container'><img className='profile-image' src={WhoAmI}/> </div>
        </div>

        <div className='mobile-third-part-container'>
            <div className='me-container'><img className='me-image' src={Mem}/> </div>
            <div className='details-2' id='details2'>
                <h3 >Ali Asgari </h3>
                <h4 className='front'>Front end developer</h4>
                <hr />
                <p>Hello and greetings! My name is Ali Asgari, born in 2003, and I am from Kermanshah.<br/>
                    From a young age, I developed a passion for programming. I was fascinated by the idea of creating software and solving complex problems through code.<br/>
                    Fortunately, I am now actively working in the field I love. My journey has allowed me to gain valuable experience and develop my skills further.<br/>
                    If you would like to see a summary of my skills in programming, please refer to the footer of this website. If you wish to review my past projects in detail, feel free to visit the homepage.
                    The projects are categorized based on various features and functionalities, making it easy to navigate and understand their unique aspects. I continuously update my portfolio with new projects, reflecting my ongoing growth and commitment to excellence in programming.<br/>
                    Thank you for taking the time to read about my journey and skills. I appreciate your interest and look forward to potential collaboration!
                </p>
            </div>
        </div>



        <div id='ali-asgari' className='third-part-container'>
            <div className='me-container'><img className='me-image' src={Mem}/> </div>
            <div className='details-2' id='details2'>
                <h3 >Ali Asgari </h3>
                <h4 className='front'>Front end developer</h4>
                <hr />
                <p>Hello and greetings! My name is Ali Asgari, born in 2003, and I am from Kermanshah.<br/>
                    From a young age, I developed a passion for programming. I was fascinated by the idea of creating software and solving complex problems through code.<br/>
                    Fortunately, I am now actively working in the field I love. My journey has allowed me to gain valuable experience and develop my skills further.<br/>
                    If you would like to see a summary of my skills in programming, please refer to the footer of this website. If you wish to review my past projects in detail, feel free to visit the homepage.
                    The projects are categorized based on various features and functionalities, making it easy to navigate and understand their unique aspects. I continuously update my portfolio with new projects, reflecting my ongoing growth and commitment to excellence in programming.<br/>
                    Thank you for taking the time to read about my journey and skills. I appreciate your interest and look forward to potential collaboration!
                </p>
            </div>
        </div>
        <div className='row'>
                <p className='no-phone-par'>FRONT END DEVELOPER</p>
                <p className='no-phone-par'>A PROFESSIONAL SPECIALIZING IN JAVASCRIPT WEB APPLICATION DEVELOPMENT.</p>
                <p className='phone-par'>A PROFESSIONAL SPECIALIZING IN JAVASCRIPT </p>

        </div>
        <div className='footer'>
                <div className='section'>
                    <h2>Description</h2>
                    <hr />
                    <MySkillsd index={selectedIndex} />
                </div>
                <div className='section2'>
                    <h2 id='my-skills'>My skills</h2>
                    <hr />
                    <MySkills onClick={handleClick} array={arrows} selectedIndex={selectedIndex} selectedIndexForPhone={selectedIndexForPhone}/>
                    </div>
                <div className='section3'>
                    <h2>Contact me</h2>
                    <hr className='phone-hr-footer-contact'/>
                    <h3>My Address</h3>
                    <p className='address'>Kermanshah - Hafizieh Town - Dr. Hesabi Street - Next to
                       Baran Alley - No. 30.</p>
                    <p className='yellow'>Contact Information</p>
                    <div className='link'>
                        <a href="https://t.me/Aasgari10/" target="_blank" rel="noopener noreferrer">
                            <img className='telegram'src={telegram}/>
                        </a>
                    <a href="https://www.instagram.com/ali_asgari2083/" target="_blank" rel="noopener noreferrer">
                            <img className='telegram'  src={insta} alt="Instagram"/>
                    </a>
                </div>    
                <a href="https://www.linkedin.com/in/your_username/" target="_blank" rel="noopener noreferrer">
                    <img src={linkdin} alt="LinkedIn" className='telegram'/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="LinkedIn" className='telegram'/>
                </a>
                <div className='contact'>
                    <p className='adddress'>- phone: <span className='yellow'>0918 561 2083</span></p>
                    <p className='adddress'>- email: <span className='yellow'>alimanu.s.s2002@gmail.com</span></p>
                </div>
                    <p className='address'>Please contact us during business hours. Emails will also be checked daily at 8 AM.</p>
                    <p className='address'>Thank you very much for taking the time to assist me.</p>
                </div>          
        </div>



                <div className='footer-tablet'>
                    <div className='inner-footer-tablet'>
                    < div className='section'>
                    <h2>Contact me</h2>
                    <hr />
                    <MySkillsd index={selectedIndex} />
                </div>
                <div className='section2' id='section2'>
                    <h2 >My skills</h2>
                    <hr className='section2-hr'/>
                    <MySkills onClick={handleClick} array={arrows} selectedIndex={selectedIndex} selectedIndexForPhone={selectedIndexForPhone}/>
                    </div>
                </div>
                <div className='address-tablet'>
                <div className='section3'>
                    <h2 >Contact me</h2>
                    <hr className='phone-hr-footer-contact'/>
                    <h3>My Address</h3>
                    <p className='address'>Kermanshah - Hafizieh Town - Dr. Hesabi Street - Next to Baran Alley - No. 30.</p>
                    <p className='yellow'>Contact Information</p>
                    <div className='link'>
                        <a href="https://t.me/Aasgari10/" target="_blank" rel="noopener noreferrer">
                            <img className='telegram'src={telegram}/>
                        </a>
                    <a href="https://www.instagram.com/ali_asgari2083/" target="_blank" rel="noopener noreferrer">
                            <img className='telegram'  src={insta} alt="Instagram"/>
                    </a>
                </div>    
                <a href="https://www.linkedin.com/in/your_username/" target="_blank" rel="noopener noreferrer">
                    <img src={linkdin} alt="LinkedIn" className='telegram'/>
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook} alt="LinkedIn" className='telegram'/>
                </a>
                <div className='contact'>
                    <p className='adddress'>- phone: <span className='yellow'>0918 561 2083</span></p>
                    <p className='adddress'>- email: <span className='yellow'>alimanu.s.s2002@gmail.com</span></p>
                </div>
                    <p className='address'>Please contact us during business hours. Emails will also
                    be checked daily at 8 AM.</p>
                    <p className='address'>Thank you very much for taking the time to assist me.</p>
                </div>
                </div>          
        </div>
    </>
    );
};

export default AboutMe;
