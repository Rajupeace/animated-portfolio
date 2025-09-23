import {
  Award,
  BookOpen,
  Briefcase,
  Camera,
  Code,
  Globe,
  GraduationCap,
  Heart,
  Instagram,
  Layout,
  Mountain,
  Dumbbell,
  Utensils,
  X,
} from "lucide-react"

export const skills = [
  "React",
  "Node.js",
  "Python",
  "UI/UX Design",
  "DSA",
  "Java",
]

export const experiences = [
  {
    title: "B.Tech Computer Science Engineering Student",
    company: "Vignan's Foundation for Science, Technology and Research",
    period: "2025 - Present",
    description:
      "Currently pursuing my B.Tech in CSE. Actively involved in coding, web development projects, and technical clubs. Building a strong foundation in software engineering, DSA, and teamwork.",
  },
  {
    title: "NCC Cadet",
    company: "National Cadet Corps",
    period: "2023 - 2024",
    description:
      "Served as an NCC cadet for 2 years, developing discipline, leadership, and teamwork skills through various camps and activities.",
  },
  {
    title: "Personal & Academic Projects",
    company: "Self-driven",
    period: "2022 - Present",
    description:
      "Worked on multiple academic and personal projects using React, Node.js, Python, and Java. Focused on building web applications and strengthening problem-solving skills.",
  },
]

export const projects = [
  {
    title: "Task Management App",
    description: "Collaborative project management tool with real-time updates, file sharing, and team communication.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: "/Task Management App.png",
    code: "https://github.com/yourusername/task-manager",
    demo: "https://taskmanager-demo.yourdomain.com",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/E-Commerce Platform.png",
    code: "https://github.com/yourusername/ecommerce-platform",
    demo: "https://ecommerce-demo.yourdomain.com",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization dashboard for business metrics with interactive charts and real-time data updates.",
    tech: ["React", "D3.js", "Python", "FastAPI"],
    image: "/Analytics Dashboard.png",
    code: "https://github.com/yourusername/analytics-dashboard",
    demo: "https://analytics-demo.yourdomain.com",
  },
]

export const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO at TechInnovate",
    content:
      "Srikanth is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are outstanding.",
    avatar: "/Sarah Johnson.png",
    linkedin: "https://www.linkedin.com/in/sarah-johnson-dixon-ph-d-b43a9712b/",
  },
  {
    name: "Michael Chen",
    position: "Product Manager at DesignHub",
    content:
      "Working with Srikanth was a pleasure. He transformed our ideas into reality with impressive technical expertise and creativity.",
    avatar: "/Michael Chen1.png",
    linkedin: "https://www.linkedin.com/in/michael-chen-5a60286/",
  },
  {
    name: "Emily Rodriguez",
    position: "Lead Developer at WebSolutions",
    content:
      "Srikanth's code is clean, well-documented, and highly maintainable. He's a valuable asset to any development team.",
    avatar: "/Emily Rodriguez.png",
    linkedin: "https://www.linkedin.com/in/emily-rodriguez-20b691244/",
  },
]

export const education = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Vignan's Foundation for Science, Technology and Research, Guntur",
    period: "2023 - 2027",
    description: "Currently pursuing my B.Tech in CSE. Actively involved in coding, web development projects, and technical clubs.",
    marks: "7.0 CGPA (Present)"
  },
  {
    degree: "Intermediate (MPC)",
    institution: "1st Year: Vignan Junior College, Hyderabad | 2nd Year: Sri Chaitanya, Khammam",
    period: "2021 - 2023",
    description: "Completed intermediate education with focus on Mathematics, Physics, and Chemistry.",
    marks: "810/1000"
  },
  {
    degree: "Schooling (SSC)",
    institution: "St. Franics English Medium High School, Madhira",
    period: "2015 - 2020",
    description: "Completed secondary education with strong academic performance.",
    marks: "10/10 GPA"
  },
]

export const certifications = [
  {
    title: "Python for Beginners",
    issuer: "simplilearn",
    date: "2025",
    icon: Award,
  },
  {
    title: "Data Structures & Algorithms (DSA) Basics",
    issuer: "simplilearn",
    date: "2025",
    icon: Code,
  },
  {
    title: "UI/UX Fundamentals",
    issuer: "simplilearn",
    date: "2025",
    icon: Layout,
  },
]

export const articles = [
  {
    title: "The Future of Web Development with AI Integration",
    excerpt: "Exploring how artificial intelligence is transforming the landscape of modern web development...",
    date: "May 15, 2024",
    readTime: "8 min read",
    image: "/The Future of Web Development with AI Integration.png",
    url: "https://youtu.be/_2g0Upj_2YE?si=xRh3dDz-SD-wPaZ8",
  },
  {
    title: "Optimizing React Applications for Performance",
    excerpt: "Best practices and techniques to ensure your React applications run smoothly and efficiently...",
    date: "April 3, 2024",
    readTime: "6 min read",
    image: "/Optimizing React Applications for Performance.png",
    url: "https://youtu.be/LVDs8nhL3WI?si=xjW06RNrp0OtpEs8",
  },
  {
    title: "Building Accessible Web Applications",
    excerpt: "A comprehensive guide to creating inclusive web experiences for users of all abilities...",
    date: "March 12, 2024",
    readTime: "10 min read",
    image: "/Building Accessible Web Applications.png",
    url: "https://youtu.be/NMb4RDpbRXs",
  },
]

export const languages = [
  { name: "Telugu", proficiency: 95, level: "Very Good" },
  { name: "English", proficiency: 80, level: "Good" },
  { name: "Hindi", proficiency: 60, level: "Basic" },
  { name: "Tamil", proficiency: 40, level: "Basic" },
]

export const interests = [
  { name: "Photography", icon: Camera },
  { name: "Hiking", icon: Mountain },
  { name: "Badminton", icon: Dumbbell },
  { name: "Reading", icon: BookOpen },
  { name: "Cooking", icon: Utensils },
  { name: "Travel", icon: Globe },
]

export const achievements = [
  { value: 100, label: "LeetCode Problems" },
  { value: 100, label: "HackerRank Problems" },
  { value: 5, label: "Internships" },
]

export const myPics = [
  {
    src: "/profile pic.jpg",
    alt: "Profile Picture",
    title: "Profile"
  },
  {
    src: "/pic1.JPG",
    alt: "Picture 1",
    title: "Pic 1"
  },
  {
    src: "/pic2.JPG",
    alt: "Picture 2",
    title: "Pic 2"
  },
  {
    src: "/pic3.JPG",
    alt: "Picture 3",
    title: "Pic 3"
  }
]
