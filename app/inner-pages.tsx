"use client";

import { FormEvent, ReactNode, useState } from "react";
import {
  blogCategories,
  blogPosts,
  getBlogPost,
} from "../data/blog-posts";

import {
  portfolioCategories,
  projects,
} from "../data/projects";
import {
  getService,
  getServicesByCategory,
  serviceCategories,
} from "../data/services";
import { siteConfig, whatsappLink } from "../data/site-config";
import {
  calculateDiscount,
  paymentMethods,
  subscriptionFaqs,
  subscriptions,
} from "../data/subscriptions";
import {
  ArrowIcon,
  ContactForm,
  FloatingActions,
  Footer,
  Header,
} from "./home-client";

function PageLayout({
  active,
  kicker,
  title,
  intro,
  children,
  compact = false,
}: {
  active: string;
  kicker: string;
  title: string;
  intro: string;
  children: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className="site">
      <Header active={active} />
      <main>
        <section className={`page-hero ${compact ? "compact-page-hero" : ""}`}>
          <div className="page-hero-grid" aria-hidden="true" />
          <span className="page-hero-mark">+</span>
          <div>
            <span className="eyebrow">{kicker}</span>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
          <div className="focus-glyph" aria-hidden="true">
            <i />
          </div>
        </section>
        {children}
      </main>
      <FloatingActions />
      <Footer />
    </div>
  );
}

function CallToAction({
  title = "Let’s shape the right digital solution.",
  copy = "Tell us what you want to build, improve, or grow. We will help you identify the clearest next step.",
}: {
  title?: string;
  copy?: string;
}) {
  return (
    <section className="project-cta">
      <div>
        <span className="eyebrow">START A PROJECT</span>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{copy}</p>
        <a className="orange-button" href="/contact">
          START A PROJECT
        </a>
      </div>
    </section>
  );
}

export function AboutPage() {
  return (
    <PageLayout
      active="About"
      kicker="ABOUT ELMOUSLIM"
      title="Connected digital expertise, built around the business."
      intro="An Alexandria-based digital solutions company helping businesses strengthen their presence, develop scalable software, improve infrastructure, and achieve measurable growth."
    >
      <section className="inner-section about-story">
        <div>
          <span className="eyebrow">WHO WE ARE</span>
          <h2>Clear thinking across marketing and technology.</h2>
          <p>
            El Mouslim Digital Marketing helps businesses build their digital
            presence, develop scalable software, improve infrastructure, and
            manage growth through integrated technology and marketing services.
          </p>
          <p>
            We bring strategy, product delivery, infrastructure, and support
            into one practical working relationship. The result is clearer
            ownership and a digital system that is easier to improve.
          </p>
          <a className="orange-button" href="/services">
            EXPLORE SERVICES
          </a>
        </div>
        <div className="story-image">
          <img
            src="/images/about-neon.webp"
            alt="Abstract gold digital cursor sculpture"
          />
        </div>
      </section>

      <section className="inner-section mission-vision-grid">
        <article>
          <span className="eyebrow">OUR MISSION</span>
          <h2>Make useful digital progress easier to achieve.</h2>
          <p>
            We help businesses turn goals into practical marketing, software,
            infrastructure, and support systems that can be measured and
            maintained.
          </p>
        </article>
        <article>
          <span className="eyebrow">OUR VISION</span>
          <h2>Digital systems that grow with the business.</h2>
          <p>
            We aim to be a dependable long-term partner for businesses that
            value clear communication, practical innovation, and disciplined
            execution.
          </p>
        </article>
      </section>

      <section className="inner-section values-section">
        <div className="inner-heading">
          <span className="eyebrow">OUR VALUES</span>
          <h2>The standards behind every engagement.</h2>
        </div>
        <div className="values-list six-values">
          {[
            ["01", "Reliability", "We follow through on agreed responsibilities and make progress visible."],
            ["02", "Transparency", "Scope, priorities, constraints, and decisions are communicated clearly."],
            ["03", "Continuous Improvement", "We learn from evidence and keep refining the work."],
            ["04", "Practical Innovation", "New technology must solve a real problem and remain operable."],
            ["05", "Business-Focused Execution", "Work is shaped around useful commercial and operational outcomes."],
            ["06", "Long-Term Support", "We plan for ownership, maintenance, and growth after launch."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="inner-section expertise-section">
        <div className="inner-heading">
          <span className="eyebrow">OUR EXPERTISE</span>
          <h2>Four capabilities. One connected delivery system.</h2>
        </div>
        <div className="capability-grid">
          {serviceCategories.map((category, index) => (
            <a href={`/services#${category.id}`} key={category.id}>
              <span>0{index + 1}</span>
              <h3>{category.name}</h3>
              <p>{category.description}</p>
              <ArrowIcon />
            </a>
          ))}
        </div>
      </section>

      <section className="inner-section process-section">
        <div className="inner-heading">
          <span className="eyebrow">HOW WE WORK</span>
          <h2>Clear from the first conversation to ongoing improvement.</h2>
        </div>
        <div className="process-grid">
          {[
            ["01", "Understand", "We clarify the goal, users, current systems, constraints, and priorities."],
            ["02", "Plan", "We define scope, responsibilities, milestones, and the best delivery path."],
            ["03", "Execute", "We build and launch in controlled, reviewable stages."],
            ["04", "Improve", "We document, measure, support, and refine what should perform better."],
          ].map(([number, title, copy]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <CallToAction />
    </PageLayout>
  );
}

export function ServicesPage() {
  return (
    <PageLayout
      active="Services"
      kicker="OUR SERVICES"
      title="Integrated services for digital growth and technology."
      intro="Four clear service groups connect acquisition, product development, infrastructure, and long-term technical support."
    >
      <section className="inner-section services-index">
        <div className="services-jump-nav" aria-label="Service groups">
          {serviceCategories.map((category, index) => (
            <a href={`#${category.id}`} key={category.id}>
              <span>0{index + 1}</span>
              {category.name}
            </a>
          ))}
        </div>
      </section>

      {serviceCategories.map((category, categoryIndex) => {
        const categoryServices = getServicesByCategory(category.id);
        return (
          <section
            className="inner-section service-category-section"
            id={category.id}
            key={category.id}
          >
            <div className="service-category-heading">
              <span>0{categoryIndex + 1}</span>
              <div>
                <small>{category.short}</small>
                <h2>{category.name}</h2>
                <p>{category.description}</p>
              </div>
            </div>
            <div className="service-card-grid">
              {categoryServices.map((service) => (
                <a
                  className="service-index-card"
                  href={`/services/${service.slug}`}
                  key={`${category.id}-${service.slug}`}
                >
                  <span>{service.short}</span>
                  <h3>{service.name}</h3>
                  <p>{service.description}</p>
                  <div>
                    Explore Service <ArrowIcon />
                  </div>
                </a>
              ))}
            </div>
          </section>
        );
      })}

      <CallToAction />
    </PageLayout>
  );
}

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return null;

  const category = serviceCategories.find(
    (item) => item.id === service.primaryCategory,
  );
  const related = service.relatedSlugs
    .map((relatedSlug) => getService(relatedSlug))
    .filter((item) => Boolean(item));

  return (
    <PageLayout
      active="Services"
      kicker={category?.name.toUpperCase() ?? "OUR SERVICES"}
      title={service.name}
      intro={service.description}
    >
      <section className="inner-section service-overview-grid">
        <div>
          <span className="eyebrow">SERVICE OVERVIEW</span>
          <h2>A practical solution designed around your business.</h2>
        </div>
        <p>{service.overview}</p>
      </section>

      <section className="inner-section service-detail-columns">
        <div className="detail-panel">
          <span className="eyebrow">PROBLEMS WE SOLVE</span>
          <h2>Remove friction before it limits growth.</h2>
          <ul>
            {service.problems.map((problem) => (
              <li key={problem}>{problem}</li>
            ))}
          </ul>
        </div>
        <div className="detail-panel accent-panel">
          <span className="eyebrow">MAIN CAPABILITIES</span>
          <h2>What this service can include.</h2>
          <ul>
            {service.capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="inner-section process-section">
        <div className="inner-heading">
          <span className="eyebrow">DELIVERY PROCESS</span>
          <h2>Structured from discovery to handover.</h2>
        </div>
        <div className="process-grid">
          {service.process.map((step, index) => (
            <article key={step.title}>
              <span>0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      {service.technologies.length > 0 && (
        <section className="inner-section technologies-section">
          <span className="eyebrow">RELEVANT TECHNOLOGIES</span>
          <div>
            {service.technologies.map((technology) => (
              <span key={technology}>{technology}</span>
            ))}
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="inner-section related-services">
          <div className="inner-heading">
            <span className="eyebrow">RELATED SERVICES</span>
            <h2>Continue building the connected system.</h2>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <a href={`/services/${item!.slug}`} key={item!.slug}>
                <span>{item!.short}</span>
                <h3>{item!.name}</h3>
                <ArrowIcon />
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="service-contact-cta">
        <div>
          <span className="eyebrow">DISCUSS THIS SERVICE</span>
          <h2>Interested in {service.name}?</h2>
          <p>
            Share a little context and we will help you identify the best next
            step.
          </p>
        </div>
        <a
          className="orange-button"
          href={whatsappLink(
            `Hello, I am interested in ${service.name}. Please send me more information.`,
          )}
          target="_blank"
          rel="noreferrer"
        >
          CONTACT ON WHATSAPP
        </a>
      </section>
    </PageLayout>
  );
}

export function WorkPage() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? projects.filter((project) => project.published)
      : projects.filter(
          (project) => project.published && project.category === filter,
        );

  return (
    <PageLayout
      active="Our Work"
      kicker="OUR WORK"
      title="Selected Client Projects & Digital Case Studies"
      intro="Explore verified live websites, custom digital platforms, and targeted advertising campaigns delivered by El Mouslim."
    >
      <section className="inner-section selected-work">
        <div className="large-filters" role="group" aria-label="Work categories">
          {portfolioCategories.map((category) => (
            <button
              className={filter === category ? "active" : ""}
              type="button"
              key={category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="work-grid">
          {visible.map((item) => (
            <article className={`work-card ${item.tone}`} key={item.slug}>
              <a
                className="work-visual"
                href={item.projectUrl || "#"}
                target={item.projectUrl ? "_blank" : "_self"}
                rel="noreferrer"
                aria-label={`Visit ${item.title}`}
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="project-screenshot"
                  />
                ) : (
                  <>
                    <span>{item.code}</span>
                    <i />
                  </>
                )}
                <div className="project-visual-overlay">
                  <span className="project-visual-badge">{item.category}</span>
                  <h3 className="project-visual-title">{item.title}</h3>
                </div>
              </a>
            </article>
          ))}
        </div>
      </section>

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

      <CallToAction />
    </PageLayout>
  );
}

export function BlogsPage() {
  const [category, setCategory] = useState("All");
  const visible =
    category === "All"
      ? blogPosts
      : blogPosts.filter((article) => article.category === category);

  return (
    <PageLayout
      active="Blog"
      kicker="OUR BLOG"
      title="Practical ideas for clearer digital decisions."
      intro="Original English articles on Google Ads, software, SaaS, cloud infrastructure, performance, cybersecurity, and digital strategy."
    >
      <section className="inner-section blog-page">
        <div
          className="large-filters blog-filters"
          role="group"
          aria-label="Blog categories"
        >
          {blogCategories.map((item) => (
            <button
              className={category === item ? "active" : ""}
              type="button"
              key={item}
              onClick={() => setCategory(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <div className="blog-page-grid">
          {visible.map((article) => (
            <article className="blog-text-card" key={article.slug}>
              <small>
                {article.displayDate} · {article.category}
              </small>
              <h2>{article.title}</h2>
              <p>{article.excerpt}</p>
              <a href={`/blog/${article.slug}`}>
                Read More <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>
      <CallToAction
        title="Need help applying an idea to your business?"
        copy="Tell us what you are trying to improve and we will help you identify the right service."
      />
    </PageLayout>
  );
}

export function BlogDetailPage({ slug }: { slug: string }) {
  const post = getBlogPost(slug);
  if (!post) return null;
  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <PageLayout
      active="Blog"
      kicker={`${post.category.toUpperCase()} · ${post.displayDate}`}
      title={post.title}
      intro={post.description}
      compact
    >
      <article className="inner-section article-page">
        <div className="article-meta">
          <span>{post.category}</span>
          <span>{post.displayDate}</span>
          <span>{post.readingTime}</span>
        </div>
        <p className="article-lead">{post.excerpt}</p>
        {post.content.map((section) => (
          <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {section.bullets && (
              <ul>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </article>

      <section className="inner-section related-articles">
        <div className="inner-heading">
          <span className="eyebrow">RELATED ARTICLES</span>
          <h2>Continue exploring.</h2>
        </div>
        <div className="blog-card-grid">
          {relatedPosts.map((item) => (
            <article className="blog-text-card" key={item.slug}>
              <small>
                {item.displayDate} · {item.category}
              </small>
              <h3>{item.title}</h3>
              <p>{item.excerpt}</p>
              <a href={`/blog/${item.slug}`}>
                Read More <ArrowIcon />
              </a>
            </article>
          ))}
        </div>
      </section>
      <CallToAction />
    </PageLayout>
  );
}





export function ContactPage() {
  return (
    <PageLayout
      active="Contact"
      kicker="CONTACT US"
      title="Let’s build something useful."
      intro="Tell us about your business, your goals, and where you need support. We will help you identify the clearest next step."
    >
      <section className="inner-section contact-page-section">
        <div className="contact-page-copy">
          <span className="eyebrow">GET IN TOUCH</span>
          <h2>Start a conversation.</h2>
          <p>
            Share a little context and our team will respond during official
            working hours.
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
          <div className="office-card">
            <div>
              <small>LOCATION</small>
              <strong>{siteConfig.location}</strong>
            </div>
            <div>
              <small>EMAIL</small>
              <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
            </div>
            <div>
              <small>PHONE</small>
              <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
            </div>
            <div>
              <small>WHATSAPP</small>
              <a
                href={siteConfig.whatsappHref}
                target="_blank"
                rel="noreferrer"
              >
                {siteConfig.phone}
              </a>
            </div>
            <div>
              <small>WORKING HOURS</small>
              <strong>{siteConfig.workingHours}</strong>
            </div>
          </div>
        </div>
        <ContactForm />
      </section>
      <section className="map-abstract" aria-label="Alexandria office area illustration">
        <div className="map-grid" />
        <div className="map-pin">
          <i />
        </div>
        <span>ALEXANDRIA</span>
        <small>EL SYOUF · EGYPT</small>
      </section>
    </PageLayout>
  );
}

export { CallToAction, PageLayout };
