import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'promosport';

  constructor(
    private translate: TranslateService) { }

  ngOnInit() {
    this.translate.addLangs(['ar', 'fr']);
    this.translate.setDefaultLang('fr');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use('fr');
  }
}
