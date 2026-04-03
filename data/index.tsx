export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: 'https://drive.google.com/file/d/1cRilfQLKH30sDSj2A7qzmZ0nCr2t-HXC/view?usp=sharing' }
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
    title: "AI/ML enthusiast committed to turning cutting-edge research into real-world solutions.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "AI/ML Engineer",
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

// import type { TimelineEntry } from "@/types/timeline";

export const workExperience = [
  {
    id: 1,
    title: "Jul'25 - present",
    job_title: "AI/ML Engineer",
    company: "DRC Systems, Gandhinagar",
    content: [
      "Developed an AI-powered Q&A system that extracts and answers questions from video/audio using Whisper, LLMs, and LangChain.",
      "Built and deployed FastAPI APIs for document processing (PDF, DOCX, images) and content summarization.",
      "Worked with text, image, and audio preprocessing pipelines for AI applications.",
      "Integrated GenAI tools and experimented with agentic AI workflows using LangChain and Hugging Face Transformers.",
    ],
    tech_stack: [
      "Python",
      "GenAI",
      "NLP",
      "Machine Learning",
      "Computer Vision",
      "Langchain",
      "Whisper(STT)",
      "LLM",
      "AI Pipeline",
      "HuggingFace Transformers"
    ]
  },
  {
    id: 2,
    title: "Jan'25 - Jun'25",
    job_title: "AI/ML Intern",
    company: "DRC Systems, Gandhinagar",
    content: [
      "Developed an AI-powered Q&A system that extracts and answers questions from video/audio using Whisper, LLMs, and LangChain.",
      "Built and deployed FastAPI APIs for document processing (PDF, DOCX, images) and content summarization.",
      "Worked with text, image, and audio preprocessing pipelines for AI applications.",
      "Integrated GenAI tools and experimented with agentic AI workflows using LangChain and Hugging Face Transformers.",
    ],
    tech_stack: [
      "Python",
      "GenAI",
      "NLP",
      "Machine Learning",
      "Computer Vision",
      "Langchain",
      "Whisper(STT)",
      "LLM",
      "AI Pipeline",
      "HuggingFace Transformers"
    ]
  },
  {
    id: 3,
    title: "jun'24 - Aug'24",
    job_title: "FullStack Intern",
    company: "DLTitan, Bengaluru",
    content: [
      "Developed and optimized AI-driven legal document generation tools, enhancing efficiency and integration through Docker.",
      "Collaborated with cross-functional teams to ensure seamless integration of AI solutions into existing workflows.",
      "Utilized Docker for containerization, ensuring consistent development and deployment environments.",
      "Conducted thorough testing and validation of AI models to ensure accuracy and reliability in legal document generation.",
    ],
    tech_stack: [
      "Python",
      "RAG",
      "HuggingFace",
      "Docker"
    ]
  },
  {
    id: 4,
    title: "Apr'24 - May'24",
    job_title: "Summer Intern",
    company: "Supplo, UK (Remote)",
    content: [
      "Built a supplier search engine to find retailers based on product and region inputs.",
      "Developed web scraping tools to extract supplier data from regional online sources.",
      "Used LLMs to refine and structure scraped data into clean, usable contact information.",
      "Contributed to backend integration and API development using FastAPI.",
    ],
    tech_stack: [
      "Python",
      "Web Scraping",
      "BeautifulSoup",
      "FastAPI"
    ],
  }
];

