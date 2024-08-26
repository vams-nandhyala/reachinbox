import {Component} from 'react'
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { IoIosSend } from "react-icons/io";
import { IoReorderThree } from "react-icons/io5";
import { FaInbox } from "react-icons/fa";
import { MdBarChart } from "react-icons/md";
import "./index.css"
class NavbarOne extends Component {
    render(){
        return(
            <div className="nav_container">
                <div className="menu_container">
                    <div className="menu_content">
                        <div className="menu_list">
                            <div className="icon_content">
                                <CiHome className="icon"/>
                            </div>
                            <div className="icon_content">
                                <CgProfile className="icon"/>
                            </div>
                            <div className="icon_content">
                                <CiMail className="icon"/>
                            </div>
                            <div className="icon_content">
                                <IoIosSend className="icon"/>
                            </div>
                            <div className="icon_content">
                                <IoReorderThree className="icon"/>
                            </div>
                            <div className="icon_content">
                                <FaInbox className="icon"/>
                            </div>
                            <div className="icon_content">
                                <MdBarChart className="icon"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="user_profile_content">
                    <button className="profile">NV</button>
                </div>
            </div>
        )
    }
}

export default NavbarOne