import { Component } from '@angular/core';
import { TranslocoModule } from '@ngneat/transloco';
import { LanguageService } from './language.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TranslocoModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: []
})
export class AppComponent {
  constructor(private languageService: LanguageService) { }

  switchLanguage(language: string) {
    this.languageService.switchLanguage(language);
  }
}