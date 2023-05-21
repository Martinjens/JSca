import * as listeners from "./listeners/index.js";
import buildMenu from "./ui/common/buildMenu.js";
import renderPaginatedPosts from "./ui/common/posts/renderPaginatedPosts.js";

export default function router() {
  const pathname = window.location.pathname;
  console.log(pathname);

  buildMenu(pathname);

  switch (pathname) {
    case "/":
    case "/index.html":
      break;
    case "/":
    case "/auth/register.html":
      listeners.registerListener();
      break;
    case "/":
    case "/index.html":
      listeners.loginListener();
      break;
    case "/posts/":
    case "/posts/index.html":
      {
        const postList = renderPaginatedPosts();
        postList();
        listeners.loadMorePosts(postList);
      }
      break;
  }
}
