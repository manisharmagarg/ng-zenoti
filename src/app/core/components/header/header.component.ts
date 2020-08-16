import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <header>
        <nav class="navbar navbar-expand-md nav-custom pt-0">
            <div class="container">
                <div class="nav-outer">
                    <a class="" routerLink="">
                        <img class="logo-img" src="assets/images/zenoti-logo.png" alt="logo">
                    </a>

                    <button class="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <!-- <div class="center-logo">
                    <a routerLink="">
                        <img class="logo-img" src="assets/images/logo1.png" alt="logo">
                    </a>
                </div> -->

                    <div class="collapse navbar-collapse nav-list" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-list-links">
                            <li class="nav-item">
                                <a class="nav-link" routerLink="customers">Customers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" routerLink="company">Company</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" routerLink="careers">Careers</a>
                            </li>
                        </ul>
                        <div class="nav-item free-btn">
                            <a class="nav-link" href="javascript:;">Free Demo</a>
                        </div>
                        <ul class="navbar-nav ml-auto social-header_icons ">
                            <li> Follow us on </li>
                            <li> <a class="nav-lin" href="javascript:;"> <i class="fab fa-twitter twitter-icon"></i>
                                </a></li>
                            <li> <a class="nav-lin" href="javascript:;"> <i
                                        class="fab fa-facebook-square facebook-icon"></i> </a></li>
                            <li> <a class="nav-lin" href="javascript:;"> <i class="fab fa-instagram instagram-icon"></i>
                                </a></li>
                            <li> <a class="nav-lin" href="javascript:;"> <i
                                        class="fab fa-linkedin-in linkedin-icon"></i> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </header>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}
