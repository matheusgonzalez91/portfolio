import { Component } from '@angular/core';
import { DarkmodeService } from '../darkmode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isDarkMode: boolean;
  isMenuOpen: boolean = false;

  constructor(private darkMode: DarkmodeService) {
    this.isDarkMode = this.darkMode.isDarkMode();
  }

  toggleMode() {
    this.isDarkMode = !this.isDarkMode;
    this.darkMode.setDarkMode(this.isDarkMode);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
