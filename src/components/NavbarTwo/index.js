import {Component} from 'react'
import { FaCircle } from "react-icons/fa";
import { CiLight } from "react-icons/ci";
import "./index.css"
class NavbarTwo extends Component {
    render(){
        return(
            <div className="top_nav_content">
                <div className="logo_container">
                    <img alt="logo" className="log" src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEixXZm3Oa~HQGQbPCaHtUvTwKiYNl3z3-96HB4DdYWCyOumtzRcRE6Uxwepwhw1HWCom60ZKU6oZTQTXBYbpdGQHqy1UPQrELDx8qrQSla7EmAYFd~~qzRmBLzxVYXUtpYhNMv2Dmv-vSJBugbZSBf5B38s0R023vuHEW~vZ~~IWlLRSzMMSwCV04Xl9NfaGRCyDbWgu1zdQoSbi7o1SQ5NtcOQDHNkPsn7t7KHJqr4zYDzuerqAJt~E-LjpERfNhZZCYIiHmgMrSuieYwOuYVgO0t8IZHKG5vpvA8xh0iZYmbGO1O122WausqmAux7f899JmutovkNG5J47UeSBA__"/>
                </div>
                <div className="nav_bar">
                        <h1 className="one_box_text">onebox</h1>
                   
                    <div className="edge_content">
                        <div className="theme_btns_container">
                            <button className="faCircle_btn">
                                <FaCircle />
                            </button>
                            <button className="cilight_btn">
                                <CiLight />
                            </button>
                        </div>
                        <select >
                            <option className="workspace">Tim's Workspace</option>
                        </select>
                    </div>
                </div>
            </div>
        )
    }
}

export default NavbarTwo