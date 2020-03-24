import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { LoginComponentComponent } from './components/login-component/login-component.component';
import { AdventureListComponent } from './components/adventure-list/adventure-list.component';
import { EditQuestComponent } from './components/edit-quest/edit-quest.component';
import { LogoutComponent } from './components/logout/logout.component';
import { RouteGuardService } from './services/route-guard.service';
import { CreateQuestComponent } from './components/create-quest/create-quest.component';
import { HomeComponent } from './components/home/home.component';
import { VolunteerHomeComponent } from './components/volunteer-home/volunteer-home.component';
import { ResourcesMenuComponent } from './components/resources-menu/resources-menu.component';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { NewCaseComponent } from './components/new-case/new-case.component';


const routes: Routes = [
  {path:"home", component:HomeComponent, canActivate:[RouteGuardService]},
  {path:"", component:HomeComponent},
  {path:"logout", component:LogoutComponent},
  {path:"login", component:LoginComponentComponent},
  {path:"volunteer", component:VolunteerHomeComponent},
  {path:"new", component:NewCaseComponent},
  {path:"resources", component:ResourcesMenuComponent},
  {path:"details", component:CaseDetailsComponent},
  {path:"adventures", component:AdventureListComponent, canActivate:[RouteGuardService]},
  {path:":adventure/newQuest", component:CreateQuestComponent, canActivate:[RouteGuardService]},
  {path:"quests/:id", component:EditQuestComponent, canActivate:[RouteGuardService]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
