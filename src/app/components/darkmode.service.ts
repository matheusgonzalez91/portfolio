import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  private darkMode = false;

  isDarkMode(){
    return this.darkMode;
  }

  setDarkMode(isDarkMode: Boolean){
    this.darkMode == isDarkMode;

    if(isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }
}
