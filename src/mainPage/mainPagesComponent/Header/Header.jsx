import './Header.css'
const reactDescriptions = ['Js' , 'ReactJs' , 'NextJs' ]
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1))
}   
export default function Header() {
    const description = reactDescriptions[genRandomInt(2)];
     return (<header>
        <h1>Ali Asgari</h1>
        <p>
           I am a specialist in the field of {description}, with expertise in developing dynamic web applications and enhancing user interactions
        </p>
        </header>
       );
}