import React from "react";

export default function Footer({ siteTitle }) {
  return (
    <footer className="flex p-2 bg-black text-white text-sm border-t-2 border-red-600 justify-center">
      &copy; {siteTitle}, {new Date().getFullYear()}
    </footer>
  );
}
