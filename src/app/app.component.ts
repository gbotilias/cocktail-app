import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktail-app';
  currentTheme: string;

  constructor() {
    this.currentTheme = localStorage.getItem('currentTheme') || 'light';
    this.applyTheme();
  }

  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem('currentTheme', this.currentTheme);
    this.applyTheme();
  }

  applyTheme() {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${this.currentTheme}-theme`);
  }
}
