import React from 'react';
import './footer.styles.scss';

const Footer = () => {
    return(
        <div class='box'>
    <div class='container'>
        <div class='row'>
            <div class='column'>
                <p class='heading'>aclothz</p>
                <a href="#" class='footerlink'>Who We Are</a>
                <a href="#" class='footerlink'>Terms & Conditions</a>
                <a href="#" class='footerlink'>Fees & Payments</a>
            </div>
            <div class='column'>
                <p class='heading'>Help</p>
                <a href="#" class='footerlink'>FAQ</a>
                <a href="#" class='footerlink'>Returns</a>
                <a href="#" class='footerlink'>Cancellations</a>
            </div>
            <div class='column'>
                <p class='heading'>Shop by</p>
                <a href="#" class='footerlink'>Men</a>
                <a href="#" class='footerlink'>Women</a>
                <a href="#" class='footerlink'>Hats</a>
                <a href="#" class='footerlink'>Jackets</a>
                <a href="#" class='footerlink'>Sneakers</a>
            </div>
            <div class='column'>
                <p class='heading'>Follow us</p>
                <a href="#" class='footerlink'>Facebook</a>
                <a href="#" class='footerlink'>Instagram</a>
                <a href="#" class='footerlink'>Twitter</a>
                <a href="#" class='footerlink'>Pinterest</a>
            </div>
        </div>
    </div>
</div>
    );
};

export default Footer;