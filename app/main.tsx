"use client";

import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import HomeClient from "./home-client";
import { WorkPage, AboutPage, ServicesPage, ContactPage, BlogsPage } from "./inner-pages";
import "./globals.css";

function App() {
  const [path, setPath] = useState("/");

  useEffect(() => {
    setPath(window.location.pathname);

    const onPopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  if (path === "/our-work" || path === "/portfolio") return <WorkPage />;
  if (path === "/about") return <AboutPage />;
  if (path === "/services") return <ServicesPage />;
  if (path === "/contact") return <ContactPage />;
  if (path === "/blog" || path === "/blogs") return <BlogsPage />;

  return <HomeClient />;
}

const container = document.getElementById("root");
if (container) {
  ReactDOM.createRoot(container).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
