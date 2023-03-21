import React from "react";
import { Header } from "./Header";

export const Layout = ({ children, user }) => {
  return (
    <div>
      {/* header */}
      <Header user={user} />

      {/* main body */}
      <div className="main">{children}</div>

      {/* footer */}
      <footer className="mt-5 bg-dark text-light p-3 text-center">
        &copy; Copy right all reserver 2023
      </footer>
    </div>
  );
};
