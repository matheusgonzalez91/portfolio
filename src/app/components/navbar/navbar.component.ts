import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDarkMode: boolean;
  isMenuOpen: boolean = false;

  constructor(private darkMode: DarkmodeService, private router: Router) {
    this.isDarkMode = this.darkMode.isDarkMode();
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkMode.setDarkMode(this.isDarkMode);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      )
      .subscribe((event: NavigationEnd) => {
        const fragment = event.url.split('#')[1];
        if (fragment) {
          this.scrollTo(fragment);
          this.removeFragment();
        }
      });
  }

  scrollTo(fragment: string): void {
    const element = document.getElementById(fragment);
    if (element) {
      const offset = 200; // Altura do cabeçalho, se houver
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }


  removeFragment(): void {
    history.replaceState(null, '', window.location.pathname);
  }
}
