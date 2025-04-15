window.addEventListener("load", () => {
  const loader = document.querySelector(".loader-wrapper");

  loader.classList.add("hide");

  setTimeout(() => {
    loader.style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 400); // espera que termine el fade-out
});

const url =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const lastThree = data.slice(-3).reverse(); // Los más antiguos
    console.log(lastThree);
    const container = document.querySelector("#recent-projects .projects");

    lastThree.forEach((project) => {
      const card = document.createElement("div");
      card.classList.add("project-card");
      card.innerHTML = `
        <img
          src="${project.image}"
          alt="Screenshot of ${project.name}"
          class="project-card__image"
        />
        <div class="project-card__content">
          <h3 class="project-card__title">${project.name}</h3>
          <p class="project-card__description">${project.description}</p>
          <a href="./single-project/project.html?id=${project.uuid}" class="project-card__cta">Learn More</a>
          
        </div>
      `;
      container.appendChild(card);
    });
  })

  .catch((error) => console.error("Error al cargar los proyectos:", error));
