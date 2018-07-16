import React from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends React.Component{

  render(){
    return(
    <div className="Footer">
      <div className="footer-column">
        <h3 >My Lineup App</h3>
        <p>Made with ❤️ by <strong>Matthew Thorry</strong>, 2018 with Redux, React and Ruby on Rails</p>
      </div>
      <div className="footer-column">
        <h3>GitHub Repos</h3>
        <div >
          <a href="https://github.com/mthorry/tv-lineup-app" className="item" target="_blank">Main Repo</a><br/>
          <a href="https://github.com/mthorry/tv-lineup-front-demo" className="item" target="_blank">Frontend Demo</a><br/>
          <a href="https://github.com/mthorry/tv-lineup-back-demo" className="item" target="_blank">Backend Demo</a><br/>
        </div>
      </div>
      <div className="footer-column">
        <h3>Want More?</h3>
        <p>See some of my professional accomplisments on <a href="https://www.linkedin.com/in/mthorry" target="_blank">LinkedIn</a>.</p>
        <p>💌 Shoot me an <a href="mailto:mthorry@gmail.com?Subject=Nice%20app!" target="_top">email</a></p>
      </div>
    </div>
    )
  }
}
export default Footer
