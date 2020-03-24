import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestDataService, QuestEntity } from 'src/app/services/quest-data.service';

@Component({
  selector: 'app-edit-quest',
  templateUrl: './edit-quest.component.html',
  styleUrls: ['./edit-quest.component.css']
})
export class EditQuestComponent implements OnInit {

  public openAdventure:string;
  public openQuest:QuestEntity;
  //public questBody:string;
  //public questTitle:string;

  constructor(public route:ActivatedRoute,
              public questService:QuestDataService,
              public router:Router) { }

  ngOnInit(): void {
    this.questService.getQuestById(this.route.snapshot.params['id']).subscribe(response => this.handleResponse(response))
  }

  handleResponse(response){
    this.openQuest=response;
    //this.questBody=this.openQuest.title;
    //this.questBody=this.openQuest.title;
  }

  updateQuest(){

    let toUpdate={
      title:this.openQuest.title,
      body:this.openQuest.body,
      adventure:this.openQuest.adventure.name
    }
    console.log(toUpdate);
    this.questService.updateQuest(toUpdate, this.openQuest.id).subscribe();
    this.router.navigate(["adventures"]);
  }

}
