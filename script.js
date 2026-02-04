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
function toggleMenu() {
  const menu = document.getElementById("mobile-menu");
  menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
}

// Toggle dropdowns
document.querySelectorAll('#mobile-menu .dropdown-toggle').forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    item.parentElement.classList.toggle('active');
  });
});
document.querySelector('.menu-toggle').addEventListener('click', function() {
  const menu = document.getElementById('mobile-menu');
  menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
});

// Toggle nested dropdowns
document.querySelectorAll('#mobile-menu .dropdown-toggle').forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    item.parentElement.classList.toggle('active');
  });
});
<script>
document.addEventListener("DOMContentLoaded", function() {
  const toggle = document.createElement("div");
  toggle.classList.add("menu-toggle");
  toggle.textContent = "☰ MENU";
  document.getElementById("main-nav").insertBefore(toggle, document.getElementById("main-nav").firstChild);

  const navUl = document.querySelector("#main-nav ul");

  toggle.addEventListener("click", function() {
    navUl.style.display = navUl.style.display === "flex" ? "none" : "flex";
  });

  document.querySelectorAll("#main-nav li.dropdown > a").forEach(link => {
    link.addEventListener("click", function(e) {
      e.preventDefault();
      link.parentElement.classList.toggle("open");
    });
  });
});
</script>
