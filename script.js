// script.js — robust delegated dropdown (overwrite your current file)
console.log("Dropdown JS Loaded!");

// script.js — robust delegated dropdown (overwrite your current file)
console.log("Dropdown JS Loaded!");

document.addEventListener("DOMContentLoaded", () => {
  const toggles = document.querySelectorAll(".dropdown-toggle");

  if (!toggles.length) {
    console.warn("No .dropdown-toggle elements found.");
  } else {
    console.log("Found dropdown toggles:", toggles.length);
  }

  toggles.forEach(toggle => {
    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation(); // important: stop the click bubbling up to document

      const parent = this.closest("li"); // safeguard for deeper structure
      if (!parent) return;

      // Close other open menus except ancestors of this parent (keeps path open)
      document.querySelectorAll("li.open").forEach(openItem => {
        if (openItem === parent) return;
        // keep ancestors of the clicked parent open
        if (openItem.contains(parent)) return;
        openItem.classList.remove("open");
      });

      // Toggle current parent
      parent.classList.toggle("open");

      // for debugging: show current open path in console
      console.log("Toggled:", parent, "Now open?", parent.classList.contains("open"));
    });
  });

  // Close when clicking outside nav
  document.addEventListener("click", (e) => {
    // if click is inside the nav, do nothing
    if (e.target.closest && e.target.closest("nav")) return;
    document.querySelectorAll("li.open").forEach(li => li.classList.remove("open"));
  });

  // Esc key closes menus
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll("li.open").forEach(li => li.classList.remove("open"));
  });
});

  // Esc key closes menus
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") document.querySelectorAll("li.open").forEach(li => li.classList.remove("open"));
  });
});
