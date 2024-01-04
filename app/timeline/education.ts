import { FaGraduationCap, FaSchool } from "react-icons/fa6";

const timelineElements = [
  {
    id: 1,
    title: "Bachelor of Engineering",
    organization: "Chandigarh University",
    location: "Mohali, India",
    description: "Pursuing my Bachelor of Technology in Computer Science and Engineering.",
    icon: FaGraduationCap,
    color: "blue",
    date: "2021 - Present",
    iconBackgroundColor: "#018f69",
  },
  
  {
    id: 2,
    title: "High School",
    organization: "Ramshree Public School",
    location: "Orai, India",
    description: "Completed my senior secondary education with 76% marks.",
    icon: FaSchool,
    color: 'fuchsia',
    date: "2019 - 2021",
    iconBackgroundColor: "#018f69",
  },

  {
    id: 3,
    title: "Secondary School",
    organization: "Gulmohar Public School",
    location: "Kanpur, India",
    description: "Completed my secondary education with 96% marks.",
    icon: FaSchool,
    color: 'teal',
    date: "2016 - 2017",
    iconBackgroundColor: "#018f69",
  },
];

export default timelineElements;
