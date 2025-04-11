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
      <h1>${project.name}</h1>
     <img src="${project.image}" alt="${project.name}" style="max-width: 100%; height: auto; border-radius: 12px;" />

      <p><strong>Completed on:</strong> ${project.completed_on}</p>
      <p>${project.description}</p>
      <p>${project.content}</p>
      <p><strong>Technologies:</strong> ${techList}</p>
    `;
  })
  .catch((err) => {
    console.error("❌ Error fetching or processing project data:", err);
    document.getElementById("project-details").innerHTML =
      "<p>There was a problem loading the project.</p>";
  });
