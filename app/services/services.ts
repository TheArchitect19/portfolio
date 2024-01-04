import { FaInternetExplorer, FaOctopusDeploy, FaServer } from "react-icons/fa6";
import { TbColorPicker } from "react-icons/tb";

const services = [
  {
    title: "REST APIs",
    description: "Designing and implementing functional APIs that improve the functionality and user experience of your applications. Ensuring the APIs are secure, efficient, and easily maintainable.",
    icon: FaServer,
    background: "bg-blue-500",
  },

  {
    title: "Frontend Development",
    description: "Building responsive and interactive web & mobile applications using modern JavaScript libraries & other frameworks, like React, React Native, Flutter etc. I ensure that the design to code implementation is pixel perfect & is performance oriented.",
    icon: FaInternetExplorer,
    background: "bg-fuchsia-500",
  },

  {
    title: "Backend Development",
    description: "Developing scalable, secure and fairly complex backend systems using Node.js, Express.js, MongoDB, etc. I ensure that the backend is robust, secure, and easily maintainable. I can also implement GraphQL APIs for your applications.",
    icon: FaServer,
    background: "bg-teal-500",
  },

  {
    title: "UI / UX Design",
    description: "Creating intuitive and user-friendly interfaces. Designing engaging user experiences based on user behavior and feedback. Regularly updating designs to keep up with modern design trends.",
    icon: TbColorPicker,
    background: "bg-amber-500",
  },

  {
    title: "Website Depployment",
    description: "Making your website live and accessible to users, using various options like Vercel, Heroku, Amazon EC2, etc. Monitoring website performance post-deployment, can implement edge computing for better performance.",
    icon: FaOctopusDeploy,
    background: "bg-cyan-500",
  },
]

export default services;
