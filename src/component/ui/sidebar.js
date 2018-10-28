import React, { Component } from "react";
import PropTypes from "prop-types";

/*
var arrow = $('.js-arrow');
arrow.each(function () {
  var that = $(this);
  that.on('click', function (e) {
    e.preventDefault();
    //that.find(".arrow").toggleClass("up");
    //that.toggleClass("open");
    that.parent().find('.js-sub-list').slideToggle("250");
  });
});
*/
const Sidebar = ({menus=[], onMenuToggle=f=>f}) => {
  //const {_menuitem} = state.refs
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
                              <a href="index.html">{menu.name}</a>
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
