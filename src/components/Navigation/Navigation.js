import React from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.scss";

const Navigation = () => {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <NavLink
            exact
            to={"/"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Start
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_1"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 1
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_2"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 2
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_3"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 3
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_4"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 4
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_5"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 5
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_6"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 6
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_7"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 7
          </NavLink>
        </li>
        <li className="navigation__item">
          <NavLink
            exact
            to={"/example_8"}
            className="navigation__link"
            activeClassName="navigation__link--active"
          >
            Example 8
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
