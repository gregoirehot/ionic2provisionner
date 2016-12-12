import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Pages
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { ExemplePage } from '../pages/exemple/exemple';
import { ExempleFormPage } from '../pages/exempleform/exempleform';
import { TabsPage } from '../pages/tabs/tabs';

import { UsersPage } from '../pages/users/users';
import { ReposPage } from '../pages/repos/repos';
import { OrganisationsPage } from '../pages/organisations/organisations';
import { FormPage } from '../pages/form/form';

// Pages details
import {UserDetailsPage } from '../pages/user-details/user-details';

// Providers
import { GithubUsers } from '../providers/github-users';


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ExemplePage,
    ExempleFormPage,
    TabsPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage ,
    FormPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    ExemplePage,
    ExempleFormPage,
    TabsPage,
    UsersPage,
    ReposPage,
    OrganisationsPage,
    UserDetailsPage,
    FormPage 
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GithubUsers
    ]
})
export class AppModule {}
