document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link"); // All nav links (both navbar and footer)
  const sections = document.querySelectorAll("section, footer"); // All sections with IDs

  // Sync the active state across all nav links
  function syncActiveState(targetHref) {
    navLinks.forEach((link) => {
      // Remove active class from all links
      link.classList.remove("active");
      // Add active class to the link matching the targetHref
      if (link.getAttribute("href") === targetHref) {
        link.classList.add("active");
      }
    });
  }

  // Scroll-to-section functionality on click
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetHref = this.getAttribute("href");
      syncActiveState(targetHref); // Update active state immediately
    });
  });

  // Intersection Observer for dynamic active state on scroll
  const observerOptions = {
    root: null, // Observe viewport
    threshold: 0.3, // Trigger when 60% of the section is visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetHref = `#${entry.target.id}`;
        syncActiveState(targetHref);
      }
    });
  }, observerOptions);

  // Attach observer to each section
  sections.forEach((section) => observer.observe(section));
});

function navigateToWebsite(url) {
  window.location.href = url;
}
