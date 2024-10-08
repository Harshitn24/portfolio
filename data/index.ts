export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: 'https://drive.google.com/file/d/1F4V733ZSQdUwbRG_33MRzlXE242R-MCg/view?usp=sharing' }
];

export const gridItems = [
  {
    id: 1,
    title: "I emphasize client collaboration and actively promote open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I am highly adaptable to communication across different time zones ",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "FullStack Web Developer",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Let's collaborate and create something together",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Powered Prompts",
    des: "Developed an AI-powered Next.js app with Google authentication via NextAuth, secure database connections, and a responsive interface using Tailwind CSS.",
    img: "/promptic.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    gol: 'link',
    link: "https://promptic.vercel.app",
    gitlink: 'https://github.com/Harshitn24/promptic'
  },
  {
    id: 2,
    title: "PostPal",
    des: "Developed a comprehensive social networking app with secure login, user profiles, and interactive posts, using MongoDB Atlas for scalable data storage, React and Material-UI for a responsive UI, and Redux for state management.",
    img: "/postpal.png",
    iconLists: ['/re.svg', "/tail.svg"],
    gol: 'git',
    link: "",
    gitlink: "https://github.com/Harshitn24/PostPal"
  },
  {
    id: 3,
    title: "File Sharing App",
    des: "Developed a real-time file sharing app with secure authentication, email sharing, and real-time updates using React.js, Next.js, Firebase, and Resend.",
    img: "/filesharingapp.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    gol: 'git',
    link: "",
    gitlink: "https://github.com/Harshitn24/FileSharingApp"
  },
  {
    id: 4,
    title: "Krypt: Web3.o project",
    des: "A Web3.0 project for transferring ETH through blockchain technology, featuring a Metamask wallet connection, Ethereum transfers, and transaction history, built with Vite, React, and Tailwind CSS.",
    img: "/krypt.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg"],
    gol: 'link',
    link: "https://krypt-phi-seven.vercel.app/",
    gitlink: ""
  },
];

export const testimonials = [
  // {
  //   quote:
  //     "Working with Harshit was a truly rewarding experience. His professionalism, swift responsiveness, and unwavering commitment to delivering outstanding results were evident throughout our project. Harshit's genuine passion for every aspect of development really sets him apart. If you're looking to enhance your website and elevate your brand, Harshit is the perfect choice.",
  //   name: "John Alexander",
  //   title: "CEO of DLTITAN",
  // },
  // {
  //   quote:
  //     "Harshit's involvement in our project brought a remarkable level of expertise and enthusiasm. His innovative mindset and ability to tackle challenges head-on were evident in every aspect of his work. Harshit's collaborative spirit and meticulous attention to detail created a seamless workflow and outstanding results. For anyone looking to transform their digital presence with fresh, cutting-edge solutions, Harshit is a standout professional who will drive your vision forward.",
  //   name: "Micheal Johnson",
  //   title: "Director of SUPPLO.co",
  // },
];

export const companies = [
  //   {
  //     id: 3,
  //     name: "HOSTINGER",
  //     img: "/host.svg",
  //     nameImg: "/hostName.svg",
  //   },
  //   {
  //     id: 4,
  //     name: "AWS",
  //     img: "/aws.svg",
  //     nameImg: "/AWSName.svg",
  //   },
  //   {
  //     id: 5,
  //     name: "docker.",
  //     img: "/dock.svg",
  //     nameImg: "/dockerName.svg",
  //   },
];

export const workExperience = [
  {
    id: 1,
    title: "FullStack Developer Intern",
    desc: "Developed and optimized AI-driven legal document generation tools, enhancing efficiency and integration through Docker.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend Engineer Intern",
    desc: "Improved AI agent efficiency and built robust infrastructure for a multi-agent system at Supplo, reducing data retrieval time by 75%.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: 'https://github.com/Harshitn24'
  },
  {
    id: 2,
    img: "/twit.svg",
    link: 'https://x.com/im_Harshit24'
  },
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/harshit-navadiya-a3629a216/'
  },
];