import React from "react";
import Header from "../components/header";

export default function HeaderContainer({
  siteTitle,
  siteDescription,
  siteAuthor,
}) {
  return (
    <Header
      siteTitle={siteTitle}
      siteDescription={siteDescription}
      siteAuthor={siteAuthor}
    >
      <Header.Nav />
    </Header>
  );
}
