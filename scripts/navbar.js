function navbar() {

    return `<div class="header">
            <div id="left"><a href="../index.html">
                <img src="https://nms-assets.s3-ap-south-1.amazonaws.com/images/cms/aw_rbslider/slides/1663609483_netmeds-new-logo.svg"
                    alt=""></a>
            </div> 
            <div id="mid" class="search_input">
                <input type="text" id="inp" placeholder="  Search for medicine & wellness Products...">
                <div class="sugg_box">
                </div>
                </div>
            <div id="right">
                
                <div class="header_rigth_ul">
                    <li><a href=""><img id="precription_img"
                                src="https://www.netmeds.com/assets/gloryweb/images/icons/upload_rx.svg"
                                alt="">
                            <div id="_1">Upload</div>
                        </a></li>
                    <li><a href="cart-page.html">
                    <img id="cart_img"
                    src="https://cdn.iconscout.com/icon/free/png-64/cart-grocery-store-shopping-shop-30488.png"
                    alt="">
                    <span class="cart_counter" >0</span>
                    <div id="_1">Cart</div>
                        </a></li>
                    <li><a class="profile_links"><img id="sign_in"
                    src="https://www.netmeds.com/assets/gloryweb/images/icons/profile_icon.svg" alt="">
                            <div id="_1" class="withoutlogin">Sign in / Sign Up</div>
                            <div id="_1" class="withlogin">Im </div>
                        </a></li>
                </div>
                <input type="checkbox" id="checkheader">
                <label for="checkheader" id="checkbtnheader"><i class="fas fa-bars"></i></label>
                <label for="checkheader" id="closebtnheader" style="display: none;"><i class="fas fa-bars"></i></label>
            </div>
        </div>

        <div class="navigatons">
        
                <div class="mid_nav_ul">
                <ul class="mid_nav_ul_a">
                <il id="medicine_list">
                <a href="Medicine.html">

                        <div><img id="logos"
                        src="https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/medicine.svg"
                                alt=""></div>
                        <div id="_12">Medicine<img id="dropdownbtn"
                            src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" alt="">
                            </div>
                            
                            </a>
                            <ul id="medicine_dd_list">
                            <li><a href="Medicine.html">All Medicines</a></li>
                        <li><a href="Medicine.html">Previously Ordered Products</a></li>
                        </ul>
                </il>

                <il id="wellness_list"><a href="Welln.html">
                        <div><img id="logos" src="https://www.netmeds.com/assets/gloryweb/images/icons/wellness.svg"
                                alt=""></div>
                        <div id="_12">Wellness</div>

                    </a></il>                
                </ul>
                <ul class="mid_nav_ul_b">
                <il id="labtest_list"><a href="lab.html">
                    <div><img id="logos"
                            src="https://www.netmeds.com/assets/gloryweb/images/icons/diagnostics.svg" alt="">
                    </div>
                    <div id="_12">Lab Tests</div>
                </a></il>


            <il id="beauty_list"><a href="productDetails.html">
                    <div><img id="logos" src="https://www.netmeds.com/assets/gloryweb/images/icons/beauty.svg"
                            alt="">
                    </div>
                    <div id="_12">Beauty
                        <img id="dropdownbtn"
                            src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" alt="">
                    </div>
                </a>
                <ul id="beauty_dd_list">
                    <li><a href="">Personal Care</a></li>
                    <li><a href="">Make-Up</a></li>
                    <li><a href="">Hair</a></li>
                    <li><a href="">Skin Care</a></li>
                    <li><a href="">Tools & Apliances</a></li>
                    <li><a href="">Mom & Baby</a></li>
                    <li><a href="">Fragrances</a></li>
                    <li><a href="">Men's Grooming</a></li>
                    </ul>
            </il>                
                </ul>
                <ul class="mid_nav_ul_c">
                <il id="healthcorner_list"><a href="productDetails.html">
                        <div><img id="logos"
                        src="https://www.netmeds.com/assets/version1663621997/gloryweb/images/icons/health-library.svg"
                                alt=""></div>
                                <div id="_12">Health Corner
                            <img id="dropdownbtn"
                            src="https://icons.veryicon.com/png/o/miscellaneous/docs/dropdown-2.png" alt="">
                            </div>
                    </a>
                    <ul id="healthcorner_dd_list">
                        <li><a href="">Health Library</a></li>
                        <li><a href="">PatientsAlike</a></li>
                        <li><a href="">Corona Awareness</a></li>
                    </ul>
                </il>                
                </ul>



                        
                        


                    

                </div>
            
        </div>

        <div class="lastnavigation">
            
                <div class="productpages_list">
                <ul class="productpages_list_a">
                <li><a href="productDetails.html">COVID Essentials</a></li>
                <li><a href=" productDetails.html">Diabetes</a></li>
                <li><a href="productDetails.html ">Eyewear</a></li>
                <li><a href=" productDetails.html">Ayush</a></li>
                <li><a href="productDetails.html">Ayurvedic</a></li>
                <li><a href=" productDetails.html">Homeopathy</a></li>
                </ul>
                <ul class="productpages_list_b">
                <li><a href="../../product_pages/product_pages_html/product_page_Fitness.html">Fitness</a></li>
                <li><a href="../../product_pages/product_pages_html/product_page_Mom&Baby.html">Moms & Baby</a></li>
                <li><a href="../../product_pages/product_pages_html/product_page_Devices.html">Devices</a></li>
                <li><a href="../../product_pages/product_pages_html/product_page_Surgical.html">Surgicals</a></li>
                <li><a href="">Sexual Wellness</a></li>
                <li><a href="../../product_pages/product_pages_html/product_page_Treatments.html">Treatment</a></li>
                </ul>
                </div>
            
                </div>`
}

export default navbar;



    //             <div class="maobile_navbar_btn">
    //     <ion-icon name="grid-outline" class="mobile_nav_icon"></ion-icon>
    // <ion-icon name="close-circle-outline" class="mobile_nav_icon"></ion-icon>
    // </div>