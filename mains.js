const currentPage = window.location.pathname;
const pageNames = {
  '/': 'home',
  '/posts/post.html': 'posts',
  '/about/about.html': 'about',
  '/projects/projects.html': 'projects',
  '/posts/blog0.html': 'welcome',
  '/posts/blog1.html': 'Web 3.0, AI, and the Future of the Internet',
  '/projects/project1.html': 'MoodE : Mood Based Environment Development',
};

function generateBreadcrumbs() {
  const breadcrumbContainer = document.querySelector('.breadcrumbs');
  const pathSegments = currentPage.split('/').filter(segment => segment !== '');

  let breadcrumbPath = '<a href="/">home</a>';

  if (currentPage === '/posts/post.html') {
    breadcrumbPath += ` / <a href="/posts/post.html">posts</a>`;
  } else {
    for (let i = 1; i < pathSegments.length; i++) {
      const path = `/${pathSegments.slice(0, i + 1).join('/')}`;
      let pageName = pageNames[path] || pathSegments[i];

      if (path === '/posts/blog1.html') {
        breadcrumbPath +=
            ` / <a href="/posts/post.html">posts</a> / ${pageName}`;
      } else {
        breadcrumbPath += ` / <a href="${path}">${pageName}</a>`;
      }

      if (path === '/projects/project1.html') {
        breadcrumbPath +=
            ` / <a href="/projects/project.html">projects</a> / ${pageName}`;
      } else {
        breadcrumbPath += ` / <a href="${path}">${pageName}</a>`;
      }
    }
  }

  breadcrumbContainer.innerHTML = breadcrumbPath;
}

generateBreadcrumbs();
