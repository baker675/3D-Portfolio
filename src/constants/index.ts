// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  cpp,
  csharp,
  python,
  bash,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Learning Process",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/baker675/3D-Portfolio",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Script Developer",
    icon: backend,
  },
  {
    title: "App Developer",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Bash",
    icon: bash,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "FiveM",
    company_name: "Learning pt.1",
    icon: starbucks,
    iconBg: "#383E56",
    date: "",
    points: [
      "I had not a clue what I was going to be doing, I thought it was going to be easy, I was wrong...",
      "I started with a game called FiveM when i was in an OLD server i user to play, the owner tought me how to make liveries and i thought that it was not hard so how hard could the other stuff be.",
      "After I learned liveries I started configuring scripts and I loved it but it was harder then making liveries.",
      "I was struggling because I did not know the basic coding languages but at the same time I did not want to learn them.",
    ],
  },
  {
    title: "Learning The Basics",
    company_name: "Learning pt.2",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "After Struggling for too long I decided to take a coding corse.",
      "I did not want to pay for one and I did not know what coding language to start with so I did my research.",
      "I found a great place to learn for free, they told me that I should learn HTML and CSS first because they are the fundamental languages.",
      "So that is what I did, I learned HTML and CSS.",
    ],
  },
  {
    title: "More Advanced",
    company_name: "Learning pt.3",
    icon: shopify,
    iconBg: "#383E56",
    date: "",
    points: [
      "I loved coding and I knew that I did not want to stop with HTML and CSS so I did more research on more lf the languages I should learn.",
      "I found that python was good to learn so I learned that.",
      "I kept doing this till I had learned all of the languages that I know today.",
      "To this day I still learn a lot of new stuff, with coding the learning never stops.",
    ],
  },
  {
    title: "Make My Own Stuff",
    company_name: "I am able to make my own stuff now!",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "After a lot of hard work and a lot of time learning how to code i could make my own code now!",
      "i still kept learning but i was making websites and desktop apps and more.",
      "Just a tip if you think that the learning and time figuring out how stuff works or are just not able to find out what is wrong with your code just use what is in-front of you + some common sense and you will figure it out.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Fear of man will prove to be a snare, but whoever trusts in the Lord is kept safe.",
    name: "Sara Lee",
    designation: "Proverbs",
    company: "29:25",
    image: user1,
  },
  {
    testimonial:
      "On his robe and on his thigh he has a name written, King of kings and Lord of lords.",
    name: "Chris Brown",
    designation: "Revelation",
    company: "19:16",
    image: user2,
  },
  {
    testimonial:
      "For although there may be so-called gods in heaven or on earth—as indeed there are many “gods” and many “lords”",
    name: "Lisa Wang",
    designation: "1 Corinthians",
    company: "8:5",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Who Am I",
    description:
      "A Portfolio I Made With HTML And CSS.",
    tags: [
      {
        name: "portfolio",
        color: "blue-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/baker675/Who-Am-I/",
    live_site_link: "https://baker675.github.io/Who-Am-I/",
  },
  {
    name: "Youtube Clone",
    description:
      "A More Modern Looking Version Of Youtube.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/baker675/Youtube-BakersBuilds",
    live_site_link: "https://jade-lebkuchen-264813.netlify.app/",
  },
  {
    name: "Dash",
    description:
      "A Racing Game I Made For The Times You Are Board.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/baker675/a_quick_game",
    live_site_link: "https://baker675.github.io/a_quick_game/",
  },
  {
    name: "Dynamic Island",
    description:
      "I Recrated The Dynamic Island From The New Iphones.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project4,
    source_code_link: "https://github.com/baker675/dynamic_island",
    live_site_link: "https://baker675.github.io/dynamic_island/dynamic-island.html",
  },
  {
    name: "Iphone Calculator",
    description:
      "A Working Calculator That Looks Like It Is In An Iphone.(forgot to add a +)",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project5,
    source_code_link: "https://github.com/baker675/calculator-iphone",
    live_site_link: "https://baker675.github.io/calculator-iphone/",
  },
  {
    name: "Fake Google",
    description:
      "A Fake Version Of Google That Does Not Store Any Of Your Info",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project6,
    source_code_link: "https://github.com/baker675/the-actuale-google",
    live_site_link: "https://baker675.github.io/the-actuale-google/google%20html%20and%20css/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@BakersBuilds23.",
  },
  {
    name: "Discord",
    icon: linkedin,
    link: "https://discord.com/users/1212861654505754697",
  },
  {
    name: "Donations",
    icon: twitter,
    link: "https://buymeacoffee.com/bakersdevelopment",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanidhyy",
  },
] as const;
