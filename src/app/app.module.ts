import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { MenuComponent } from './menu/menu.component';
import { SignUpComponent } from './menu/sign-up/sign-up.component';
import { UserProfileComponent } from './menu/user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignUpComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
