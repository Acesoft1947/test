const headers = document.querySelectorAll(".accordion-header");

  headers.forEach(header => {
    header.addEventListener("click", () => {
      const content = header.nextElementSibling;

      // Collapse all others
      document.querySelectorAll(".accordion-content").forEach(el => {
        if (el !== content) el.classList.remove("active");
      });
      document.querySelectorAll(".accordion-header").forEach(btn => {
        if (btn !== header) btn.classList.remove("open");
      });

      // Toggle current one
      content.classList.toggle("active");
      header.classList.toggle("open");
    });
  });