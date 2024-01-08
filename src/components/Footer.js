import React from "react";
import logo from '../images/small_logo.png';
const Footer =()=>{
    return(
        <footer>
            <section>
                <div className="company-info">
                    <img src={logo} alt=''></img>
                    <p>We are a family owned Mediterraneran restaurant, focused on traditional recipes served with a modern twist.</p>
                </div>
                <div>
                    <h3>Important Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </div>

                <div>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address: <br/>123 NewYork, USA</li>
                        <li>Phone: <br/>01 211 123 123</li>
                        <li>Email: <br/>littlelemon@littlelemon.com</li>
                    </ul>
                </div>
                <div>
                    <h3>Social Media</h3>
                    <ul>
                        <li><a href="/">Facebook</a></li>
                        <li><a href="/">Instagram</a></li>
                    </ul>
                </div>
            </section>
        </footer>
    );
}

export default Footer;