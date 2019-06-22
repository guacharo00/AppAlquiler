import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NoPageComponent } from './shared/no-page/no-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PropiedadesComponent } from './pages/propiedades/propiedades.component';
import { NosotrosComponent } from './pages/nosotros/nosotros.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import { SearchBoxComponent } from './shared/search-box/search-box.component';
import { FooterComponent } from './shared/footer/footer.component';
import { ValoresComponent } from './shared/valores/valores.component';
import { ContentComponent } from './pages/contenido/contenido.component';
import { PaginationComponent } from './shared/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NoPageComponent,
    HomeComponent,
    PropiedadesComponent,
    NosotrosComponent,
    ContactoComponent,
    NavbarComponent,
    SlideshowComponent,
    SearchBoxComponent,
    FooterComponent,
    ValoresComponent,
    ContentComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
