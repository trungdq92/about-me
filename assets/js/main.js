(function () {
  const data = window.profileData;

  if (!data) {
    return;
  }

  const setText = (id, text) => {
    const node = document.getElementById(id);
    if (node) {
      node.textContent = text;
    }
  };

  const appendList = (id, items) => {
    const node = document.getElementById(id);
    if (!node) {
      return;
    }

    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      node.appendChild(li);
    });
  };

  const iconSvg = (name) => {
    const icons = {
      layers:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 3 8l9 5 9-5-9-5Zm-6.9 8.4L12 15l6.9-3.6L21 13l-9 5-9-5 2.1-1.6Zm0 5L12 20l6.9-3.6L21 18l-9 5-9-5 2.1-1.6Z"/></svg>',
      compass:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm4.7 6.3-2.2 6.1-6.2 2.3 2.2-6.2 6.2-2.2Z"/></svg>',
      globe:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.9 9h-3.1a15.6 15.6 0 0 0-1.4-5A8 8 0 0 1 18.9 11ZM12 4.1c1 1.2 1.9 3.4 2.3 6.9H9.7C10.1 7.5 11 5.3 12 4.1ZM4.1 13h3.1a15.6 15.6 0 0 0 1.4 5A8 8 0 0 1 4.1 13Zm3.1-2H4.1a8 8 0 0 1 4.5-5 15.6 15.6 0 0 0-1.4 5Zm4.8 8.9c-1-1.2-1.9-3.4-2.3-6.9h4.6c-.4 3.5-1.3 5.7-2.3 6.9Zm2.4-1.9a15.6 15.6 0 0 0 1.4-5h3.1a8 8 0 0 1-4.5 5Z"/></svg>',
      flow:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h10v4H7Zm-4 10h10v4H3Zm14 0h4v4h-4Zm-6-8h2v10h-2Z"/></svg>',
      users:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 11a4 4 0 1 1 4-4 4 4 0 0 1-4 4Zm0 2c3.3 0 6 1.8 6 4v2H3v-2c0-2.2 2.7-4 6-4Zm8.5-.6a3.2 3.2 0 1 0-1.9-6A5.7 5.7 0 0 1 16 8.5a5.8 5.8 0 0 1-.6 2.5 5.7 5.7 0 0 1 2.1 1.4ZM17 19h4v-1.2c0-1.5-1.3-2.8-3.1-3.4A6.6 6.6 0 0 1 19 17v2Z"/></svg>',
      chat:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v11H7l-3 3V4Z"/></svg>',
      grid:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h7v7H4Zm9 0h7v7h-7ZM4 13h7v7H4Zm9 0h7v7h-7Z"/></svg>',
      server:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 4h16v6H4Zm0 10h16v6H4Zm3-7h2v1H7Zm0 10h2v1H7Z"/></svg>',
      monitor:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 4h18v12H3Zm6 14h6v2H9Z"/></svg>',
      cloud:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 18H7a4 4 0 0 1-.4-8A5.5 5.5 0 0 1 17 8a4 4 0 0 1 1 10Z"/></svg>',
      spark:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m13 2 1.8 5.2L20 9l-5.2 1.8L13 16l-1.8-5.2L6 9l5.2-1.8ZM6 14l.9 2.1L9 17l-2.1.9L6 20l-.9-2.1L3 17l2.1-.9Zm12.5 1 1 2.5 2.5 1-2.5 1-1 2.5-1-2.5-2.5-1 2.5-1Z"/></svg>',
      bulb:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a7 7 0 0 0-4 12.7V18h8v-3.3A7 7 0 0 0 12 2Zm-3 18h6v2H9Z"/></svg>',
      clock:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm1 5h-2v6l5 3 1-1.7-4-2.3Z"/></svg>',
      shield:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2 5 5v6c0 5 3.4 9.7 7 11 3.6-1.3 7-6 7-11V5Z"/></svg>',
      rocket:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3c3.3 0 5.5 2.2 7 5.9-1.3 1.8-2.8 3.4-4.6 4.6L12 12l-1.5-4.4C12.3 5.8 13.9 4.3 15.7 3ZM8 13l3 3-4 1Zm-2 4 1 1-3 3-1-1Zm10-10 2 2"/></svg>',
      wrench:
        '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 6.9a5 5 0 0 1-6.6 4.7l-8 8-2.1-2.1 8-8A5 5 0 0 1 17.1 2L14 5.1l2.9 2.9Z"/></svg>'
    };

    return icons[name] || icons.spark;
  };

  const createChipList = (items) => {
    const wrap = document.createElement("div");
    wrap.className = "chip-list";

    items.forEach((item) => {
      const chip = document.createElement("span");
      chip.className = "chip";
      if (typeof item === "string") {
        chip.textContent = item;
      } else {
        if (item.logo) {
          const logo = document.createElement("i");
          logo.className = `tech-logo ${item.logo}`;
          logo.setAttribute("aria-hidden", "true");
          chip.appendChild(logo);
        } else if (item.icon) {
          const icon = document.createElement("span");
          icon.className = "chip-icon";
          icon.innerHTML = iconSvg(item.icon);
          chip.appendChild(icon);
        }

        const label = document.createElement("span");
        label.textContent = item.label;
        chip.appendChild(label);
      }
      wrap.appendChild(chip);
    });

    return wrap;
  };

  const renderHeroAccent = () => {
    const kickerNode = document.getElementById("hero-kicker");
    const proofNode = document.getElementById("hero-proof");

    if (kickerNode) {
      data.heroKicker.forEach((item) => {
        const pill = document.createElement("span");
        pill.className = "hero-pill";
        pill.textContent = item;
        kickerNode.appendChild(pill);
      });
    }

    if (proofNode) {
      data.heroProof.forEach((item) => {
        const proof = document.createElement("span");
        proof.className = "proof-item";
        proof.textContent = item;
        proofNode.appendChild(proof);
      });
    }
  };

  const renderMetrics = () => {
    const node = document.getElementById("metrics-grid");
    if (!node) {
      return;
    }

    data.metrics.forEach((metric) => {
      const card = document.createElement("article");
      card.className = "metric-card";
      card.setAttribute("data-spotlight", "metric");
      card.innerHTML = [
        `<p class="metric-value" data-counter="${metric.value}" data-suffix="${metric.suffix || ""}">0${metric.suffix || ""}</p>`,
        `<p class="metric-label">${metric.label}</p>`
      ].join("");
      node.appendChild(card);
    });
  };

  const renderValues = () => {
    const node = document.getElementById("value-grid");
    if (!node) {
      return;
    }

    data.values.forEach((value, index) => {
      const card = document.createElement("article");
      card.className = "value-card reveal";
      card.innerHTML = [
        `<span class="card-icon card-icon-soft">${iconSvg(value.icon)}</span>`,
        `<span class="value-index">0${index + 1}</span>`,
        `<h3>${value.title}</h3>`,
        `<p>${value.text}</p>`
      ].join("");
      node.appendChild(card);
    });
  };

  const renderSnapshot = () => {
    const domainNode = document.getElementById("domain-pills");
    const focusNode = document.getElementById("focus-list");
    const timelineNode = document.getElementById("timeline");

    if (domainNode) {
      data.domains.forEach((domain) => {
        const pill = document.createElement("span");
        pill.textContent = domain;
        domainNode.appendChild(pill);
      });
    }

    if (focusNode) {
      data.focusPoints.forEach((point) => {
        const li = document.createElement("li");
        li.textContent = point;
        focusNode.appendChild(li);
      });
    }

    if (timelineNode) {
      data.timeline.forEach((item) => {
        const article = document.createElement("article");
        article.className = "timeline-item";
        article.innerHTML = [
          `<p class="timeline-range">${item.range}</p>`,
          `<h3>${item.title}</h3>`,
          `<p>${item.text}</p>`
        ].join("");
        timelineNode.appendChild(article);
      });
    }
  };

  const renderProjects = (activeFilter) => {
    const node = document.getElementById("project-grid");
    if (!node) {
      return;
    }

    node.innerHTML = "";

    const filteredProjects =
      activeFilter === "All"
        ? data.projects
        : data.projects.filter((project) => project.filterTags.includes(activeFilter));

    filteredProjects.forEach((project) => {
      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.innerHTML = [
        '<div class="project-top">',
        "<div>",
        `<p class="project-role">${project.role}</p>`,
        `<h3>${project.name}</h3>`,
        `<p class="project-meta">${project.domain} | ${project.period}</p>`,
        "</div>",
        `<span class="tag">${window.filterLabels[project.filterTags[0]]}</span>`,
        "</div>",
        `<p class="project-summary">${project.summary}</p>`,
        `<ul class="project-contributions">${project.contributions.map((item) => `<li>${item}</li>`).join("")}</ul>`
      ].join("");

      const tags = document.createElement("div");
      tags.className = "tag-list";
      project.stack.forEach((item) => {
        const tag = document.createElement("span");
        tag.className = "tag";
        const logoMap = {
          "C#": "devicon-csharp-plain colored",
          ".NET Core": "devicon-dot-net-plain colored",
          "EF Core": "devicon-dot-net-plain colored",
          PowerShell: "devicon-powershell-plain colored",
          Git: "devicon-git-plain colored",
          ReactJS: "devicon-react-original colored",
          Docker: "devicon-docker-plain colored",
          Kubernetes: "devicon-kubernetes-plain colored",
          Java: "devicon-java-plain colored",
          "Spring Boot": "devicon-spring-plain colored",
          "Play Framework": "devicon-scala-plain colored",
          AWS: "devicon-amazonwebservices-plain-wordmark colored",
          Jenkins: "devicon-jenkins-line colored",
          "ASP.NET": "devicon-dotnetcore-plain colored",
          MSSQL: "devicon-microsoftsqlserver-plain colored",
          JavaScript: "devicon-javascript-plain colored",
          Python: "devicon-python-plain colored",
          IIS: "devicon-windows8-original colored",
          XML: "devicon-html5-plain colored"
        };

        if (logoMap[item]) {
          const logo = document.createElement("i");
          logo.className = `tech-logo ${logoMap[item]}`;
          logo.setAttribute("aria-hidden", "true");
          tag.appendChild(logo);
        }

        const text = document.createElement("span");
        text.textContent = item;
        tag.appendChild(text);
        tags.appendChild(tag);
      });

      card.appendChild(tags);
      node.appendChild(card);
    });

    observeReveals();
  };

  const renderProjectFilters = () => {
    const node = document.getElementById("project-filter");
    if (!node) {
      return;
    }

    let activeFilter = "All";

    const updateButtons = () => {
      Array.from(node.querySelectorAll(".filter-button")).forEach((button) => {
        button.classList.toggle("is-active", button.dataset.filter === activeFilter);
        button.setAttribute("aria-pressed", String(button.dataset.filter === activeFilter));
      });
    };

    data.projectFilters.forEach((filterName) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "filter-button";
      button.dataset.filter = filterName;
      button.textContent = window.filterLabels[filterName];
      button.addEventListener("click", () => {
        activeFilter = filterName;
        updateButtons();
        renderProjects(activeFilter);
      });
      node.appendChild(button);
    });

    updateButtons();
    renderProjects(activeFilter);
  };

  const renderSkills = () => {
    const node = document.getElementById("skill-groups");
    if (!node) {
      return;
    }

    data.skillGroups.forEach((group) => {
      const card = document.createElement("article");
      card.className = "skill-card reveal";
      card.innerHTML = `<span class="card-icon card-icon-soft">${iconSvg(group.icon)}</span><h3>${group.title}</h3><p>${group.description}</p>`;
      card.appendChild(createChipList(group.items));
      node.appendChild(card);
    });
  };

  const renderLeadershipPoints = () => {
    const node = document.getElementById("leadership-points");
    if (!node) {
      return;
    }

    data.leadershipPoints.forEach((item) => {
      const row = document.createElement("div");
      row.className = "leadership-point";
      row.innerHTML = `<span class="leadership-dot"></span><span>${item}</span>`;
      node.appendChild(row);
    });
  };

  const animateCounter = (element) => {
    const target = Number(element.dataset.counter || 0);
    const suffix = element.dataset.suffix || "";
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(target * eased);
      element.textContent = `${value}${suffix}`;

      if (progress < 1) {
        window.requestAnimationFrame(tick);
      }
    };

    window.requestAnimationFrame(tick);
  };

  const observeReveals = () => {
    const revealNodes = document.querySelectorAll(".reveal:not([data-observed])");

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (entry.target.matches(".signal-card, .metric-card, .value-card")) {
              entry.target.classList.add("is-emphasized");
            }
            entry.target.setAttribute("data-observed", "true");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16
      }
    );

    revealNodes.forEach((node) => {
      node.setAttribute("data-observed", "pending");
      revealObserver.observe(node);
    });
  };

  const setupCounters = () => {
    const counters = document.querySelectorAll("[data-counter]");

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5
      }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  };

  const setupActiveNav = () => {
    const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
    const sections = navLinks
      .map((link) => {
        const section = document.querySelector(link.getAttribute("href"));
        return section ? { link, section } : null;
      })
      .filter(Boolean);

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const match = sections.find((item) => item.section === entry.target);
          if (!match || !entry.isIntersecting) {
            return;
          }

          navLinks.forEach((link) => link.classList.remove("is-active"));
          match.link.classList.add("is-active");
        });
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: 0.01
      }
    );

    sections.forEach((item) => navObserver.observe(item.section));
  };

  setText("hero-summary", data.heroSummary);
  setText("self-pr", data.selfPr);
  setText("focus-title", data.focusBanner.title);
  setText("focus-text", data.focusBanner.text);
  renderHeroAccent();
  renderMetrics();
  renderValues();
  renderSnapshot();
  renderProjectFilters();
  renderSkills();
  renderLeadershipPoints();
  appendList("languages-list", data.languages);
  appendList("certifications-list", data.certifications);
  appendList("education-list", data.education);
  observeReveals();
  setupCounters();
  setupActiveNav();
})();
