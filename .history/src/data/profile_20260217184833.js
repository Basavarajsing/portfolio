export const profile = {
  name: "Basavarajsing",
  headline:
    "I am Basavarajsing Bapparagi, a Software Developer passionate about building impactful applications. With a strong foundation in the MERN stack and machine learning, I enjoy creating practical, user-focused solutions. Coming from an agricultural family, I value hard work, simplicity, and real-world problem solving. As an ambivert with a continuous learning mindset, I actively engage in competitive programming to strengthen my algorithmic thinking and grow as a developer.",
  email: "basavarajsing.1si23is010@gmail.com",
  phone: "+91 9148938836",
  photoUrl: "/profile.jpg",

  education: {
    college: "Siddaganga Institute of Technology, Tumkur",
    degree: "B.E. — Information Science & Engineering (3rd Year, Ongoing)",
    cgpa: "9.02"
  },

  location: {
    current: "Tumkur, Karnataka, India",
    native: "Tavaragere, Koppal, Karnataka",
    nativeWiki: "https://en.wikipedia.org/wiki/Tavaragera"
  },

  // Optional resume button (place file in /public and set enabled=true)
  resume: {
    enabled: true,
    url: "/Basavarajsing_SIT_2026_Resume.pdf"
  },

  links: [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/basavarajsing/" },
    { label: "GitHub", url: "https://github.com/Basavarajsing" },
    { label: "LeetCode", url: "https://leetcode.com/u/BASAVARAJSING/" },
    { label: "CodeChef", url: "https://www.codechef.com/users/sit1si23is010" },
    { label: "YouTube", url: "https://www.youtube.com/@Karunaduvibes" },
    { label: "Instagram", url: "https://www.instagram.com/basavarajsing_rajputh/" }
  ],

  skills: {
    languages: ["C", "C++", "Python"],
    web: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express.js"],
    databases: ["SQL", "MongoDB"],
    core: ["React", "Node.js", "Express.js", "MongoDB", "SQL"],
    ml: ["OpenCV", "TensorFlow", "Pandas"]
  },

  experience: {
    title: "MERN Stack Developer Intern",
    company: "Webstack Academy",
    duration: "2 months",
    summary:
      "Built HomelyHub, a room/lodge booking platform. Worked across UI, APIs, and data flows to deliver a smooth search → compare → booking experience.",
    bullets: [
      "Developed responsive UI screens and reusable React components for core booking flows.",
      "Integrated backend APIs (Node/Express) and data storage to support listings, availability, and user actions.",
      "Improved usability with clean layouts, form validation, and predictable state handling.",
      "Collaborated on feature delivery and iterative fixes based on testing feedback."
    ]
  },

  projects: [
    {
      name: "MultiMode — Human Emotion Detection (Demo)",
      tagline:
        "Multimodal emotion detection demo (face + audio) with dynamic switching UI.",
      impact: [
        "Designed a clear demo flow that switches between visual/audio inputs based on input quality.",
        "Built a confidence-style results panel to communicate predictions and model reasoning intuitively.",
        "Focused on fast load, responsive UI, and clean component structure for presentation-ready delivery."
      ],
      tech: ["React", "JavaScript", "UI/UX"],
      links: [
        { label: "GitHub", url: "https://github.com/Basavarajsing/emotion-detection" },
        { label: "Live demo", url: "https://multimode2025.vercel.app/" }
      ]
    },
    {
      name: "Expense Tracker & Analyzer",
      tagline: "Expense tracking + analytics dashboard with clean UX and persistence.",
      impact: [
        "Implemented add/search/filter flows and a simple analytics view to understand spending patterns.",
        "Persisted user data locally for a smooth returning-user experience (no login required).",
        "Designed a straightforward UI to reduce manual tracking effort and make entries quick."
      ],
      tech: ["React", "Vite", "JavaScript"],
      links: [
        { label: "GitHub", url: "https://github.com/Basavarajsing/Expense_Tracker" },
        { label: "Live demo", url: "https://bbbtextr.vercel.app/" }
      ]
    },
    {
      name: "MediAssist — Medicine Assist Companion",
      tagline: "Dataset-driven symptom → medicine suggestion (learning project).",
      impact: [
        "Performed data preprocessing and feature mapping on structured medical datasets.",
        "Explored supervised ML workflows with attention to safer, conservative suggestions."
      ],
      tech: ["Python", "Pandas", "Machine Learning"],
      links: [{ label: "No public link", url: "#" }],
      isPrivate: true
    }
  ],

  achievements: [
    {
      title: "CodeChef — Diamond Badge (Problem Solver)",
      detail: "Earned for solving 1000+ problems (profile).",
      link: "https://www.codechef.com/users/sit1si23is010"
    },
    { title: "LeetCode", detail: "180+ DSA/SQL problems solved." },
    { title: "Pitchathon (GeeksforGeeks)", detail: "2nd prize — idea + execution." },
    { title: "Akshaya Anveshana Hackathon", detail: "4th place — team build under time." },
    { title: "SBI Youth Ideathon", detail: "Top 100 — shortlisted among participants." },
    { title: "Build With India Hackathon", detail: "Top 1000 performers." }
  ]
};

