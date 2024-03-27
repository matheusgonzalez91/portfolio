import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperiencesComponent } from './components/experiences/experiences.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {path: '', component: NavbarComponent},
  {path: '', component: HomeComponent},
  {path: '', component: AboutComponent},
  {path: '', component: ProjectsComponent},
  {path: '', component: ExperiencesComponent},
  {path: '', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
