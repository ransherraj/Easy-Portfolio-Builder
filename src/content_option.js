const logotext = "John Doe";

const meta = {
    title: "John Doe",
    description: "I’m John Doe, a full-stack developer.",
};

const introdata = {
    title: "I’m John Doe",
    animated: {
        first: "I love coding...",
        second: "I build full-stack apps...",
        third: "I solve tech problems...",
    },
    description: "Software Engineer with experience in building responsive and performant applications using modern tech stacks.",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d", // Placeholder image
};

const dataabout = {
    title: "About Me",
    aboutme: "I am a software developer passionate about creating clean, scalable, and user-friendly digital solutions.",
};

const worktimeline = [
    {
        jobtitle: "Software Developer",
        where: "Tech Company",
        date: "2022 – Present",
        achievement: "Contributed to various web and mobile projects.",
    },
];

const skills = [
    { name: "JavaScript", value: 90 },
    { name: "React.js", value: 85 },
    { name: "Node.js", value: 80 },
    { name: "TypeScript", value: 80 },
    { name: "Spring Boot", value: 75 },
    { name: "AWS", value: 70 },
    { name: "SQL / NoSQL", value: 80 },
    { name: "HTML/CSS", value: 85 },
];

const services = [
    {
        title: "Web Development",
        description: "Building responsive and modern web applications.",
    },
    {
        title: "API Integration",
        description: "Creating and consuming RESTful services.",
    },
    {
        title: "Cloud Deployment",
        description: "Deploying scalable solutions to the cloud.",
    },
];

const dataportfolio = [
    {
        img: "https://picsum.photos/400/300",
        description: "Project One – A demo application.",
        details: "A sample project showcasing frontend/backend integration.",
        link: "#",
        demo: "#"
    },
    {
        img: "https://picsum.photos/400/300?2",
        description: "Project Two – Another demo app.",
        details: "Illustrates clean UI/UX with basic functionality.",
        link: "#",
        demo: "#"
    }
];

const contactConfig = {
    YOUR_EMAIL: "demo@example.com",
    YOUR_FONE: "1234567890",
    description: "Feel free to get in touch for collaboration or freelance work!",
    YOUR_SERVICE_ID: "demo_service_id",
    YOUR_TEMPLATE_ID: "demo_template_id",
    YOUR_USER_ID: "demo_user_id",
};

const socialprofils = {
    github: "https://github.com/demo",
    linkedin: "https://linkedin.com/in/demo",
    instagram: "https://instagram.com/demo",
    twitter: "https://twitter.com/demo",
};

export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};

// Optional additional data section (also anonymized)
const resumeData = {
    education: [
        {
            degree: "Bachelor's Degree in Computer Science",
            institution: "Demo University",
            year: "2016 - 2020",
            grade: "8.5 CGPA",
        }
    ],
    achievements: [
        "Completed full-stack capstone projects.",
        "Contributed to open-source tools.",
        "Developed demo applications for learning.",
    ],
    certifications: [
        "Full Stack Web Development – Demo Course",
        "Cloud Fundamentals – Demo Certification",
    ],
    resumeLink: "https://example.com/resume.pdf",
};

export { resumeData };

const githubConfig = {
    username: "demo",
    profileUrl: "https://github.com/demo"
};

export { githubConfig };

const codingProfiles = {
    leetcodeUsername: "demoUser",
    codeforcesHandle: "demoHandle"
};

export { codingProfiles };
