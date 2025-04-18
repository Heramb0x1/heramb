const currentPage = window.location.pathname;
const pageNames = {
  "/": "[h] home",
  "/blogs/blogs.html": "[b] blogs",
  "/about/about.html": "[a] about",
  "/work/work.html": "[w] work",
  "/projects/projects.html": "[p] projects",
  "/projects/project1.html": "MoodE : Mood Based Environment Development",
  "/projects/project2.html": "aiindians.org",
  "/blogs/blog0.html": "Back to Hell! ",
  "/blogs/blog1.html": "Web 3.0, AI, and the Future of the Internet",
};


function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector(".breadcrumbs");
  const pathSegments = currentPage
    .split("/")
    .filter((segment) => segment !== "");

  let breadcrumbPath = '<a href="/">[h] home</a>';

  if (currentPage.startsWith("/[b] blogs/")) {
    breadcrumbPath += ` / <a href="/blogs/blogs.html">blogs</a>`;

    if (currentPage !== "/blogs/blogs.html") {
      const blogName =
        pageNames[currentPage] || pathSegments[pathSegments.length - 1];
      breadcrumbPath += ` / ${blogName}`;
    }
  } else if (currentPage.startsWith("/[p] projects/")) {
    breadcrumbPath += ` / <a href="/projects/projects.html">projects</a>`;

    if (currentPage !== "/projects/projects.html") {
      const projectName =
        pageNames[currentPage] || pathSegments[pathSegments.length - 1];
      breadcrumbPath += ` / ${projectName}`;
    }
  } else {
    for (let i = 1; i < pathSegments.length; i++) {
      const path = `/${pathSegments.slice(0, i + 1).join("/")}`;
      let pageName = pageNames[path] || pathSegments[i];
      breadcrumbPath += ` / <a href="${path}">${pageName}</a>`;
    }
  }

  breadcrumbContainer.innerHTML = breadcrumbPath;
}

generateBreadcrumbs();
