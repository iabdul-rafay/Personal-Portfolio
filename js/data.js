/* ============================================================
   PORTFOLIO DATA — Abdul Rafay
   All projects sourced from CV + GitHub (no placeholders)
   ============================================================ */

const SOCIALS=[
  {name:"GitHub",url:"https://github.com/iabdul-rafay",svg:'<path d="M12 .5A11.5 11.5 0 008.4 22.9c.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.8 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.4 11.4 0 016 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.5-2.7 5.5-5.3 5.8.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A11.5 11.5 0 0012 .5z"/>',f:1},
  {name:"LinkedIn",url:"https://www.linkedin.com/in/abdul-rafay-76b165320",svg:'<path d="M4.98 3.5A2.5 2.5 0 002.5 6a2.5 2.5 0 105 0 2.5 2.5 0 00-2.52-2.5zM3 9h4v12H3zM10 9h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/>',f:1},
  {name:"X / Twitter",url:"https://x.com/iabdul_rafay",svg:'<path d="M18 2h3l-7.5 8.6L22 22h-6.8l-4.8-6.3L4.8 22H2l8-9.2L2 2h6.9l4.3 5.7L18 2zm-1.2 18h1.9L7.3 4h-2L16.8 20z"/>',f:1},
  {name:"Instagram",url:"https://www.instagram.com/iabdul.rafay7/",svg:'<rect x="2.5" y="2.5" width="19" height="19" rx="5.5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.3" cy="6.7" r="1.3"/>',f:0},
  {name:"Facebook",url:"https://www.facebook.com/a.r.407551",svg:'<path d="M14 9h3V5.5h-3c-2.2 0-3.5 1.5-3.5 3.7V11H8v3.5h2.5V22H14v-7.5h2.6l.4-3.5H14V9.4c0-.3.2-.4.7-.4z"/>',f:1},
  {name:"Email",url:"mailto:iamrafay64@gmail.com",svg:'<rect x="3" y="5" width="18" height="14" rx="2" fill="none" stroke="currentColor" stroke-width="2"/><path d="M3 7l9 6 9-6" fill="none" stroke="currentColor" stroke-width="2"/>',f:0}
];

const TYPED=["Software Engineer","AI & ML Developer","Full Stack Developer","Android Developer"];

/* SKILL CARDS — categories from brief, content from real CV stack */
const SKILL_CARDS=[
  {title:"Frontend Development",icon:"\u{1F3A8}",pct:90,tags:["React","React Native","Next.js","TailwindCSS","HTML5","CSS3","TypeScript"]},
  {title:"Backend Development",icon:"\u2699\uFE0F",pct:78,tags:["Node.js","Express.js","PHP","REST APIs","Firebase"]},
  {title:"Mobile Development",icon:"\u{1F4F1}",pct:75,tags:["React Native","Android","Java","Mobile UI"]},
  {title:"Artificial Intelligence",icon:"\u{1F9E0}",pct:82,tags:["Agentic AI","OpenAI","Claude","Gemini","Prompt Engineering"]},
  {title:"Machine Learning",icon:"\u{1F916}",pct:80,tags:["Python","Scikit-learn","NLP","LSTM","Sentiment Analysis"]},
  {title:"Databases",icon:"\u{1F5C4}\uFE0F",pct:76,tags:["Firebase","MySQL","MongoDB","PostgreSQL","SQL"]},
  {title:"UI / UX",icon:"\u{1F3A8}",pct:84,tags:["Responsive Design","Glassmorphism","Animations","Figma"]},
  {title:"DevOps & Tools",icon:"\u{1F527}",pct:72,tags:["Git","GitHub","Docker","Vercel","Netlify","Linux"]}
];

/* PROJECTS — only real ones from CV + GitHub */
const PROJECTS=[
  {title:"Smart HomeChef",desc:"AI-powered smart cooking system that suggests recipes from your ingredients via OpenAI, manages grocery lists, and integrates with IoT-aware kitchen workflows.",year:"2025",icon:"\u{1F373}",cat:"AI",tags:["Python","OpenAI","IoT","ML"],repo:"https://github.com/iabdul-rafay/Smart-HomeChef",live:""},
  {title:"MovieSent — Sentiment Analysis",desc:"Built a dual-approach machine learning sentiment analysis application comparing Logistic Regression against an LSTM model for movie review classification.",year:"2025",icon:"\u{1F3AC}",cat:"AI",tags:["Python","NLP","LSTM","Scikit-learn"],repo:"https://github.com/iabdul-rafay/MovieSent-Sentiment-Analysis",live:""},
  {title:"3D Portfolio Website",desc:"Interactive 3D personal portfolio built with React, Three.js and GSAP — immersive scroll-driven scenes with modern UI/UX.",year:"2026",icon:"\u{1F310}",cat:"Web",tags:["React","Three.js","GSAP","TypeScript"],repo:"https://github.com/iabdul-rafay/My-Portfolio",live:"https://my-portfolio-eight-ashy-98.vercel.app/"},
  {title:"AI Tax Portal",desc:"Hackathon project that uses AI to detect tax-relevant information and automatically fetch and structure underlying tax data. Built at 2026 CUST Hackathon.",year:"2026",icon:"\u{1F9FE}",cat:"AI",tags:["TypeScript","AI","Web","REST API"],repo:"https://github.com/iabdul-rafay/my-ai-tax-portal",live:""},
  {title:"NFT Marketplace — TB Company",desc:"Blockchain-based NFT marketplace where users can browse, search, bid on, and mint their own NFTs. Built as a semester project exploring Web3.",year:"2026",icon:"\u{1FA99}",cat:"Blockchain",tags:["JavaScript","Web3","Blockchain","Solidity"],repo:"https://github.com/iabdul-rafay/nft-marketplace-blockchain",live:""},
  {title:"Bio-Scout Pakistan",desc:"AI website that identifies and provides information about different species — built at the 2024 CUST Hackathon to make biodiversity knowledge more accessible.",year:"2024",icon:"\u{1F98B}",cat:"AI",tags:["AI","Web","Image Recognition"],repo:"",live:""},
  {title:"myVISTA — Smart Home (FYP)",desc:"Final-year project: collaborative software development, UI implementation and testing. IoT + mobile home automation using voice commands, hand gestures and real-time database.",year:"2025—Present",icon:"\u{1F3E0}",cat:"IoT",tags:["IoT","Mobile","Firebase","Voice"],repo:"",live:"",status:"In progress"},
  {title:"Personal Portfolio Website",desc:"Designed and developed a responsive portfolio website with modern UI/UX — showcasing skills, projects and experience.",year:"2025",icon:"\u{1F4BB}",cat:"Web",tags:["HTML","CSS","JavaScript","Responsive"],repo:"",live:""}
];

const CERTS=[
  {t:"Participation \u2014 Hackathon CUST",y:"2024"},
  {t:"Internship Certificate",y:"2025"},
  {t:"Participation \u2014 Hackathon CUST",y:"2026"},
  {t:"Social Media Manager \u2014 CUST Sports Week",y:"2024"},
  {t:"Media Member \u2014 Cause Society, SE Dept",y:"2025"},
  {t:"Photographer \u2014 Al-Fanoon Gala, IEEE",y:"2025"}
];

const DEFAULT_POSTS=[
  {id:"p1",title:"Building Smart HomeChef: pantry items to recipes with AI",date:"2025-08-12",tag:"AI Projects",likes:34,body:"When I started Smart HomeChef, the idea was simple: my fridge is half-empty, and I wanted AI to tell me what to cook.\n\nThe user lists ingredients, and an OpenAI-backed assistant proposes realistic recipes ranked by how few extras they need.\n\n#What I learned\nThe hardest part wasn\u2019t the model \u2014 it was data discipline. Free-form LLM recipes are beautiful prose and unparseable chaos. Forcing JSON responses and validating before the UI fixed it.\n\n#Where it\u2019s going\nNext: real IoT signals (smart scale, fridge sensors) so the pantry updates itself."},
  {id:"p2",title:"Agentic AI for beginners: from chatbots to agents that act",date:"2026-01-20",tag:"Agentic AI",likes:52,body:"Everyone has used a chatbot. Few have built something that decides what to do next on its own.\n\n#The mental model\nA chatbot is a function: text in, text out. An agent wraps a model in a loop: observe, plan, act, check.\n\n#Three things that clicked\n- Tools are functions with descriptions. The model picks one; your code runs it.\n- Memory matters. Without state, an agent forgets why it started.\n- Guardrails aren\u2019t optional. An agent that can act can act wrongly.\n\nStart with one agent, one tool, one goal."},
  {id:"p3",title:"Sentiment analysis two ways: Logistic Regression vs LSTM",date:"2025-06-30",tag:"Machine Learning",likes:41,body:"For MovieSent I built the same thing twice \u2014 classic ML and deep learning.\n\n#Classic: Logistic Regression\nTF-IDF + LR trains in seconds, is interpretable, and works for most problems.\n\n#Deep: LSTM\nLearns word order. Cost: more data, slower training, less transparency.\n\n#Takeaway\nLR delivered 90% of the value for 5% of the effort."},
  {id:"p4",title:"Inside myVISTA: automating a home with voice and gestures",date:"2026-02-15",tag:"IoT",likes:29,body:"myVISTA is my final-year project. Control a home through voice, gestures, and a real-time database.\n\n#Architecture\nMobile app \u2192 intents \u2192 real-time DB \u2192 hardware acts.\n\n#Lessons\n- Latency IS the UX. A light one second late feels broken.\n- Gesture recognition needs forgiving thresholds.\n- Design for sync conflicts early."},
  {id:"p5",title:"What two CUST hackathons taught me about building fast",date:"2026-03-02",tag:"Career",likes:38,body:"Bio-Scout (2024) and AI Tax Portal (2026) were built under hackathon pressure.\n\n#Scope is the real skill\nBuild one thing that works and demos well.\n\n#Boring tech wins under pressure\nReach for what you\u2019re fast in.\n\n#The demo is the product\nNobody sees your backend. They see 90 seconds on screen."},
  {id:"p6",title:"Why I rebuilt my portfolio in Three.js",date:"2026-04-10",tag:"Web Dev",likes:46,body:"My first portfolio was clean and static. It looked like everyone else\u2019s.\n\n#The bet\nReact + Three.js + GSAP. A portfolio is itself a project; the medium is the message.\n\n#What I\u2019d watch\n3D is a performance budget you spend immediately. Restraint makes it professional."}
];
