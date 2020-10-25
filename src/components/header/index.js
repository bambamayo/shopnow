import React from "react";
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
  return <p className="text-red-600">Navigationnnnnn</p>;
};
