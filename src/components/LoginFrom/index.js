//import { GoogleLogin } from '@react-oauth/google';
import { useGoogleLogin } from '@react-oauth/google';
import {Redirect} from 'react-router-dom'
import {useState} from 'react'
import Cookies from 'js-cookie'

import './index.css';


const LoginFrom =props=>{
    const [accessToken,setAccessToken]=useState(null)
    const login = useGoogleLogin({
        onSuccess: tokenResponse =>
            setAccessToken(tokenResponse.access_token)
        
      });
      const {history} =props
      Cookies.set('jwt_token', accessToken, {
        expires: 30,
      })
      history.replace('/')
        if (accessToken !== undefined) {
            return <Redirect to="/" />
        }
        const token = Cookies.get('jwt_token')
        if (token !== undefined) {
            return <Redirect to="/" />
            }
        else{
        return (
                
                <div className="main_container">
                    
                    <div className="title_content">
                        <img alt="Reachindex log" className="log_img" src="https://s3-alpha-sig.figma.com/img/37f3/2626/1680d9613629542a2474f79f92f7c022?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pEixXZm3Oa~HQGQbPCaHtUvTwKiYNl3z3-96HB4DdYWCyOumtzRcRE6Uxwepwhw1HWCom60ZKU6oZTQTXBYbpdGQHqy1UPQrELDx8qrQSla7EmAYFd~~qzRmBLzxVYXUtpYhNMv2Dmv-vSJBugbZSBf5B38s0R023vuHEW~vZ~~IWlLRSzMMSwCV04Xl9NfaGRCyDbWgu1zdQoSbi7o1SQ5NtcOQDHNkPsn7t7KHJqr4zYDzuerqAJt~E-LjpERfNhZZCYIiHmgMrSuieYwOuYVgO0t8IZHKG5vpvA8xh0iZYmbGO1O122WausqmAux7f899JmutovkNG5J47UeSBA__"/>
                    </div>
                    <div className="loging_from_content">
                        <div className="login_from">
                            <div className="loging_heading">
                            <h1 className="create_heading_title">Create a new account</h1>
                                <div className="google-Content">
                                    <button onClick={() => login()} className="googlelogin_btn">
                                        <img alt="google logo" className="google_logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTne1WTynbZs2Lo2wnKRIsxwELeBVjC2bqdOQ&s"/>
                                        <h1 className="heading_sign_up">Log in with Goole</h1>
                                    </button>;
                                </div>
                                <div className="create_content">
                                    <button className="create_btn">
                                        Create an Account
                                    </button>
                                </div>
                                <div className="already_have_account_content">
                                        <div className="content">
                                        <h1 className="already_have_account">Already have an account?</h1>
                                        <h1 className="Sign_in">Sign In</h1>
                                        </div>
                                </div>
                                
                            </div>

                        </div>

                    </div>
                    <div className="service_content">
                        <p className="servicer_name">© 2023 Reachinbox. All rights reserved.</p>
                    </div>
                </div>
                
                )
            }
}


export default LoginFrom