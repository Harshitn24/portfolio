export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
  { name: "Resume", link: 'https://drive.google.com/file/d/1LNzk2slthIkV4Lqo_W6I1W-aEU9lAuiI/view?usp=drivesdk' }
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

import { CardSpotlight } from "@/components/ui/card-spotlight";

export const workExperience = [
  {
    title: "Jul'25 - present",
    content: (
      <CardSpotlight>
        <div>
          <p className="mb-2 text-xl font-normal text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200" >
            AI/ML Engineer
          </ p >

          <p className="mb-8 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            DRC Systems, Gandhinagar
          </ p >

          <ul className="list-disc pl-7 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            <li className="mb-2">Developed an AI-powered Q&A system that extracts and answers questions from video/audio using Whisper, LLMs, and LangChain.</li>
            <li className="mb-2">Built and deployed FastAPI APIs for document processing (PDF, DOCX, images) and content summarization.</li>
            <li className="mb-2">Worked with text, image, and audio preprocessing pipelines for AI applications.</li>
            <li className="mb-2">Integrated GenAI tools and experimented with agentic AI workflows using LangChain and Hugging Face Transformers.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "GenAI", "NLP", "Machine Learning", "Computer Vision", "Langchain", "Whisper(STT)", "LLM", "AI Pipeline", "HuggingFace Transformers"].map((item) => (
              <span
                key={item}
                className="py-2 px-3 text-xs lg:text-sm opacity-80 rounded-lg text-center bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </CardSpotlight>
    ),
  },
  {
    title: "Jan'25 - Jun'25",
    content: (
      <CardSpotlight>
        <div>
          <p className="mb-2 text-xl font-normal text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200" >
            AI/ML Intern
          </ p >

          <p className="mb-8 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            DRC Systems, Gandhinagar
          </ p >

          <ul className="list-disc pl-7 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            <li className="mb-2">Developed an AI-powered Q&A system that extracts and answers questions from video/audio using Whisper, LLMs, and LangChain.</li>
            <li className="mb-2">Built and deployed FastAPI APIs for document processing (PDF, DOCX, images) and content summarization.</li>
            <li className="mb-2">Worked with text, image, and audio preprocessing pipelines for AI applications.</li>
            <li className="mb-2">Integrated GenAI tools and experimented with agentic AI workflows using LangChain and Hugging Face Transformers.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "GenAI", "NLP", "Machine Learning", "Computer Vision", "Langchain", "Whisper(STT)", "LLM", "AI Pipeline", "HuggingFace Transformers"].map((item) => (
              <span
                key={item}
                className="py-2 px-3 text-xs lg:text-sm opacity-80 rounded-lg text-center bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </CardSpotlight>
    ),
  },
  {
    title: "jun'24 - Aug'24",
    content: (
      <CardSpotlight>
        <div>
          <p className="mb-2 text-xl font-normal text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200" >
            FullStack Intern
          </ p >

          <p className="mb-8 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            DLTitan, Bengaluru
          </ p >

          <ul className="list-disc pl-7 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            <li className="mb-2">Developed and optimized AI-driven legal document generation tools, enhancing efficiency and integration through Docker.</li>
            <li className="mb-2">Collaborated with cross-functional teams to ensure seamless integration of AI solutions into existing workflows.</li>
            <li className="mb-2">Utilized Docker for containerization, ensuring consistent development and deployment environments.</li>
            <li className="mb-2">Conducted thorough testing and validation of AI models to ensure accuracy and reliability in legal document generation.</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Python", "RAG", "HuggingFace", "Docker"].map((item) => (
              <span
                key={item}
                className="py-2 px-3 text-xs lg:text-sm opacity-80 rounded-lg text-center bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </CardSpotlight>
    ),
  },
  {
    title: "Apr'24 - May'24",
    content: (
      <CardSpotlight>
        <div>
          <p className="mb-2 text-xl font-normal text-neutral-800 md:text-2xl lg:text-3xl dark:text-neutral-200" >
            Summer Intern
          </ p >

          <p className="mb-8 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            Supplo, UK (Remote)
          </ p >

          <ul className="list-disc pl-7 text-md font-normal text-neutral-800 md:text-lg lg:text-xl dark:text-neutral-200" >
            <li className="mb-2">Built a supplier search engine to find retailers based on product and region inputs.</li>
            <li className="mb-2">Developed web scraping tools to extract supplier data from regional online sources.</li>
            <li className="mb-2">Used LLMs to refine and structure scraped data into clean, usable contact information.</li>
            <li className="mb-2">Contributed to backend integration and API development using FastAPI.</li>
            <div className="flex flex-wrap gap-2 mt-4">
              {["Python", "Web Scraping", "Beautifulsoap", "FastAPI"].map((item) => (
                <span
                  key={item}
                  className="py-2 px-3 text-xs lg:text-sm opacity-80 rounded-lg text-center bg-white/20 backdrop-blur-md border border-white/10 rounded-xl shadow-lg"
                >
                  {item}
                </span>
              ))}
            </div>
          </ul>
        </div>
      </CardSpotlight>
    ),
  },
];

