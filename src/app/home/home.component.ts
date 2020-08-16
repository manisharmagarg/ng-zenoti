import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      
    <section data-aos="fade-down">
        <div class="banner-outer">
            <div class="container">
                <div class="banner-inner-main">
                    <div class="banner-inner_div">
                        <div class="left-banner">
                            <h1> The best salons,<br> spas & med-spas <br>trust only Zenoti </h1>
                            <p> A complete cloud platform for big, growing and ambitious brands in the beauty & wellness
                                industry.</p>
                            <div class="banner-btns">
                                <a href="javascript:;" class="watch-btn_g"> Watch Video </a>
                                <a href="javascript:;" class="know_btn_w"> Know more </a>
                            </div>
                        </div>
                    </div>
                    <div class="banner-inner_div">
                        <div class="right-banner">
                            <img src="assets/images/banner-right_img.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="">
        <div class="brand-outer">
            <div class="container">
                <div class="row">
                    <div class="col-md-11 offset-md-1">
                        <div class="custom-heading_sec text-center mb-4">
                            <h2> 100+ brands with 10,000+ outlets in over 50 countries are powered by Zenoti.</h2>
                            <p> And the knowledge we have gained by this, helps us help you better. </p>
                        </div>
                    </div>
                </div>
                <div class="slide-outer">
                    <div class="center-slider">


                     <ngx-slick-carousel class="carousel" #slickModal="slick-carousel" [config]="slideConfig" (init)="slickInit($event)"
                      (breakpoint)="breakpoint($event)" (afterChange)="afterChange($event)" (beforeChange)="beforeChange($event)">

                      <div ngxSlickItem *ngFor="let slide of slides" class="slide">

                        <div class="slider_div">
                            <div class="brand-box box-wax">
                                <div class="brand-img_div">
                                    <img src="assets/images/logo-b1.png" alt="">
                                </div>
                                <p> Dave Mortensen scaled Anytime Fitness to 4,000+ locations and has ambitious goals
                                    for
                                    Waxing The City. Hear why Zenoti is the right partner for his business. </p>

                                <div class="down_img d-flex mt-4">
                                    <div class="video-div_img video-img_overlay">
                                        <a href="javascript:;">
                                            <img src="assets/images/video-img1.png" alt="" class="hvr_img">
                                            <img src="assets/images/play-icon.png" alt="" class="play_v">
                                        </a>
                                    </div>
                                    <img src="assets/images/wax1.png" alt="" class="right-down_img">
                                </div>
                            </div>
                        </div>
                      </div>
                      </ngx-slick-carousel>
                    </div>
                </div>

                <div class="brand-center_b text-center">
                    <a href="javascript:;" class="green-btn"> See all our customers </a>
                </div>
                <div class="bottom-layer_div">
                    <img src="assets/images/down-arrow.png" alt="">
                    <p> ...or. explore what Zenoti can do for you </p>
                    <img src="assets/images/down-arrow.png" alt="">
                </div>

            </div>
        
        </div>
    </section>

    <section data-aos="fade-down" class="girl-section">
        <div class="container">
            <div class="">
                <div class="center-content">
                    <div class="custom-girl_sec custom-head">
                        <h2> Your customers swear by your service.
                            But do they bond with your brand? </h2>
                    </div>

                </div>
                <div class="right-girl">
                    <img src="assets/images/girl-right.png" alt="">
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="elevate-section">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="elevate-content">
                        <h3> Your customers swear by your service.
                            But do they bond with your brand? </h3>
                        <div class="custom-head custom-content">
                            <h2> Elevate your
                                customer experience </h2>
                            <p> Zenoti's technology provides a magical experience
                                to your customer in every single stage of their
                                interaction with your brand.</p>
                        </div>

                    </div>
                    <div class="banner-btns">
                        <a href="javascript:;" class="watch-btn_g"> Watch Video </a>
                        <a href="javascript:;" class="know_btn_w"> Know more </a>
                    </div>
                </div>

                <div class="elevate-girl">
                    <img src="assets/images/girl.png" alt="" class="girl-img_circle">
                    <div class="tags-arrow">
                        <img src="assets/images/book-a.png" alt="" class="book-arrow">
                        <img src="assets/images/visit-a.png" alt="" class="visit-arrow">
                        <img src="assets/images/reflect-a.png" alt="" class="reflect-arrow">
                        <img src="assets/images/engage-a.png" alt="" class="engage-arrow">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="house-first_sec">
        <div class="container">
            <div class="custom-girl_sec custom-head">
                <h2> Being everywhere <br> need not mean <br> being all over the place </h2>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="house-first_sec house-first_sec2">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="elevate-content">
                        <h3> Being everywhere <br>
                            need not mean <br>
                            being all over the place </h3>
                        <div class="custom-head">
                            <h2> Unify your brand </h2>
                            <p> Zenoti helps you grow faster while
                                ensuring that you maintain consistency
                                across all your outlets. </p>
                        </div>

                    </div>
                    <div class="banner-btns">
                        <a href="javascript:;" class="watch-btn_g"> Watch Video </a>
                        <a href="javascript:;" class="know_btn_w"> Know more </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="circle-color_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-10">
                    <div class="oneline-text">
                        <h2> Say hello to your star employee – Data. </h2>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="automate_sec">
        <div class="container">
            <div class="row">
                <div class="col-md-6 center-div">
                    <div class="automate-content">
                        <div class="custom-head">
                            <p>Say hello to your star employee – Data. </p>
                            <h2> Automate with A.I. </h2>
                            <p> Zenoti’s harnesses the power of artificial intelligence to help you make the right
                                decisions for your business </p>
                        </div>

                        <div class="banner-btns">
                            <a href="javascript:;" class="watch-btn_g"> Watch Video </a>
                            <a href="javascript:;" class="know_btn_w"> Know more </a>
                        </div>
                    </div>

                </div>
                <div class="col-md-6">
                    <img src="assets/images/brain.png" alt="" class="brain-img">
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="product-panel_sec center-div padding-top">
        <div class="container">
            <div class="row">
                <div class="col-md-12 ">
                    <div class="custom-heading_center">
                        <h2 class="big-head_center">If you need it, we do it.</h2>
                        <p class=""> Zenoti takes care of every aspect of your business, <br>
                            so you can focus on what matters the most – helping people & changing lives. </p>
                    </div>

                    <div class="row icons-div_b">
                        <div class="col-md-2 icons-inner_b">
                            <div class="icon-img_div">
                                <img src="assets/images/icon-b1.png" alt="" class="">
                                <span class="icon-img_hvr color-bg1">
                                    <a href="javascript:;" class="learn-btn"> Learn more </a>
                                </span>
                            </div>
                            <h5> Appointments </h5>
                        </div>
                        <div class="col-md-2 icons-inner_b">
                            <div class="icon-img_div">
                                <img src="assets/images/icon-b2.png" alt="" class="">
                                <span class="icon-img_hvr color-bg2">
                                    <a href="javascript:;" class="learn-btn"> Learn more </a>
                                </span>
                            </div>
                            <h5> Billing &
                                Payments </h5>
                        </div>
                        <div class="col-md-2 icons-inner_b">
                            <div class="icon-img_div">
                                <img src="assets/images/icon-b3.png" alt="" class="">
                                <span class="icon-img_hvr color-bg3">
                                    <a href="javascript:;" class="learn-btn"> Learn more </a>
                                </span>
                            </div>
                            <h5> Reporting &
                                Analytics </h5>
                        </div>
                        <div class="col-md-2 icons-inner_b">
                            <div class="icon-img_div">
                                <img src="assets/images/icon-b4.png" alt="" class="">
                                <span class="icon-img_hvr color-bg4">
                                    <a href="javascript:;" class="learn-btn"> Learn more </a>
                                </span>
                            </div>
                            <h5> Marketing </h5>
                        </div>
                        <div class="col-md-2 icons-inner_b">
                            <div class="icon-img_div">
                                <img src="assets/images/icon-b5.png" alt="" class="">
                                <span class="icon-img_hvr color-bg5">
                                    <a href="javascript:;" class="learn-btn"> Learn more </a>
                                </span>
                            </div>
                            <h5> Employees </h5>
                        </div>
                        <div class="col-md-2 icons-inner_b">
                            <div class="icon-img_div">
                                <img src="assets/images/icon-b6.png" alt="" class="">
                                <span class="icon-img_hvr color-bg6">
                                    <a href="javascript:;" class="learn-btn"> Learn more </a>
                                </span>
                            </div>
                            <h5> Inventory </h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="business-shop_sec center-div">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="custom-heading_center custom-head">
                        <h2>Your business is unique. And so is our solution for you.</h2>
                        <p class="custom-center_p"> National chains & exclusive boutiques. Nail studios & skin clinics.
                            Walk-in salons and resort spas.
                            Zenoti’s software is tried, tested and trusted by every type of brand. </p>
                    </div>

                    <div class="row shop-div_b">
                        <div class="col-md-4 shop-inner_b">
                            <a href="javascript:;">
                                <img src="assets/images/shop1.png" alt="" class="">
                            </a>
                        </div>
                        <div class="col-md-4 shop-inner_b">
                            <a href="javascript:;">
                                <img src="assets/images/shop2.png" alt="" class="">
                            </a>
                        </div>
                        <div class="col-md-4 shop-inner_b">
                            <a href="javascript:;">
                                <img src="assets/images/shop3.png" alt="" class="">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="team_sec center-div">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="team-text_center">
                        <h2 class="big-head_center">Our software works for you. <br>
                            Our team works with you.</h2>
                        <p class="cu"> Zenoti's expert consultants, with vast industry experience, help you identify
                            market opportunities
                            and power your way to growth. All the while ensuring that your business is streamlined and
                            profitable. </p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section data-aos="fade-down" class="partners_sec center-div">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="custom-heading_center custom-head">
                        <h2>Your partners are our partners</h2>
                        <p class="custom-center_p">Zenoti partners with leading global brands
                            so you can easily and safely integrate with your existing third-party solutions.</p>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="col-md-9">
                    <div class="partner-div">
                        <h6> Payroll & Accounting </h6>
                        <div class="partner-inner">
                            <div class="partner-logo">
                                <a href="javascript:;">
                                    <img src="assets/images/partner1.png" alt="" class="">
                                </a>
                            </div>
                            <div class="partner-logo logo-border">
                                <a href="javascript:;">
                                    <img src="assets/images/partner2.png" alt="" class="">
                                </a>
                            </div>

                            <div class="partner-logo">
                                <a href="javascript:;">
                                    <img src="assets/images/partner3.png" alt="" class="">
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-4">
                        <div class="col-md-4">
                            <div class="partner-div">
                                <h6> PMS </h6>
                                <a href="javascript:;">
                                    <img src="assets/images/partner4.png" alt="" class="">
                                </a>

                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="partner-div">
                                <h6> Ecommerce </h6>
                                <a href="javascript:;">
                                    <img src="assets/images/partner5.png" alt="" class="">
                                </a>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="partner-div">
                                <h6> VOIP </h6>
                                <a href="javascript:;">
                                    <img src="assets/images/partner5.png" alt="" class="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="partner-div">
                        <h6> Referral Partners </h6>
                        <div class="partner-inner_z">
                            <div class="partner-logo logo-border_z">
                                <a href="javascript:;">
                                    <img src="assets/images/partner6.png" alt="" class="">
                                </a>
                            </div>
                            <div class="partner-logo">
                                <a href="javascript:;">
                                    <img src="assets/images/partner6.png" alt="" class="">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="expert-sec center-div">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <h2 class="big-head_center">Switching to Zenoti is a breeze</h2>
                    <p class="custom-center_p">Our expert service team will work with you to
                        rapidly migrate your data and transition
                        your employees, so you can quickly enjoy the
                        full power of Zenoti.</p>
                </div>
                <div class="right-girl">
                    <img src="assets/images/customer-girl.png" alt="">
                </div>

            </div>
        </div>
    </section>

    <section data-aos="fade-down" class="form-sec center-div section-space">
        <div class="container">
            <div class="row">
                <div class="col-md-4 center-div">
                    <div class="form-text">
                        <h2> See us in action. </h2>
                        <p> We'd love to demonstrate
                            what we can do for you.
                            Simply fill in this form,
                            and we'll call you within 24 hours
                            to set up a demo. </p>
                    </div>
                </div>

                <div class="col-md-8">
                    <div class="contact-form">
                        <form>
                            <div class="form-inner d-flex">
                                <span>
                                    <input type="text" class="form-input" placeholder="First Name">
                                </span>
                                <span>                
                                    <input type="text" class="form-input" placeholder="Last Name">
                                </span>
                            </div>
                            <div class="form-inner d-flex">
                                <span>
                                    <input type="text" class="form-input" placeholder="Email">
                                </span>
                                <span>
                                    <input type="text" class="form-input" placeholder="Phone">
                                </span>
                            </div>
                            <div class="form-inner d-flex">
                                <span>
                                    <input type="text" class="form-input" placeholder="Business Name">
                                </span>
                                <span>
                                    <input type="text" class="form-input" placeholder="No. of Centers">
                                </span>
                            </div>
                            <div class="form-inner d-flex">
                                <span>
                                    <input type="text" class="form-input" placeholder="No. of service provider">
                                </span>
                                <span>
                                    <input type="text" class="form-input" placeholder="Your current software">
                                </span>
                            </div>
                            <div class="form-inner d-flex">
                                <textarea title="Comments" placeholder="Comments"> </textarea>
                            </div>
                                <div class="rqst-btn">
                                    <div class="g-recaptcha" data-sitekey="6LcePAATAAAAAGPRWgx90814DTjgt5sXnNbV5WaW"></div>
                                    <a href="javascript:;"> Request a free demo </a> 
                                </div> 
                                              
                                                        
                                  </form>
                       
                        
                    </div>
                </div>
            </div>
        </div>
    </section>


  `,
  styles: []
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  title = 'ngSlick';
  slides = [342, 453, 846, 855, 234, 564, 744, 243];

  slideConfig = {
    "centerMode": true, 
    "slidesToShow": 3,
    "nextArrow": "<div class='nav-btn next-slide'></div>",
    "prevArrow": "<div class='nav-btn prev-slide'></div>",
  };

  addSlide() {
    
  }

  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }

  slickInit(e) {
   
  }

  breakpoint(e) {
    
  }

  afterChange(e) {
    
  }

  beforeChange(e) {
    
  }
}
