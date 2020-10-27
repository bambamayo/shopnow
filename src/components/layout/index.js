import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import HeaderContainer from "../../containers/header";
import Footer from "../footer";

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          description
        }
      }
    }
  `);

  return (
    <div className="min-h-screen flex flex-col">
      <HeaderContainer
        siteTitle={data.site.siteMetadata.title}
        siteDescription={data.site.siteMetadata.description}
        siteAuthor={data.site.siteMetadata.author}
      />
      <main className="flex-grow mx-auto w-auto md:px-8 p-8">{children}</main>
      <Footer siteTitle={data.site.siteMetadata.title} />
    </div>
  );
}
