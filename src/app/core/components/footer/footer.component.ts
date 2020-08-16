import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="footer-main_outer">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <h5> Why Zenoti? </h5>
                    <p class="foot_p"> Elevate your customer experience
                        Unify your brand & operations
                        Automate with AI</p>
                </div>
                <div class="col-md-4">
                    <h5> Products </h5>
                    <ul class="footer-list">
                        <li><a href="javascript:;">Appointments</a></li>
                        <li><a href="javascript:;">Billing & Payments</a></li>
                        <li><a href="javascript:;">Reporting & Analytics</a></li>
                        <li><a href="javascript:;">Marketing</a></li>
                        <li><a href="javascript:;">Employees</a></li>
                        <li><a href="javascript:;">Inventory</a></li>
                        <li><a href="javascript:;">All product videos</a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <!-- <h4> Customers </h4> -->
                    <ul class="footer-list footer-list_z">
                        <li><a href="javascript:;" class="" style="font-size:20px;font-weight:700">Customers</a></li>
                        <li><a href="javascript:;">About Us</a></li>
                        <li><a href="javascript:;">Press</a></li>
                        <li><a href="javascript:;">Careers</a></li>
                        <li><a href="javascript:;">Contact Us</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="copyright-footer">
            <ul class="copyright-footer-list mb-0">
                <li> <a href="javascript:;"> Privacy Policies & Cookies </a></li>
                <li> Legal </li>
                <li> All Content Copyright 2020 </li>
                <li> All Rights Reserved. </li>
            </ul>
        </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
