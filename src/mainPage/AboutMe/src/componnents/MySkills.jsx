import DATA from "../data";
import './AboutMe.css';

export default function MySkills({ onClick, array, selectedIndex, selectedIndexForPhone}) {
  return (
    <ul className="skills-ul">
      {DATA.map((item, index) => (
        <li className="my-skills" key={`skill-${index}-${item.title}`}>
          <button
            onClick={() => onClick(index)}
            className={selectedIndex === index ? 'active' : 'button'}
            aria-expanded={selectedIndex === index}
          >
            {item.title}
            <img  style={{ width: '1rem', marginRight: '6rem' }} 
              src={array[index]}
              alt={`${item.title} expansion indicator`}
              className={"skill-arrow"}
            />
              <img 
              src={array[index]}
              alt={`${item.title} expansion indicator`}
              className={"arrow-for-phone"}
            />
          </button>
            <hr className="hr-skills" />
          {selectedIndexForPhone === index && (
            <p className='skills-description-phone'>
              {DATA[index].description}
            </p>
          )}
        </li>
      ))}
    </ul>
  );
}
