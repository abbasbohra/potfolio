import React, { useEffect, useState } from "react";
import { SiJavascript, SiRedux, SiFirebase, SiTypescript } from "react-icons/si";
import { ReactComponent as DeveloperIllustration } from "./images/undraw_undraw_analytics_mobile_drjl_-1-_5133.svg";
import { FaArrowDown, FaArrowUpRightFromSquare, FaGithub, FaLinkedinIn, FaReact, FaCode, FaMobileScreenButton, FaDatabase, FaEnvelope, FaChartSimple, FaBell, FaLink, FaGlobe, FaRobot, FaCloud, FaScrewdriverWrench, FaPlus } from "react-icons/fa6";
import "./App.css";

const projects = [
  { number: "01", title: "BON Hotel Booking", type: "React Native · Booking Platform", description: "A hotel-booking app for customers and agents, with multi-room bookings, flexible dates, and real-time updates via Socket.io.", icon: <FaMobileScreenButton /> },
  { number: "02", title: "Royal Motors", type: "React Native · Sales Tracking", description: "A sales-team app for recording daily activity, reviewing history, and generating reports, with real-time Firebase sync and offline support.", icon: <FaCode /> },
  { number: "03", title: "Jain Supplier", type: "React Native · Delivery Management", description: "A delivery app for fruit and vegetable orders, with order tracking, scheduling, status updates, and dependable low-connectivity performance.", icon: <FaDatabase /> },
  { number: "04", title: "E-Commerce App", type: "React Native · Retail", description: "A complete shopping app featuring product search, category filters, detailed product information, and Firebase-backed experiences.", icon: <FaMobileScreenButton /> },
  { number: "05", title: "Sanatan App", type: "React Native · Spiritual Content", description: "A personalized spiritual-content app with browsing, category filters, recommendations, and responsive navigation.", icon: <FaCode /> },
  { number: "06", title: "Healwe App", type: "React Native · Healthcare & Pharmacy", description: "A medical and pharmacy application with product search, category filters, and detailed product information.", icon: <FaDatabase /> },
];
const services = [
  {
    number: "01",
    title: "Mobile Application Development",
    icon: <FaMobileScreenButton />,
    items: [
      "React Native applications for Android & iOS",
      "Clean, responsive and scalable UI",
      "API integration, authentication & notifications",
      "Performance optimization and app deployment",
    ],
  },
  {
    number: "02",
    title: "Website Development",
    icon: <FaGlobe />,
    items: [
      "Modern and responsive websites",
      "Business & service websites",
      "API-driven web applications",
      "User-friendly and scalable solutions",
    ],
  },
  {
    number: "03",
    title: "AI & Automation",
    icon: <FaRobot />,
    items: [
      "AI-powered application features",
      "Intelligent automation",
      "AI integrations with existing applications",
      "Exploring new ways to use AI to improve productivity and user experience",
    ],
  },
  {
    number: "04",
    title: "Backend & API Integration",
    icon: <FaCloud />,
    items: [
      "REST API integration",
      "Authentication & secure data handling",
      "Firebase and cloud services",
      "Third-party service integrations",
    ],
  },
  {
    number: "05",
    title: "App Deployment & Maintenance",
    icon: <FaScrewdriverWrench />,
    items: [
      "Google Play Store & Apple App Store deployment",
      "Bug fixing and performance improvements",
      "Continuous updates and maintenance",
    ],
  },
];
const skills = [
  { label: "React Native", icon: <FaReact /> }, { label: "React", icon: <FaReact /> }, { label: "JavaScript", icon: <SiJavascript /> }, { label: "TypeScript", icon: <SiTypescript /> },
  { label: "Redux", icon: <SiRedux /> }, { label: "Firebase", icon: <SiFirebase /> }, { label: "API Integration", icon: <FaLink /> }, { label: "React Query", icon: <FaCode /> },
  { label: "React Hooks", icon: <FaReact /> }, { label: "Microsoft Clarity", icon: <FaChartSimple /> }, { label: "Mixpanel", icon: <FaChartSimple /> }, { label: "Analytics", icon: <FaChartSimple /> },
  { label: "Push Notifications", icon: <FaBell /> }, { label: "Crashlytics", icon: <FaCode /> }, { label: "Deep Linking", icon: <FaLink /> },
];

function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("idle");
  const [openService, setOpenService] = useState("01");

  useEffect(() => {
    const sections = document.querySelectorAll(".section-wrap");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const submitContact = async (event) => {
    event.preventDefault();
    setFormStatus("sending");
    try {
      const apiBaseUrl = process.env.REACT_APP_API_URL || "";
      const response =

        await fetch(`${apiBaseUrl}/.netlify/functions/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });
      if (!response.ok) throw new Error("Unable to send message");
      setForm({ name: "", email: "", message: "" });
      setFormStatus("success");
    } catch {
      setFormStatus("error");
    }
  };

  return <main>
    <nav className="site-nav" aria-label="Main navigation"><a className="monogram" href="#home" aria-label="Abbas Bohra home">A<span>B</span></a><div className="nav-links"><a href="#about">About</a><a href="#work">Work</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div><a className="nav-cta" href="#contact">Let’s talk <FaArrowUpRightFromSquare /></a></nav>
    <section className="hero" id="home"><div className="hero-copy"><p className="eyebrow"><span /> Available for new opportunities</p><h1>Building digital<br /><em>experiences</em> that<br />feel effortless.</h1><p className="hero-description">I’m Abbas Bohra, a solution-oriented React Native developer building high-performance, cross-platform applications for iOS, Android, and the web.</p><div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <FaArrowDown /></a><a className="text-link" href="#contact">Get in touch <FaArrowUpRightFromSquare /></a></div></div><div className="hero-art" aria-hidden="true"><div className="orb orb-one" /><div className="orb orb-two" /><div className="illustration-shell"><DeveloperIllustration /></div><div className="floating-note note-top">React Native<br /><b>Developer</b></div><div className="floating-note note-bottom">Based in<br /><b>Rajasthan, India</b></div></div><a className="scroll-cue" href="#about"><span>Scroll to discover</span><i /></a></section>
    <section className="about section-wrap scroll-reveal" id="about"><p className="section-kicker">01 — ABOUT ME</p><div className="about-grid"><h2>I turn complex ideas into <em>clear, useful</em> digital products.</h2><div className="about-text"><p>I’m a React Native developer who cares about the details: thoughtful interfaces, maintainable code, and experiences people actually enjoy using.</p><p>I work across the complete mobile development lifecycle - from turning requirements into responsive UI components to integrating RESTful APIs, managing state, testing, debugging, and releasing reliable applications.</p><p>My toolkit includes React Native, Redux, React Query, Firebase, Socket.io, analytics, and performance optimisation. I enjoy working closely with designers and backend teams to create scalable, user-centred solutions.</p><a className="text-link" href="#experience">More about my journey <FaArrowDown /></a></div></div><div className="stats"><div><strong>3+</strong><span>Years building<br />digital products</span></div><div><strong>6</strong><span>Featured<br />projects</span></div><div><strong>3</strong><span>Languages<br />spoken</span></div></div></section>
   <section className="services section-wrap" id="services"><p className="section-kicker">02 — WHAT I WORK ON</p><h2>Services built for<br /><em>real-world impact.</em></h2><div className="service-list">{services.map((service) => { const isOpen = openService === service.number; return <article className={`service-row${isOpen ? " is-open" : ""}`} key={service.number}><button className="service-row-head" onClick={() => setOpenService(isOpen ? null : service.number)} aria-expanded={isOpen}><span className="service-number">{service.number}</span><span className="service-icon">{service.icon}</span><h3>{service.title}</h3><span className="service-toggle"><FaPlus /></span></button><div className="service-row-body"><ul>{service.items.map((item) => <li key={item}>{item}</li>)}</ul></div></article>; })}</div></section>
    <section className="work section-wrap" id="work"><div className="section-heading"><p className="section-kicker">02 — SELECTED WORK</p><h2>A few things I’ve<br /><em>brought to life.</em></h2></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.number}><div className="project-visual"><span>{project.icon}</span><small>{project.number}</small></div><div className="project-content"><p>{project.type}</p><h3>{project.title}</h3><span>{project.description}</span></div><a className="project-arrow" href="#contact" aria-label={`Ask about ${project.title}`}><FaArrowUpRightFromSquare /></a></article>)}</div></section>
    <section className="experience section-wrap" id="experience"><div className="section-heading"><p className="section-kicker">03 — EXPERIENCE</p><h2>Growing through<br /><em>good work.</em></h2></div><div className="timeline"><article><span>Jul 2025 — Present</span><div><h3>React Native Developer</h3><p>Alphagate Pvt Ltd</p><small>Designing, developing, and maintaining high-performance cross-platform mobile apps; building responsive UI, integrating REST APIs, and collaborating with remote product teams.</small></div></article><article><span>Dec 2023 — May 2025</span><div><h3>Junior React Native Developer</h3><p>PHP Poets Pvt Ltd</p><small>Developed mobile and web apps with React Native and Redux, integrated RESTful APIs, and improved performance through testing and debugging.</small></div></article><article><span>Jan 2023 — Jul 2023</span><div><h3>React Native Intern</h3><p>Wensenor</p><small>Supported the development and maintenance of mobile apps, API integrations, Redux state management, and front-end design work.</small></div></article></div></section>
    <section className="skills section-wrap"><p className="section-kicker">04 — TOOLBOX</p><h2>Built with the right<br /><em>tools for the job.</em></h2><div className="skill-cloud">{skills.map((skill) => <div className="skill-chip" key={skill.label}>{skill.icon}<span>{skill.label}</span></div>)}</div></section>
    <section className="contact section-wrap" id="contact"><p className="section-kicker">05 — CONTACT</p><div className="contact-grid"><div><h2>Have an idea?<br /><em>Let’s make it real.</em></h2><p>I’m open to new roles, collaborations, and interesting problems worth solving.</p></div><form className="contact-form" onSubmit={submitContact}><label>Your name<input required name="name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} placeholder="Your name" /></label><label>Email address<input required type="email" name="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} placeholder="you@example.com" /></label><label>Tell me about your project<textarea required name="message" value={form.message} onChange={(event) => setForm({ ...form, message: event.target.value })} placeholder="A short note about your idea..." rows="4" /></label><button className="button button-primary" type="submit" disabled={formStatus === "sending"}>{formStatus === "sending" ? "Sending..." : "Send message"} <FaArrowUpRightFromSquare /></button>{formStatus === "success" && <p className="form-message success">Thanks - your message has been sent.</p>}{formStatus === "error" && <p className="form-message error">Message could not be sent. Please email me directly.</p>}</form></div><footer><span>© {new Date().getFullYear()} Abbas Bohra</span><div><a href="https://github.com/abbasbohra" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a><a href="https://linkedin.com/in/abbasbohra53" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a><a href="mailto:abbasbohra139@gmail.com" aria-label="Email"><FaEnvelope /></a></div></footer></section>
  </main>;
}
export default App;
