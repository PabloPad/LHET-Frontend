import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { NavMenuComponentComponent } from './components/nav-menu-component/nav-menu-component.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { EditQuestComponent } from './components/edit-quest/edit-quest.component';
import { AdventureListComponent } from './components/adventure-list/adventure-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/logout/logout.component';
import { CreateQuestComponent } from './components/create-quest/create-quest.component';
import { HomeComponent } from './components/home/home.component';
import { ResourcesMenuComponent } from './components/resources-menu/resources-menu.component';
import { VolunteerHomeComponent } from './components/volunteer-home/volunteer-home.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { NewCaseComponent } from './components/new-case/new-case.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    NavMenuComponentComponent,
    AdminHomeComponent,
    EditQuestComponent,
    AdventureListComponent,
    LogoutComponent,
    CreateQuestComponent,
    HomeComponent,
    ResourcesMenuComponent,
    VolunteerHomeComponent,
    CaseDetailsComponent,
    NewCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
