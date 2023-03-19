function footer() {
    return `
    
        <section class="section_A">
            <div class="footer_logo">
                <a href="index.html">
                    <img src="https://www.netmeds.com/assets/gloryweb/images/netmeds-footer-logo.svg" alt="">
                </a>
            </div>
            <div class="footer_description">
                <p>
                    Netmeds.com is one of India’s most trusted pharmacies, dispensing quality medicines at reasonable
                    prices to over 7
                    million happy customers – PAN India.
                </p>
            </div>
        </section>
        
        <section class="section_B">
            <div class="footer_lists">
                <ul class="company">
                    <h4>COMPANY</h4>
                    <li>About Ntemeds</li>
                    <li>Customer Speak</li>
                    <li>In the News</li>
                    <li>Career</li>
                    <li>Terms and Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Fees and Payment policy</li>
                    <li>Shipping and Delivery Policy</li>
                    <li>Return, Refund and Cancellation Policy</li>
                    <li>Contact</li>
                </ul>
                <ul class="shopping">
                    <h4>SHOPPING</h4>
                    <li> Browse by A-Z</li>
                    <li>Browse by Manufacturers</li>
                    <li>Health Articles</li>
                    <li>Offers / Coupons</li>
                    <li>FAQs</li>
                </ul>
                <ul class="social">
                    <h4>SOCIAL</h4>

                    <li>Patients Alike</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Youtube</li>
                    <li>Refer & Earn</li>
                </ul>
                <div class="subscribe">
                    <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
                    <p>Get a free subscription to our health and fitness tip and stay tuned to our latest offers</p>
                    <form>
                        <input type="email" placeholder="Enter your email address" class="Inp_Subscribe_Email" required>
                        <button type="submit" class="gobtn" onclick="subscribeToNetmedsClone()"></button>
                    </form>
                    <span class="span_subscribe">
                        <div class="errorsubs" style="display: none;">
                            <img src="https://cdn.iconscout.com/icon/free/png-64/attention-5763897-4827419.png" alt="">
                            Looks like you have already subscribed!
                        </div>
                        <div class="success" style="display: none;">
                            <img src="https://cdn.iconscout.com/icon/free/png-64/check-verified-successful-accept-tick-yes-success-2516.png"
                                alt="">
                            Thank you for your subscription.
                        </div>
                        <div></div>
                    </span>
                    <div class="images">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/play_store.png" alt="">
                        <img src="https://www.netmeds.com/assets/gloryweb/images/icons/app_store.png" alt="">
                    </div>
                    </ul>
                </div>
        </section>

        <section class="section_C">
            <a href="">
                <li>Medicine</li>
            </a>
            <a href="">
                <li>Wellness</li>
            </a>
            <a href="">
                <li>Lab Tests</li>
            </a>
            <a href="">
                <li>Beauty</li>
            </a>

            <li>Copyright© 2022. All Rights Reserved.</li>

        </section>
    
    `
}



export { footer };