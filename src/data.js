import jsImg from './mainPage/assets/js.svg';
import jsxImg from './mainPage/assets/react.svg';
import stateImg from './mainPage/assets/ts.svg';

export const SVGS = [
  {
    image: jsImg,
    title: 'JavaScript',
    // description:
    //   'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'ReactJs',
    // description:
    //   'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  
  {
    image: stateImg,
    title: 'TypeScript',
    // description:
    //   'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];

export const EXAMPLES = {
  JavaScript: {
    title: 'JavaScript',
    description:
      'JavaScript is a high-level programming language used primarily for creating interactive and dynamic content on websites. It allows developers to manipulate HTML and CSS, enhancing user experiences and enabling responsive design.',
    code: 'I have strong JavaScript skills for developing dynamic web applications and optimizing performance. My expertise includes working with popular frameworks to ensure efficient code.',
  },
  ReactJs: {
    title: 'ReactJs',
    description:
      'React is a popular JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components and manage the state efficiently, resulting in fast and interactive web applications',
    code: 'Proficient in React.js, capable of building efficient and dynamic user interfaces with reusable components. Expertise includes state management and optimizing performance for seamless user experiences.',
  },
  NextJs: {
    title: 'NextJs',
    description:
      'Next.js is a React framework that enables server-side rendering and static site generation for improved performance and SEO. It offers features like automatic code splitting and routing, streamlining the development process.',
    code:'Proficient in Next.js, skilled at building high-performance web applications with server-side rendering and static site generation. Expertise includes optimizing SEO and implementing efficient routing and data fetching.'

,
  },
  TypeScript: {
    title: 'TypeScript',
    description:
      'State allows React components to change their output over time in response to user actions, network responses, and anything else.',
    code: "Skilled in TypeScript, capable of developing robust applications with strong typing and enhanced code quality. Expertise includes integrating TypeScript with popular frameworks to improve maintainability and reduce runtime errors.",
  },
};