import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cocktail-app';
  currentTheme: string | undefined;

  constructor() {
    const storedTheme = localStorage.getItem('currentTheme');
    console.log(storedTheme);

    if (storedTheme !== null) {
      this.currentTheme = storedTheme;
    } else {
      this.currentTheme = 'light';
      localStorage.setItem('currentTheme', this.currentTheme);
    }

    this.toggleTheme();

  }

  ngOnInit(): void {
    // this.isLightTheme = true;
  }

  toggleTheme() {
    if (this.currentTheme === 'light') {
      document.body.classList.remove('dark-theme');
      document.body.classList.add(`light-theme`);
      this.currentTheme = 'dark'; 
      localStorage.setItem('currentTheme', 'light');
    } else {
      document.body.classList.remove('light-theme');
      document.body.classList.add(`dark-theme`);
      this.currentTheme = 'light';
      localStorage.setItem('currentTheme', 'dark');
    }
  }
  
}
