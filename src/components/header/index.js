import React from "react";
import { Link } from "gatsby";
import { Helmet } from "react-helmet";

export default function Header({
  children,
  siteTitle,
  siteDescription,
  siteAuthor,
}) {
  return (
    <header>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta name="author" content={siteAuthor} />
      </Helmet>
      {children}
    </header>
  );
}

Header.Nav = function HeaderNav() {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <nav className="bg-black text-white">
      <div className="flex flex-wrap container justify-between mx-auto p-2">
        <Link
          to="/"
          className="flex items-center no-underline text-white text-2xl"
        >
          ShopNow
        </Link>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="md:hidden border border-white flex items-center px-3 py-2"
        >
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <g>
              <rect fill="none" height="22" width="22" y="-1" x="-1" />
            </g>
            <g>
              <title>Menu</title>
              <line
                y2="4.5"
                x2="18.7426"
                y1="4.5"
                x1="1.54282"
                strokeWidth="3.5"
                stroke="red"
                fill="none"
              />
              <line
                y2="10"
                x2="18.7426"
                y1="10"
                x1="1.54282"
                strokeWidth="3.5"
                stroke="green"
                fill="none"
              />
              <line
                y2="17.5"
                x2="18.7426"
                y1="17.5"
                x1="1.54282"
                strokeWidth="3.5"
                stroke="yellow"
                fill="none"
              />
            </g>
          </svg>
        </button>
        <div
          className={`${
            isExpanded ? `block` : `hidden`
          } md:flex md:items-center w-full md:w-auto ml-auto`}
        >
          <div className="text-lg font-bold mt-3 md:m-0">
            <Link
              to="/shop"
              activeClassName="text-red-600 underline"
              className="block p-1 md:px-4 md:inline-block"
            >
              Shop male
            </Link>
            <Link
              to="/shop"
              activeClassName="text-red-600 underline"
              className="block p-1 md:px-4 md:inline-block"
            >
              Shop female
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
