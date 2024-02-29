import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktail-app';
  currentTheme: string;
  isDetailPage: boolean = false;

  constructor(private router: Router) {
    // Get current theme if exists (or set light)
    this.currentTheme = localStorage.getItem('currentTheme') || 'light';

    // Apply theme
    this.applyTheme();

    // Get current route and update view of close button
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = event.url;
        if (currentRoute !== '/item-list' &&
          currentRoute !== '/' &&
          currentRoute !== undefined) {
          this.isDetailPage = true;
        } else {
          this.isDetailPage = false;
        }
      }
    });
  }

  // Method to toggle between light and dark themes
  toggleTheme() {
    this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light'
    localStorage.setItem('currentTheme', this.currentTheme);
    this.applyTheme();
  }

  // Method to apply the selected theme to the body
  applyTheme() {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(`${this.currentTheme}-theme`);
  }

  // Method to navigate to the item-list page
  closeItemDetail(): void {
    this.router.navigateByUrl('/item-list');
  }
}
