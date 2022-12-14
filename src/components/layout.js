import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ location, title, children, isFullScreen }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;
  let header;

  // If it's a 'full screen' page, don't show the header and footer.
  if (isFullScreen) {
    return (
      <div className="body-full-screen-wrapper" data-is-root-path={isRootPath}>
        {children}
      </div>
    );
  }

  if (isRootPath) {
    header = (
      <header id="navbar">
          <Link className="logo" to="/">
            <img src="logo.png" alt="logo" className="logo1" />
          </Link>
          <nav id="nav">
              <ul class="nav__links">
                  <li>
                    <Link to="/" className="cta">
                      Home<i class="fas fa-home"></i>
                    </Link>
                  </li>
              </ul>
          </nav>
      </header>
    );
  } else {
    header = (
      <header></header>
    );
  }

  return (
    <div className={location}>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
