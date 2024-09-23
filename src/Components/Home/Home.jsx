import React from 'react'
import "./Home.css"
import { FaSearch } from 'react-icons/fa'


const Home = () => {
  return (
  <div>
         <img
          src="../Assets/Image/banner.png"
          alt="First slide"
        />
        {/* <div className="inp">
          <input type="text" placeholder='  Job Title or Keyword' />
          <button><FaSearch id='search'/>
          Search</button>
        </div> */}
        <div className="banner2">
          <div className="item"><img src="../Assets/Logo/Dropbox.png" alt="" /></div>
          <div className="item"><img src="../Assets/Logo/Zoom.png" alt="" /></div>
          <div className="item"><img src="../Assets/Logo/Slack.png" alt="" /></div>
          <div className="item"><img src="../Assets/Logo/Spotify.png" alt="" /></div>
          <div className="item"><img src="../Assets/Logo/Coinbase.png" alt="" /></div>
        </div>
  </div>
  )
}

export default Home