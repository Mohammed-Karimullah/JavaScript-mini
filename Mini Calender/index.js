document.addEventListener('DOMContentLoaded', () => {
    const monthNameEl = document.getElementById("month-name");
    const dayNameEl = document.getElementById("day-name");
    const dayNumEl = document.getElementById("day-number");
    const yearEl = document.getElementById("year");
  
    if (monthNameEl && dayNameEl && dayNumEl && yearEl) {
      const date = new Date();
      
      monthNameEl.innerText = date.toLocaleString("de", { month: "long" });
      dayNameEl.innerText = date.toLocaleString("de", { weekday: "long" });
      dayNumEl.innerText = date.getDate();
      yearEl.innerText = date.getFullYear();
    } else {
      console.error("One or more elements not found.");
    }
  });