import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestDataService } from 'src/app/services/quest-data.service';

@Component({
  selector: 'app-create-quest',
  templateUrl: './create-quest.component.html',
  styleUrls: ['./create-quest.component.css']
})
export class CreateQuestComponent implements OnInit {

  public openAdventure:string;
  public questTitle:string;
  public questBody:string;

  constructor(public route:ActivatedRoute,
              public questDataService:QuestDataService,
              public router:Router) { }

  ngOnInit(): void {
    this.openAdventure=this.route.snapshot.params['adventure'];
  }

  createQuest(){
    let newQuest={
      title:this.questTitle,
      body:this.questBody,
      adventure:this.openAdventure,
    }
    console.log(newQuest);
    this.questDataService.createQuest(newQuest).subscribe(response => console.log(response));
    this.router.navigate(["adventures"]);
  }

}
