import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logoColor = "#000";
  selectedLng !: string;
  status: boolean = false;
  
  constructor(
    private router: Router, 
    private translateServ: TranslateService,
    @Inject(DOCUMENT) private document: Document) {
    router.events.subscribe((val) => {
      if ((window.location.pathname == '/signup') || (window.location.pathname == '/signin')) this.logoColor = "#fff";
      else this.logoColor = "#000";
    })
  }

  ngOnInit(): void {
    this.selectedLng = "fr";
  }

  clickEvent() {
    this.status = !this.status;
  }

  switchLang(val: string) {
    this.translateServ.use(val);
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    htmlTag.dir = val === "ar" ? "rtl" : "ltr";
  }

}
