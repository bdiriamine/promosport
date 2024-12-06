import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private translateServ: TranslateService) { }

  ngOnInit(): void {
  }
  switchLang(val: string) {
    console.log(val);
    this.translateServ.use(val);
  }
}
