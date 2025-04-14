const urlParams = new URLSearchParams(window.location.search);
const projectId = urlParams.get("id");
console.log("🪪 ID de la URL:", projectId);

fetch(
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects"
)
  .then((res) => res.json())
  .then((data) => {
    const project = data.find((p) => p.uuid === projectId);
    console.log("🔍 Proyecto encontrado:", project);

    if (!project) {
      document.getElementById("project-details").innerHTML =
        "<p>Project not found.</p>";
      return;
    }

    const techList = project.tech
      ? project.tech.join(", ")
      : "No technologies listed";

    document.getElementById("project-details").innerHTML = `
      <div class="project-header">
        <a href="../index.html" class="back-button">← Back to home</a>
      </div>

      <div class="project-container">
        <h1 class="project-title">${project.name}</h1>

        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.name}" class="project-image" />
        </div>

        <p class="project-meta"><strong>Completed on:</strong> ${project.completed_on}</p>
        <p class="project-text">${project.description}</p>
        <p class="project-text">${project.content}</p>
        <p class="project-meta"><strong>Technologies:</strong> ${techList}</p>
      </div>
    `;

    // 🔁 Mostrar otros proyectos (menos el actual)
    const filteredProjects = data.filter((p) => p.uuid !== projectId);
    const recentProjects = filteredProjects.slice(-3).reverse(); // o usar simplemente `filteredProjects` si querés todos

    const container = document.querySelector("#recent-projects .projects");
    recentProjects.forEach((proj) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <img
          src="${proj.image}"
          alt="Screenshot of ${proj.name}"
          class="project-card__image"
        />
        <div class="project-card__content">
          <h3 class="project-card__title">${proj.name}</h3>
          <p class="project-card__description">${proj.description}</p>
          <a href="./project.html?id=${proj.uuid}" class="project-card__cta">Learn More</a>
        </div>
      `;
      container.appendChild(card);
    });
  })
  .catch((err) => {
    console.error("❌ Error fetching or processing project data:", err);
    document.getElementById("project-details").innerHTML =
      "<p>There was a problem loading the project.</p>";
  });
