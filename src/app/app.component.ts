import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cocktail-app';
  currentTheme: string;
  currentRoute: string | undefined;

  constructor(private router: Router) {
    this.currentTheme = localStorage.getItem('currentTheme') || 'light';
    this.applyTheme();
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      // Update the currentRoute variable when navigation ends
      this.currentRoute = event.url;
      console.log(this.currentRoute);
      
    });
    
    
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

  // Method to check if the current route is the item-detail page
  isItemDetailPage(): boolean {
    return false
  }

  closeItemDetail(): void {
    // Implement logic to navigate back or close the item-detail page
    // For example, you can use router.navigate or window.history.back
  }
}
