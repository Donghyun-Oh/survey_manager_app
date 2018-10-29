import React, { Component } from "react";
import {NavLink} from 'react-router-dom'
import PropTypes from "prop-types";


const Sidebar = ({menus=[], onMenuToggle=f=>f}) => {
  const _onToggle = (e, id) => {
    //console.log("_onToggle", e);
    e.preventDefault()
    onMenuToggle(id)
    jQuery(e.target).parent().find(".navbar-sub-list").slideToggle("250");
  }
  return (
    <div className="menu-sidebar d-lg-block">
      <div className="logo">
        <a href="#">
          <img src="images/logo.png" alt="설문관리시스템" />
        </a>
      </div>
      <div className="menu-sidebar-content">
        <nav className="navbar-sidebar">
          <ul className="list-unstyled navbar-list">
            {
              menus.map( (menu) => {
                return (
                  <li key={menu.id} className={(menu.active ? "active " : "") + (menu.submenus ? "has-sub" : "") }
                    onClick={ (e) => {_onToggle(e, menu.id)}}>
                    <a href="#">
                      <i className={"fa fa-" + menu.icon} />
                      {menu.name}
                    </a>
                      {menu.submenus ? 
                      <ul className="list-unstyled navbar-sub-list js-sub-list">
                        {menu.submenus.map( (menu) => {
                          return (
                            <li key={menu.id}>
                              <NavLink to={menu.router} activeClassName="active">{menu.name}</NavLink>
                              {/* <a href="/#/Events">{menu.name}</a> */}
                              {/* <Link to={menu.router}>{menu.name}</Link> */}
                            </li>
                          )
                        })}
                      </ul>
                      :""}
                  </li>

                )
              })
            }
          </ul>
        </nav>
      </div>
    </div>
  );
};
// Sidebar.propTypes = {
//     colors: PropTypes.array,
//     onRate: PropTypes.func,
//     onRemove: PropTypes.func
// }
export default Sidebar;
