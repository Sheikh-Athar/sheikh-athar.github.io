import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const sections = ["About", "Experience", "Projects", "Skills", "Contact"];


export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);
  
  useEffect(() => {
      const handleScroll = () => {
        const sections = ["about", "experience", "projects", "contact"];
        for (let id of sections) {
          const el = document.getElementById(id);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              setActiveSection(id);
              break;
            }
          }
        }
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

  return (
    <div style={{ fontFamily: "sans-serif" }}>
        <header
          style={{
            position: "sticky",
            top: 0,
            backgroundColor: "white",
            boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
            zIndex: 1000,
            padding: "1rem"
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap"
            }}
          >
            <h1 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>Athar Sheikh</h1>

                    <button
                      onClick={() => setMenuOpen(!menuOpen)}
                      style={{
          padding: "0.6rem 1.2rem",
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.4)",
          backdropFilter: "blur(8px)",
          cursor: "pointer"
        }}
              className="mobile-toggle"
            >
              ☰
            </button>

            <nav className={`nav-links ${menuOpen ? "open" : ""}`} style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
              {["About", "Experience", "Projects", "Contact"].map((section) => (
                <a
                  key={section}
                  href={`#${section.toLowerCase()}`}
                  style={{
                    textDecoration: "none",
                    fontWeight: "500",
                    color: activeSection === section.toLowerCase() ? "#007BFF" : "#333",
                    borderBottom: activeSection === section.toLowerCase() ? "2px solid #007BFF" : "none",
                    paddingBottom: "2px"
                  }}
                >
                  {section}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section
          style={{
            background: "linear-gradient(135deg, #e0f7fa 0%, #f1f8ff 100%)",
            padding: "4rem 1rem"
          }}
        >
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              gap: "2rem"
            }}
          >
            <img
              src="/profile.jpeg"
              alt="Athar Sheikh"
              style={{
                width: "160px",
                height: "160px",
                borderRadius: "50%",
                objectFit: "cover",
                boxShadow: "0 0 12px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease-in-out",
                cursor: "pointer"
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05) rotate(1deg)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
            />

            <div style={{ maxWidth: "600px" }}>
              <motion.h2
                style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "0.5rem" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                Hi, I'm Athar
              </motion.h2>
            <p style={{ fontSize: "1rem", color: "#444" }}>
              Full-Stack & Backend Software Engineer | CS @ Notre Dame
            </p>

              <div style={{ marginTop: "1rem" }}>
                <a
                  href="/resume.pdf"
                  download
                  style={{
                    padding: "0.6rem 1.2rem",
                    backgroundColor: "#007BFF",
                    color: "white",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontWeight: "bold",
                    display: "inline-block"
                  }}
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </section>


<section id="about" style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1rem" }}>
  <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "2rem", textAlign: "center" }}>About Me</h3>

  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    style={{
      background: "linear-gradient(145deg, #fefefe, #f2f2f2)",
      padding: "2rem",
      borderRadius: "16px",
      boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
      lineHeight: "1.75",
      color: "#444",
      fontSize: "1.1rem",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "default"
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.transform = "translateY(-4px)";
      e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,0,0,0.12)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.05)";
    }}
  >
    <span style={{ display: "block", marginBottom: "1rem" }}>
      I’m a Computer Science Master’s student at the University of Notre Dame, graduating in May 2025.
    </span>

    <span style={{ display: "block", marginBottom: "1rem" }}>
      Previously, I worked as a Software Engineer at JPMorgan Chase, where I built financial reporting tools, internal dashboards, and backend APIs supporting UK operations.
    </span>

    <span style={{ display: "block" }}>
      I'm currently focused on full-stack and backend development — building reliable, scalable systems using modern web technologies like React, Python, and SQL.
    </span>
  </motion.div>
        </section>
        
        <section id="education" style={{ maxWidth: "1000px", margin: "0 auto", padding: "4rem 1rem" }}>
        
          <h3 style={{ fontSize: "1.75rem", fontWeight: "bold", marginBottom: "2.5rem", textAlign: "center" }}>Education</h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2rem"
            }}
          >
            {[{
              logo: "nd-logo.jpeg",
              alt: "University of Notre Dame",
              title: "University of Notre Dame",
              degree: "Master of Science in Computer Science",
              date: "Expected May 2025",
              gpa: "GPA: 3.62 / 4.0"
            },
            {
              logo: "rvce-logo.jpeg",
              alt: "RV College of Engineering",
              title: "RV College of Engineering, Bangalore",
              degree: "Bachelor of Engineering in Information Science",
              date: "2016 – 2020",
              gpa: "GPA: 8.6 / 10"
            }].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                style={{
                  borderRadius: "16px",
                  background: "linear-gradient(145deg, #fefefe, #f2f2f2)",
                  padding: "2rem",
                  boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default"
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 12px 36px rgba(0,0,0,0.12)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,0,0,0.05)";
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
                  <img
                    src={edu.logo}
                    alt={edu.alt}
                    style={{
                      width: "48px",
                      height: "48px",
                      objectFit: "contain",
                      borderRadius: "8px",
                      border: "1px solid #ddd",
                      background: "#fff"
                    }}
                  />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: "bold", margin: 0 }}>{edu.title}</h4>
                </div>
                <p style={{ margin: 0, fontSize: "1rem", color: "#555" }}>{edu.degree}</p>
                <p style={{ margin: "0.25rem 0", fontSize: "0.95rem", color: "#777" }}>{edu.date}</p>
                <p style={{ margin: 0, fontSize: "0.95rem", color: "#777" }}>{edu.gpa}</p>
              </motion.div>
            ))}
          </div>
        </section>



      <section id="experience" style={{ backgroundColor: "#f8f8f8", padding: "4rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3>Experience</h3>
          <ul>
            <li>Graduate Research Assistant, University of Notre Dame (2024–2025)</li>
            <li>Software Engineer 2, JP Morgan Chase (2022–2023)</li>
            <li>Software Engineer 1, JP Morgan Chase (2020–2021)</li>
            <li>Software Intern, JP Morgan Chase (2020)</li>
          </ul>
        </div>
      </section>

      <section id="projects" style={{ maxWidth: "800px", margin: "0 auto", padding: "4rem 1rem" }}>
        <h3>Projects</h3>
        <ul>
          <li>GNN Vulnerability Detection</li>
          <li>TCP Throughput Prediction</li>
          <li>HGNN for Image Classification</li>
          <li>IoT RAG Framework</li>
        </ul>
      </section>

      <section id="contact" style={{ backgroundColor: "#f8f8f8", padding: "4rem 1rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h3>Contact</h3>
          <p>Email: thesheikhz.athar@gmail.com</p>
          <p>
            <a href="https://github.com/Sheikh-Athar" target="_blank">GitHub</a> |
            <a href="https://linkedin.com/in/athar-sheikh-384298120/" target="_blank"> LinkedIn</a> |
            <a href="https://scholar.google.com/citations?user=-3qGQPQAAAAJ" target="_blank"> Google Scholar</a>
          </p>
        </div>
      </section>

      <footer style={{ textAlign: "center", fontSize: "0.875rem", color: "#777", padding: "2rem" }}>
        © 2025 Athar
      </footer>
    </div>
  );
}
