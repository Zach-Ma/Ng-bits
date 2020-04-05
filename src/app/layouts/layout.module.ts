import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


// TODO fix fontawesome import error
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

const MaterialModule = [
  MatSidenavModule,
  MatButtonModule,
  MatListModule,
  MatTooltipModule,
  MatToolbarModule,
  MatIconModule,
  MatMenuModule
]

@NgModule({
  declarations: [HomeComponent, SidenavComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    RouterModule
    // FontAwesomeModule,
    // FaIconLibrary
  ], exports: [
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule {
  // constructor(private library: FaIconLibrary) {
  //   library.addIcons(
  //     faSquare,
  //     faCheckSquare,
  //     farSquare,
  //     farCheckSquare,
  //     faStackOverflow,
  //     faGithub,
  //     faMedium);
  // }
}
