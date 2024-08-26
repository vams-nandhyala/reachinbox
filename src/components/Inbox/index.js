import {Component} from 'react' 
import {withRouter} from 'react-router-dom'
import NavbarOne from "../NavbarOne"
import NavbarTwo from "../NavbarTwo"
import Cookies from 'js-cookie'

import "./index.css"
class Inbox extends Component {
  
   logout=()=>{
    const {history} = this.props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
    renderEmptyContent=()=>{
      return (
            <div className="empty_content_container">
              <img alt="empty mails" src="https://photos.google.com/photo/AF1QipMFg9-j5wt8QS2DqCn7pyDATfDqf4IqAkZ9_H9a"/>
              <h1 className="heading">It’s the beginning of a legendary sales pipeline </h1>
              <p class="para">When you have inbound E-mails you’ll see them here</p>
              <button onClick={this.logout}>logout</button>
            </div>
      )
    }
    render() {
      return (
        <>
        <div className="main_container">
         <NavbarTwo/>
         <div className="buttom_content">
         <div>
          <NavbarOne/>
         </div>
          {this.renderEmptyContent()}
         </div>
         </div>
        </>

      )
    }
}

export default withRouter(Inbox)