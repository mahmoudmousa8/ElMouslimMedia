"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { blogPosts } from "../data/blog-posts";
import { portfolioCategories, projects, type Project } from "../data/projects";
import {
  getServicesByCategory,
  serviceCategories,
  services,
} from "../data/services";
import { siteConfig, whatsappLink } from "../data/site-config";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 11.5a8.2 8.2 0 0 1-12 7.2L4 20l1.3-3.8A8.2 8.2 0 1 1 20 11.5Z" />
      <path d="M8.3 8.1c.3-.7.7-.7 1-.7h.3c.2 0 .4.1.5.5l.7 1.8c.1.3 0 .5-.2.7l-.6.7c-.2.2-.1.4 0 .6.5.9 1.3 1.7 2.2 2.2.3.2.5.2.7 0l.8-1c.2-.2.4-.3.7-.2l1.8.9c.3.2.5.3.5.5 0 .2-.2 1.3-.8 1.8-.6.6-1.4.7-2 .6-1.1-.2-2.4-.7-4-2.1-1.6-1.4-2.7-3.1-3-4.3-.3-1.1 0-1.7.4-2Z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-4.2-1.2-1.1 2.1a14.2 14.2 0 0 1-9.6-9.6l2.1-1.1L7 3Z" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4.5A9 9 0 0 0 14.5 4C12 4 10 5.5 10 8.5V11H7v4h3v6h4v-6h3l.5-4H14V8.7c0-.5.2-.7.8-.7Z" />
    </svg>
  );
}

function Header({ active = "Home" }: { active?: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <a className="brand" href="/" aria-label={`${siteConfig.name} home`}>
        <img src="/logo.png" alt="El Mouslim Logo" className="brand-logo-img" />
        <div>
          <span>{siteConfig.brandName}</span>
          <small>{siteConfig.brandDescriptor}</small>
        </div>
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-label="Toggle navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <i />
        <i />
      </button>
      <nav className={open ? "is-open" : ""} aria-label="Primary navigation">
        {siteConfig.navigation.map((link) => (
          <a
            className={link.label === active ? "active" : ""}
            href={link.href}
            key={link.label}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          className="nav-cta"
          href="/contact"
          onClick={() => setOpen(false)}
        >
          Start a Project
        </a>
      </nav>
    </header>
  );
}

function FloatingActions() {
  return (
    <div className="floating-actions">
      <a
        href={whatsappLink(
          "Hello, I would like to learn more about El Mouslim Digital Marketing services.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with El Mouslim on WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.name}`}>
        <PhoneIcon />
      </a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main footer-columns">
        <div className="footer-intro">
          <a className="brand footer-brand" href="/">
            <span>{siteConfig.brandName}</span>
            <small>{siteConfig.brandDescriptor}</small>
          </a>
          <p>{siteConfig.description}</p>
        </div>
        <div className="footer-links">
          <p>Explore</p>
          {siteConfig.navigation.slice(0, 6).map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <div className="footer-links">
          <p>Services</p>
          {serviceCategories.map((category) => (
            <a href={`/services#${category.id}`} key={category.id}>
              {category.name}
            </a>
          ))}
        </div>
        <div className="footer-contact">
          <p>Contact</p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
          <a
            href={siteConfig.facebook}
            target="_blank"
            rel="noreferrer"
          >
            Facebook
          </a>
          <span>{siteConfig.location}</span>
          <span>{siteConfig.workingHours}</span>
        </div>
      </div>
      <div className="footer-bottom">
        <div>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-and-conditions">Terms and Conditions</a>
        </div>
        <span>© 2026 {siteConfig.name}. All rights reserved.</span>
      </div>
    </footer>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("SEND MESSAGE");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to discuss a new digital project.",
      "",
      `Name: ${String(form.get("name") ?? "")}`,
      `Email: ${String(form.get("email") ?? "")}`,
      `Phone: ${String(form.get("phone") ?? "")}`,
      `Service: ${String(form.get("service") ?? "")}`,
      `Message: ${String(form.get("message") ?? "")}`,
    ].join("\n");

    setStatus("OPENING WHATSAPP…");
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
    window.setTimeout(() => setStatus("SEND MESSAGE"), 1600);
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <label>
        <span>Name</span>
        <input required name="name" autoComplete="name" placeholder="Enter Your Name" />
      </label>
      <label>
        <span>Email</span>
        <input
          required
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Enter Your Email"
        />
      </label>
      <label>
        <span>Phone</span>
        <input
          required
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="Enter Your Phone"
        />
      </label>
      <label>
        <span>Service</span>
        <select required name="service" defaultValue="">
          <option value="" disabled>
            Select A Service
          </option>
          {services.map((service) => (
            <option value={service.name} key={service.slug}>
              {service.name}
            </option>
          ))}
        </select>
      </label>
      <label className="full-field">
        <span>Message</span>
        <span className="field-frame">
          <textarea
            required
            name="message"
            placeholder="Enter Your Message"
            rows={4}
          />
        </span>
      </label>
      <button className="orange-button full-field" type="submit">
        {status}
      </button>
      <small className="form-note">
        Submitting opens WhatsApp with your details prepared. No information is
        stored on this website.
      </small>
    </form>
  );
}

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const activeServices = useMemo(
    () => getServicesByCategory(serviceCategories[activeCategory].id),
    [activeCategory],
  );

  const publishedProjects = useMemo(
    () => projects.filter((project) => project.published),
    [],
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const isMouseDown = useRef(false);
  const isHovered = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  const pauseAutoScroll = () => {
    isHovered.current = true;
    if (autoScrollTimer.current) clearTimeout(autoScrollTimer.current);
    autoScrollTimer.current = setTimeout(() => {
      isHovered.current = false;
    }, 3500);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (isHovered.current || isMouseDown.current || !sliderRef.current) return;
      const el = sliderRef.current;
      if (el.scrollLeft >= (el.scrollWidth - el.clientWidth) - 10) {
        el.scrollLeft = 0;
      } else {
        el.scrollLeft += 1;
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    pauseAutoScroll();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -384, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    pauseAutoScroll();
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 384, behavior: "smooth" });
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    pauseAutoScroll();
    isMouseDown.current = true;
    startX.current = e.clientX;
    startScrollLeft.current = sliderRef.current.scrollLeft;
  };

  const handleMouseEnter = () => {
    isHovered.current = true;
  };

  const handleMouseLeave = () => {
    isMouseDown.current = false;
    isHovered.current = false;
  };

  const handleMouseUp = () => {
    isMouseDown.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown.current || !sliderRef.current) return;
    e.preventDefault();
    const walk = (e.clientX - startX.current) * 1.6;
    sliderRef.current.scrollLeft = startScrollLeft.current - walk;
  };

  return (
    <div className="site">
      <Header />

      <main>
        <section className="hero" id="home">
          <div className="hero-video-wrap" aria-hidden="true">
            <video
              src="/hero.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="hero-video"
            />
            <div className="hero-video-overlay" />
          </div>
          <div className="hero-grid" aria-hidden="true" />
          <span className="hero-symbol hero-x">×</span>
          <span className="hero-symbol hero-wave">∿</span>
          <span className="hero-symbol hero-plus">+</span>
          <div className="focus-glyph" aria-hidden="true">
            <i />
          </div>
          <div className="hero-copy">
            <p>INTEGRATED DIGITAL SOLUTIONS · ALEXANDRIA</p>
            <h1>Build, Market and Scale Your Business</h1>
            <div className="hero-description">
              El Mouslim Digital Marketing provides integrated marketing,
              software, cloud, and technology solutions designed to help
              businesses build stronger digital systems and achieve sustainable
              growth.
            </div>
            <div className="hero-actions">
              <a className="orange-button" href="/contact">
                START A PROJECT
              </a>
              <a className="hero-link" href="/services">
                Explore Our Services <ArrowIcon />
              </a>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="Scroll to about section">
            <span>SCROLL</span>
            <i />
          </a>
        </section>

        <section className="about section-shell reveal-on-scroll" id="about">
          <div className="orbit-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <div className="about-copy">
            <span className="eyebrow">ABOUT US</span>
            <h2>Digital Solutions Have Never Been Easier</h2>
            <p>
              El Mouslim Digital Marketing is an Alexandria-based digital
              solutions company helping businesses strengthen their online
              presence, build scalable technology, and manage digital growth.
            </p>
            <p>
              We connect marketing, software, infrastructure, and support so
              every part of the system works toward a clear business goal.
            </p>
            <a className="orange-button" href="/about">
              LEARN MORE
            </a>
          </div>
          <div className="about-art" aria-label="Abstract digital technology artwork">
            <div className="glass-frame">
              <img
                src="/images/about-neon.webp"
                alt="Abstract gold glass cursor sculpture"
              />
            </div>
            <div className="focus-glyph mini" aria-hidden="true">
              <i />
            </div>
          </div>
        </section>

        <section className="services section-shell reveal-on-scroll">
          <div className="section-heading center">
            <span className="eyebrow">OUR SERVICES</span>
            <h2>One Connected Digital Partner</h2>
            <p className="section-intro">
              Four focused service groups cover growth, product development,
              infrastructure, and ongoing technical enablement.
            </p>
          </div>
          <div className="service-tabs" role="tablist" aria-label="Service categories">
            {serviceCategories.map((category, index) => (
              <button
                className={index === activeCategory ? "active" : ""}
                type="button"
                role="tab"
                aria-selected={index === activeCategory}
                key={category.id}
                onClick={() => setActiveCategory(index)}
              >
                {category.name}
              </button>
            ))}
          </div>
          <article className="service-panel category-panel">
            <div className="service-art">
              <img
                src="/images/service-google-ads.webp"
                alt=""
                aria-hidden="true"
              />
              <div className="neon-mark">
                <span>{serviceCategories[activeCategory].short}</span>
              </div>
            </div>
            <div className="service-content">
              <div className="focus-glyph mini" aria-hidden="true">
                <i />
              </div>
              <span className="eyebrow">
                0{activeCategory + 1} · SERVICE GROUP
              </span>
              <h3>{serviceCategories[activeCategory].name}</h3>
              <p>{serviceCategories[activeCategory].description}</p>
              <div className="category-service-links">
                {activeServices.map((service) => (
                  <a href={`/services/${service.slug}`} key={service.slug}>
                    {service.name} <ArrowIcon />
                  </a>
                ))}
              </div>
              <a
                className="orange-button compact"
                href={`/services#${serviceCategories[activeCategory].id}`}
              >
                VIEW SERVICE GROUP
              </a>
            </div>
          </article>
        </section>

        <section className="portfolio section-shell reveal-on-scroll">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">OUR WORK</span>
              <h2>Featured Case Studies & Systems</h2>
            </div>
            <div className="slider-controls">
              <button
                className="slider-arrow"
                type="button"
                onClick={handlePrev}
                aria-label="Previous Project"
              >
                ‹
              </button>
              <button
                className="slider-arrow"
                type="button"
                onClick={handleNext}
                aria-label="Next Project"
              >
                ›
              </button>
            </div>
          </div>
          <div
            className="portfolio-slider-shell"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            onDragStart={(e) => e.preventDefault()}
          >
            <div className="portfolio-slider-track">
              {[...publishedProjects, ...publishedProjects].map((project, idx) => (
                <div className="portfolio-slider-item" key={`${project.slug}-${idx}`}>
                  <article className={`project-card ${project.tone}`}>
                    <a
                      className="project-visual branded-cover"
                      href={project.projectUrl || "/our-work"}
                      target={project.projectUrl ? "_blank" : "_self"}
                      rel="noreferrer"
                      aria-label={`Visit ${project.title}`}
                    >
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="project-screenshot"
                        />
                      ) : (
                        <>
                          <span>{project.code}</span>
                          <i />
                        </>
                      )}
                      <div className="project-visual-overlay">
                        <span className="project-visual-badge">{project.category}</span>
                        <h3 className="project-visual-title">{project.title}</h3>
                      </div>
                    </a>
                  </article>
                </div>
              ))}
            </div>
          </div>

          <div className="portfolio-slider-footer">
            <a className="orange-button compact" href="/our-work">
              VIEW ALL PROJECTS ↗
            </a>
          </div>
        </section>

        <section className="why section-shell">
          <div className="section-heading">
            <span className="eyebrow">WHY BUSINESSES CHOOSE ELMOUSLIM</span>
            <h2>Practical Expertise Across the Full Digital System</h2>
          </div>
          <div className="why-grid">
            {[
              [
                "01",
                "Connected",
                "Integrated Digital Expertise",
                "Marketing, software, infrastructure, and support are planned around one business objective.",
              ],
              [
                "02",
                "Scalable",
                "Software Solutions",
                "Products and systems are structured for maintainability, security, and future growth.",
              ],
              [
                "03",
                "Reliable",
                "Technical Support",
                "Clear ownership, documentation, and follow-through keep work moving after launch.",
              ],
              [
                "04",
                "Clear",
                "Project Communication",
                "Scope, priorities, responsibilities, and next steps stay visible throughout delivery.",
              ],
            ].map(([number, lead, title, copy]) => (
              <article key={number}>
                <span>{number}</span>
                <p>{lead}</p>
                <h3>{title}</h3>
                <small>{copy}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="blogs section-shell">
          <div className="section-heading split">
            <div>
              <span className="eyebrow">OUR BLOG</span>
              <h2>Practical Digital Insights</h2>
            </div>
            <a className="text-link" href="/blog">
              VIEW BLOG <ArrowIcon />
            </a>
          </div>
          <div className="blog-card-grid">
            {blogPosts.slice(0, 3).map((post) => (
              <article className="blog-text-card" key={post.slug}>
                <small>
                  {post.displayDate} · {post.category}
                </small>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <a href={`/blog/${post.slug}`}>
                  Read More <ArrowIcon />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="contact section-shell" id="contact">
          <div className="contact-copy">
            <span className="eyebrow">LET’S WORK TOGETHER</span>
            <h2>
              Start a <em>Conversation</em>
            </h2>
            <p>
              Tell us what you want to build, improve, or grow. We will help you
              identify the clearest next step.
            </p>
            <div className="contact-action-row">
              <a href={siteConfig.phoneHref}>Call Us</a>
              <a
                href={whatsappLink(
                  "Hello, I would like to learn more about El Mouslim Digital Marketing services.",
                )}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a href={siteConfig.facebook} target="_blank" rel="noreferrer">
                Facebook
              </a>
            </div>
            <div className="contact-details">
              <div>
                <small>LOCATION</small>
                <span>{siteConfig.location}</span>
              </div>
              <div>
                <small>EMAIL</small>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </div>
              <div>
                <small>WORKING HOURS</small>
                <span>{siteConfig.workingHours}</span>
              </div>
            </div>
          </div>
          <ContactForm />
        </section>
      </main>

      <FloatingActions />
      <Footer />

      {selectedProject && (
        <div
          className="project-modal-backdrop"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="project-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="project-modal-close"
              type="button"
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <span className="project-modal-category">
              {selectedProject.category}
            </span>
            <h2 className="project-modal-title">{selectedProject.title}</h2>
            {selectedProject.image && (
              <div className="project-modal-image-wrap">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-modal-image"
                />
              </div>
            )}
            <div className="project-modal-details">
              <p className="project-modal-desc">
                {selectedProject.shortDescription}
              </p>
              {selectedProject.technologies && (
                <div className="project-modal-techs">
                  {selectedProject.technologies.map((tech) => (
                    <span className="project-modal-tech" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              <div className="project-modal-actions">
                {selectedProject.projectUrl && (
                  <a
                    className="orange-button"
                    href={selectedProject.projectUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    VISIT LIVE WEBSITE ↗
                  </a>
                )}
                <button
                  className="secondary-button"
                  type="button"
                  onClick={() => setSelectedProject(null)}
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export {
  ArrowIcon,
  ContactForm,
  FacebookIcon,
  FloatingActions,
  Footer,
  Header,
  PhoneIcon,
  WhatsAppIcon,
};
