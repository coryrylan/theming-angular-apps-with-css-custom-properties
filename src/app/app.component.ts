import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemeService } from '../theme.service';
import { CardComponent } from '../card/card.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'my-app',
  standalone: true,
  providers: [ThemeService],
  includes: [CardComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent {
  darkTheme =  new FormControl(false);

  constructor(private themeService: ThemeService) {
    this.darkTheme.valueChanges.subscribe(value => {
      if (value) {
        this.themeService.toggleDark();
      } else {
        this.themeService.toggleLight();
      }
    });
  }
}
