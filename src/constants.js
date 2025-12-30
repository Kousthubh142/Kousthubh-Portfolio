// Skills Section Logo's
import matplotlibLogo from './assets/tech_logo/matplotlib.png';
import pandasLogo from './assets/tech_logo/pandas.png';
import googleLogo from './assets/tech_logo/google.png';
import groqLogo from './assets/tech_logo/groq.png';
import tensorflowLogo from './assets/tech_logo/tensorflow.png';
import pytorchLogo from './assets/tech_logo/pytorch.png';
import langchainLogo from './assets/tech_logo/langchain.png';
import yoloLogo from './assets/tech_logo/yolo.svg';
import mlLogo from './assets/tech_logo/ml.png';
import scikitLogo from './assets/tech_logo/scikit.png';
import seabornLogo from './assets/tech_logo/seaborn.png';
import opencvLogo from './assets/tech_logo/opencv.png';
import golangLogo from './assets/tech_logo/golang.png';
import flstudioLogo from './assets/tech_logo/flstudio.png';
import roboflowLogo from './assets/tech_logo/roboflow.png';
import traeaiLogo from './assets/tech_logo/traeai.jpeg';
import kiroLogo from './assets/tech_logo/kiro.png';
import colabLogo from './assets/tech_logo/colab.png';
import kaggleLogo from './assets/tech_logo/kaggle.png';
import huggingfaceLogo from './assets/tech_logo/huggingface.png';
import dockerLogo from './assets/tech_logo/docker.png';
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// Experience Section Logo's
import jarLogo from './assets/company_logo/jar.png';

// Education Section Logo's
import pesLogo from './assets/education_logo/pes.webp';
import mastersLogo from './assets/education_logo/masters.png';
import hpsLogo from './assets/education_logo/hps.png';

// Project Section Logo's
import neuromailLogo from './assets/work_logo/neuromail.png';
import sceneLogo from './assets/work_logo/scene.png';
import psycheLogo from './assets/work_logo/psyche.png';
import capstoneLogo from './assets/work_logo/capstone.png';


export const SkillsInfo = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    skills: [
      { name: 'Deep Learning',logo: mlLogo },
      { name: 'YOLOv8', logo:yoloLogo },
      { name: 'Lang   Chain',logo:langchainLogo },
      { name: 'PyTorch',logo:pytorchLogo},
      { name: 'Tensor Flow', logo:tensorflowLogo },
      { name: 'Groq',logo:groqLogo },
      { name: 'GenAI SDK',logo:googleLogo},
    ],
  },
  {
    title: 'Libraries & Frameworks',
    skills: [
      { name: 'PyTorch', logo: pytorchLogo},
      { name: 'Tensor Flow', logo: tensorflowLogo },
      { name: 'Pandas', logo: pandasLogo },
      { name: 'Scikit Learn', logo: scikitLogo },
      { name: 'MatPlot Lib', logo: matplotlibLogo },
      { name: 'Seaborn', logo: seabornLogo },
      { name: 'OpenCV', logo: opencvLogo },
    ],
  },
  {
    title: 'Fullstack & Databases',
    skills: [
      { name: 'Spring', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'HTML', logo:htmlLogo},
      { name: 'CSS', logo:cssLogo},
      { name: 'React JS', logo:reactjsLogo},
      { name: 'Java Script', logo:javascriptLogo},
      { name: 'Mongo DB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },

    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C', logo: cLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Java Script', logo: javascriptLogo },
      { name: 'GO Lang', logo:golangLogo},
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Docker', logo:dockerLogo},
      { name: 'Colab', logo:colabLogo},
      { name: 'Kaggle', logo: kaggleLogo},
      { name: 'Hugging Face',logo:huggingfaceLogo},
      { name: 'Roboflow', logo: roboflowLogo},
      { name: 'Kiro', logo:kiroLogo},
      { name: 'Trae', logo: traeaiLogo},
      { name: 'Vercel', logo: vercelLogo },
      { name: 'FL Studio', logo: flstudioLogo},
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: jarLogo,
      role: "Upcoming Data Analyst Intern",
      company: "Jar Company",
      date: "Jan 2026 - Present",
      desc: "HEHE to be updated",
      skills: [
        "MongoDB",
        "Pandas",
        "Python",
        "MySQL",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: pesLogo,
      school: "PES University, Bengaluru, Karnataka",
      date: "Nov 2022 - Present",
      grade: "8.35 CGPA",
      desc: "I am currently pursuing my Bachelor of Technology in Computer Science and Engineering at PES University. During my academic journey, I have developed a strong foundation in core computer science subjects such as Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Software Engineering. Alongside coursework, I have worked on multiple technical projects involving artificial intelligence, data analytics, backend systems, and structured databases, which strengthened my practical understanding of real-world problem solving. I have also actively participated in technical activities and project-based learning, contributing significantly to my technical growth and professional development.",
      degree: "B.Tech - Computer Science & Engineering (CSE)",
    },
    {
      id: 1,
      img: mastersLogo,
      school: "Masters PU College, Hassan, Karnataka",
      date: "June 2020 - July 2022",
      grade: "97.5%",
      desc: "I completed my class 12 education from Masters PU College, Hassan, under the Department Of Pre-University Education, Karnataka, where I studied Physics, Chemistry, Mathematics and Biology (PCMB).",
      degree: "Pre-University College (PCMB)",
    },
    {
      id: 2,
      img: hpsLogo,
      school: "Hassan Public School, Hassan, Karnataka",
      date: "June 2019 - March 2020",
      grade: "93.4%",
      desc: "I completed my class 10 education from Hassan Public School, Hassan, under the CBSE board, where I studied Science, Computers, Social Studies and regional languanges.",
      degree: "Class X (CBSE Board)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "NEUROMAIL - AI Smart Email Assistant",
      description:
        "An AI-Enhanced Email Assistant is an intelligent, user-friendly application designed to simplify and optimize email management. Built using React.js and Spring Boot, the system seamlessly integrates AI capabilities to automatically summarize emails, categorize messages, and generate smart reply suggestions. NeuroMail intelligently fetches and processes email data to provide actionable insights, helping users save time and improve productivity. The backend architecture is designed with scalability and maintainability in mind, leveraging SOLID principles along with Strategy and Factory design patterns to enable modular AI services. With a clean interface and robust full-stack integration using MongoDB, NeuroMail delivers a smooth and efficient email experience.",
      image: neuromailLogo,
      tags: ["Spring Boot", "React JS", "MongoDB", "Deepseek R1", "API", "SOLID Principles"],
      github: "https://github.com/Smart-Email-Assistant-OOAD/email-app",
    },
    {
      id: 1,
      title: "PSYCHEPLOT - Personality Detection using AI",
      description:
        "An interactive, AI-driven application designed to infer user personality traits through adaptive storytelling. Built using Python and Streamlit, the system presents dynamic narrative scenarios where user choices directly influence the storyline. These interactions are analyzed in real time using AI models integrated via Groq and Hugging Face to assess personality traits based on the OCEAN (Big Five) framework. The model is trained on OCEAN-aligned behavioral patterns and achieved 81% accuracy in initial evaluations. By combining natural language understanding with interactive design, PSYCHEPLOT offers an engaging and data-driven approach to personality assessment.",
      image: psycheLogo,
      tags: ["Python", "Streamlit", "Groq", "Huggingface"],
      github: "https://github.com/Kousthubh142/PsychePlot",
      webapp: "https://huggingface.co/spaces/kousthubh/PSYCHEPLOT",
    },
    {
      id: 2,
      title: "SCENESCRIBE - For Visually Impaired",
      description:
        "An accessibility-focused application designed to enhance environmental understanding through intelligent audio narration. Built using Python, the system leverages AI models via Groq to generate clear, context-aware descriptions of visual scenes in real time. SCENESCRIBE supports 6+ regional languages, enabling inclusive communication across diverse user groups. With integrated real-time voice interaction, users can actively engage with the system, ask contextual queries, and receive immediate audio feedback, significantly improving task comprehension and independent navigation.",
      image: sceneLogo,
      tags: ["Python", "Groq", "GTTS", "Speech Recognition"],
      github: "https://github.com/Kousthubh142/TDL_Project",
    },
    {
      id: 2,
      title: "Research on Deep Learning based estimation of AFI in Foetus",
      description:
        "A medical imaging-focused capstone project aimed at improving prenatal healthcare through intelligent automation. The project explores the use of deep learning techniques to accurately estimate the Amniotic Fluid Index from fetal ultrasound images, a critical parameter for assessing fetal well‑being. By leveraging advanced segmentation models and machine‑learning–based classification, the system enables automated detection of amniotic fluid regions, precise AFI computation, and objective categorization of fetal conditions. Designed with real‑time applicability in mind, the proposed approach reduces reliance on manual measurements, minimizes operator-dependent variability, and supports faster, consistent, and clinically interpretable decision-making, thereby enhancing the efficiency and reliability of fetal health assessment.",
      image: capstoneLogo,
      tags: ["Python", "Groq", "GTTS", "Speech Recognition"],
      github: "https://github.com/Kousthubh142/TDL_Project",
    },
    
  ];  