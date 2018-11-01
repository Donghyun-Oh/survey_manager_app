import React, { Component } from "react";
import { connect } from "react-redux";
import {NavLink} from 'react-router-dom'
import PropTypes from "prop-types";
import { toggleMenu } from "../../actions";


const SidebarUI = ({menus=[], onMenuToggle=f=>f}) => {
  const _onToggle = (e, id) => {
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
                    
                    {menu.router ?  
                      <NavLink to={menu.router} activeClassName="active"><i className={"fa fa-" + menu.icon} />{menu.name}</NavLink>
                    :<a href="#">
                      <i className={"fa fa-" + menu.icon} />
                      {menu.name}
                    </a>}

                    
                      {menu.submenus ? 
                      <ul className="list-unstyled navbar-sub-list js-sub-list">
                        {menu.submenus.map( (menu) => {
                          return (
                            <li key={menu.id}>
                              <NavLink to={menu.router} activeClassName="active">{menu.name}</NavLink>
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

export const Sidebar = connect(
  (state) => {
    return ({
      menus : [...state.menus].sort()
    })
  },
  (dispatch) => {
    return({
      onMenuToggle(id){
        dispatch(toggleMenu(id))
      }
    })
  }
)(SidebarUI)

export default Sidebar;
