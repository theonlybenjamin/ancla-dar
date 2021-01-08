import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ScrollHeaderDirective } from './directives/scroll-header.directive';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { GiveComponent } from './views/give/give.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbActiveModal, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NotAvalibleComponent } from './components/not-avalible/not-avalible.component';
import { CommonModule, LocationStrategy, PathLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScrollHeaderDirective,
    GiveComponent,
    CardComponent,
    FooterComponent,
    NotAvalibleComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, { anchorScrolling: 'enabled' }),
    NgbModalModule
  ],
  providers: [
    NgbActiveModal,
    {
      provide: LocationStrategy, useClass: PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
