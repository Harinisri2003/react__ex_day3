import React, { Component } from 'react'
import './Home.css'
export class Home extends Component {
  render() {
    return (
        <div>
        <section id="header">
     <nav>
         <a href=""><img src="https://clipground.com/images/cafe-logo-png-1.png"/> </a>
             <div class="nav-links"><br/><br/>
                 <ul>
                     <li><a href="/" >{this.props.name}</a></li>
                     <li><a href="#header1">{this.props.details}</a></li>
                     <li><a href="#header3">{this.props.menu}</a></li>
                     <li><a href="#header4">{this.props.cost}</a></li>
                 </ul>
            </div>
     </nav>
 <div class ="title">
     <br/><br/><h1>Harini's Cafe</h1><br/>
     <p>
        
     </p><br/><br/>Happiness is a small cozy cafe.<br/><br/>
    
 </div>
     
 </section>
 {/* About Section */}
 <section id="header1">
     <nav>
         <div class="headertext">
                <h2>
                 WELCOME to the cafe☕☕Sit a spell, Enjoy a cup
                 </h2><br/>
                 <div class="img2">
                     <img src="https://th.bing.com/th/id/OIP.WxlKGom2K5JT6x8Wv4B5kwHaHa?pid=ImgDet&rs=1" alt="" /><img src="https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?cs=srgb&dl=pexels-igor-starkov-1307698.jpg&fm=jpg" alt="" height={200} width={200}/><br/><br/>
                    
                 </div>
                 <h6><br/> Here, you can feel the real taste of freshness!
                 </h6><br/>
           <h6> <i>This is the best coffee in the town</i><br/><br/></h6> 
             <div>
                 {/* <a class="slots" href="https:/www.google.com" target="_blank">Check out the new arrivals now </a> */}
             </div> 
         </div>
     </nav>
 </section>
     {/* <Types/>    
     <Contact/> */}
     </div>
    )
  }
}

export default Home
