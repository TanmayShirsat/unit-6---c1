import { title } from "process";
import React from "react";
import { link, NavLink } from "react-router-dom";

const links = [
  {
    title: "Home",
    link: "/",
    id: "header-link-home",
  },
  {
    title: "About",
    to: "/about",
    id: "header-link-about",
  },
  {
    title: "Movies",
    to: "/movies",
    id: "header-link-movies",
  },
];
export const Navbar = () => {
  return (
    //map through the
    <>
      {links.map(({ title, to }, index) => {
        return (
          <NavLink key={index} style={{ padding: "10px" }} to={to}>
            {title}
          </NavLink>
        );
      })}
    </>
  );
};
