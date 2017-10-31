import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Menu } from 'semantic-ui-react'

class Nav extends React.Component{

  handleLogout = () => {
    // localStorage.removeItem("jwtToken")
    // localStorage.removeItem("id")
    window.alert("No logout in Demo")
  }

  render(){
    return(
      <div className="navbar">
      <Menu color='teal' pointing secondary>
        <Menu.Item>
          <img src="http://d2trtkcohkrm90.cloudfront.net/images/emoji/apple/ios-10/256/television.png" alt="📺"/>
        </Menu.Item>
        <div className="right menu">
            <NavLink className="item" to="/search"> Search </NavLink>
            <NavLink className="item" to="/dash"> Dashboard </NavLink>
            <NavLink className="item" to="/shows"> My Shows </NavLink>
            <NavLink className="item" to="/lineup"> My Lineup </NavLink>
            <Dropdown item text='More'>
              <Dropdown.Menu>
                <NavLink className="item" to="/premieres"> Premieres </NavLink>
                <NavLink className="item" to="/trending"> Trending </NavLink>
                <NavLink className="item" to="/watching"> Most Watched </NavLink>
              </Dropdown.Menu>
            </Dropdown>
          </div>
      </Menu>
      </div>
    )
  }
}
export default Nav