import { trigger, style, animate, transition } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('slideDown', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)', opacity: 0 }),
        animate(
          '3.5s ease-out',
          style({ transform: 'translateY(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class HomeComponent {
  scrollToSobre(): void {
    const sobreSection = document.getElementById('sobre');
    if (sobreSection) {
      const offset = 200;
      const elementPosition = sobreSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition - offset;
      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

}
