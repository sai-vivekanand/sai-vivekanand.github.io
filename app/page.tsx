"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Home() {
  const [activeSection, setActiveSection] = useState("")
  const sectionsRef = useRef<(HTMLElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" },
    )

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/30 bg-background/80 backdrop-blur-md">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-semibold tracking-tight">
            Sai Vivekanand Reddy
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {["About", "Experience", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-muted transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section
          id="about"
          ref={(el) => (sectionsRef.current[0] = el)}
          className="min-h-screen flex items-center opacity-0"
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8 w-full">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="text-accent font-mono text-sm tracking-wider">FULL-STACK ENGINEER / AI SPECIALIST</div>
                <h1 className="text-6xl sm:text-7xl font-light tracking-tight max-w-3xl">
                  Building intelligent,
                  <br />
                  scalable solutions
                </h1>
              </div>
              <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Full-stack, cloud, and AI engineer at Northeastern University. 3 years building high-performance backend
                systems, scalable infrastructure, and generative AI applications.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="#projects"
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  View My Work
                </Link>
                <Link
                  href="mailto:vangala.sa@northeastern.edu"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section
          id="skills"
          ref={(el) => (sectionsRef.current[1] = el)}
          className="py-20 sm:py-32 opacity-0 border-t border-border/30"
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-light mb-12">Technical Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "Python",
                "Java",
                "Go",
                "React",
                "AWS",
                "GCP",
                "Docker",
                "Kubernetes",
                "Terraform",
                "PyTorch",
                "LangChain",
                "FastAPI",
                "Spring Boot",
                "PostgreSQL",
                "TypeScript",
                "Airflow",
              ].map((tech) => (
                <div
                  key={tech}
                  className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors text-center font-medium text-sm"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          ref={(el) => (sectionsRef.current[2] = el)}
          className="py-20 sm:py-32 opacity-0 border-t border-border/30"
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-light mb-12">Work Experience</h2>
            <div className="space-y-12">
              {[
                {
                  role: "AI Engineer",
                  company: "Humanitarians AI",
                  location: "Boston, USA",
                  dates: "Jan 2025 – May 2025",
                  description:
                    "Engineered multi-modal document processing with 95% accuracy using Gemini Vision API, architected 4-tier persistent memory system for AI agents, and deployed services with 99.9% uptime using Kubernetes.",
                },
                {
                  role: "Member of Technical Staff",
                  company: "Puddl",
                  location: "Bangalore, India",
                  dates: "June 2022 – August 2023",
                  description:
                    "Built client-side analytics platform for OpenAI API monitoring with 100% data privacy, developed Recharts dashboard for visualizing usage data directly from API.",
                },
                {
                  role: "Software Engineer",
                  company: "Blue Yonder",
                  location: "Hyderabad, India",
                  dates: "July 2020 – May 2022",
                  description:
                    "Reduced initial load times by 40% through data-loading re-architecture, enhanced productivity by 25% by re-engineering forecast simulations, diagnosed and resolved 70+ customer-reported bugs annually.",
                },
              ].map((job, idx) => (
                <div key={idx} className="group border-b border-border/30 pb-8 last:border-b-0">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-medium group-hover:text-accent transition-colors">{job.role}</h3>
                      <div className="text-muted-foreground">
                        {job.company} • {job.location}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground whitespace-nowrap">{job.dates}</div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{job.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          ref={(el) => (sectionsRef.current[3] = el)}
          className="py-20 sm:py-32 opacity-0 border-t border-border/30"
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <h2 className="text-3xl sm:text-4xl font-light mb-12">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Multi-Agent RAG System",
                  description:
                    "Architected multi-agent research system synthesizing information from parallel web, academic, and RAG agents with LangGraph orchestration.",
                  tech: ["Python", "LangGraph", "Airflow", "Pinecone"],
                },
                {
                  title: "Cloud-Native App (GCP)",
                  description:
                    "Engineered scalable 3-tier web application on GCP with auto-scaling, private Cloud SQL, and Terraform IaC for 15+ resources.",
                  tech: ["Java", "Spring Boot", "Terraform", "GCP"],
                },
                {
                  title: "Distributed Training Pipeline",
                  description:
                    "Achieved 3.7x speedup on U-Net model using PyTorch DDP on HPC cluster, reduced training time 66% with Automatic Mixed Precision.",
                  tech: ["PyTorch", "HPC", "CUDA", "AMP"],
                },
              ].map((project, idx) => (
                <div
                  key={idx}
                  className="group p-6 border border-border rounded-lg hover:border-accent/50 hover:bg-muted/30 transition-all duration-300"
                >
                  <h3 className="text-lg font-medium mb-3 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 text-xs bg-accent/10 text-accent rounded">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={(el) => (sectionsRef.current[4] = el)}
          className="py-20 sm:py-32 opacity-0 border-t border-border/30"
        >
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="max-w-2xl">
              <h2 className="text-3xl sm:text-4xl font-light mb-6">Let's Connect</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Always interested in opportunities to build impactful systems, collaborate on AI/ML projects, and
                discuss emerging technologies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="mailto:vangala.sa@northeastern.edu"
                  className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Me
                </Link>
                <Link
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 border border-border rounded-lg hover:bg-muted transition-colors font-medium flex items-center justify-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-border/30 py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-6 sm:px-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <div>© 2025 Sai Vivekanand Reddy. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                LinkedIn
              </Link>
              <span className="text-border">/</span>
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </Link>
              <span className="text-border">/</span>
              <Link href="mailto:vangala.sa@northeastern.edu" className="hover:text-foreground transition-colors">
                Email
              </Link>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
