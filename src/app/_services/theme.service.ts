import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private isLightTheme: boolean = localStorage.getItem('isLightTheme') === 'true';

  constructor() {
    this.applyTheme();
  }

  toggleTheme(isLightTheme: boolean) {
    this.isLightTheme = isLightTheme;
    this.saveTheme();
    this.applyTheme();
  }

  private applyTheme() {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(this.isLightTheme ? 'light-theme' : 'dark-theme');
  }

  private saveTheme() {
    localStorage.setItem('isLightTheme', this.isLightTheme.toString());
  }
}