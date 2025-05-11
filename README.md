# 🚀 Ultimate Portfolio Builder

> A stunning and customizable developer portfolio built with React.js – ready to deploy and impress!

[![GitHub stars](https://img.shields.io/github/stars/demo/portfolio-builder?style=social)](https://github.com/demo/portfolio-builder/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/demo/portfolio-builder?style=social)](https://github.com/demo/portfolio-builder/network/members)
[![GitHub license](https://img.shields.io/github/license/demo/portfolio-builder)](https://github.com/demo/portfolio-builder/blob/main/LICENSE)

---

## 📸 Live Demo

👉 [Click to View Demo](https://ransherraj.netlify.app)

---

## ✨ Features

- 💼 Personal Info, Skills, Projects, Experience, Contact
- 🖥 Fully Responsive & Mobile Friendly
- ⚡ Fast, Static, and Smooth
- 🛠 Easy Config — One File to Rule Them All
- 🧠 SEO & Employer Friendly
- 🔗 Socials, Resume, and Live Project Links Supported

---

## 🚀 Quick Start (Copy-Paste All 🔥)


# Clone the repo
git clone https://github.com/ransherraj/Easy-Portfolio-Builder.git
cd Easy-Portfolio-Builder

# Install dependencies
npm install
# or
yarn install

# Start dev server
npm start
# or
yarn start


Now open [http://localhost:3000](http://localhost:3000) to see your stunning portfolio.

---

## 🧩 Customize Your Info

Just edit the `src/content_options.js` file and done

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

---

## 🌐 Deploy in 60 Seconds

### ▶ GitHub Pages

\`\`\`bash
# Add homepage in package.json
"homepage": "https://yourusername.github.io/portfolio-builder"

# Build & Deploy
npm run build
npm install --save gh-pages
npm run deploy
\`\`\`

### ▶ Netlify (🔥 Fastest)

- Login to [Netlify](https://netlify.com)
- Drag your \`/build\` folder to the dashboard
- Done 🎉

### ▶ Vercel

\`\`\`bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
\`\`\`

---

## 📁 Folder Structure

\`\`\`
portfolio-builder/
├── public/
├── src/
│   ├── components/
│   ├── config/  ← YOU edit here
│   ├── App.js
├── portfolio.config.js ← Main config file
├── package.json
\`\`\`

---

## 💼 Ideal For

- Job Hunters 👨‍💼
- Freshers 👩‍🎓
- Hackathon Devs 👨‍💻
- Freelancers 💰
- College Projects 📚
- Resume Companion Sites 📄

---

## 🙌 Contribute & Improve

\`\`\`bash
# Fork → Code → Pull Request

git checkout -b feature/your-awesome-feature
git commit -m "Added new section to portfolio"
git push origin feature/your-awesome-feature
\`\`\`

---

## 🔒 License

MIT License © 2025 [Your Name](https://github.com/yourusername)

---

## 📣 Final Words

> If you love it, give it a ⭐  
> If you use it, tag me 🙌  
> If you improve it, contribute 🤝  

Let's build portfolios that **wow employers and win opportunities**.
