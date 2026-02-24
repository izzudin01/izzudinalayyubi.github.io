document.getElementById("year").textContent = new Date().getFullYear();

const email = "izzudin.al01@ui.ac.id";
const btn = document.getElementById("copyEmail");

btn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(email);
    btn.textContent = "Copied ✓";
    setTimeout(() => (btn.textContent = "Copy Email"), 1200);
  } catch (e) {
    alert("Copy failed. Email: " + email);
  }
});
