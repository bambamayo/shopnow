import React from "react";

export default function Footer({ siteTitle }) {
  return (
    <footer>
      &copy; {siteTitle}, {new Date().getFullYear()}
    </footer>
  );
}
