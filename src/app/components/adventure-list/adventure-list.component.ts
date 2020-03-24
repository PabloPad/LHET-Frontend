import { Component, OnInit } from '@angular/core';
import { QuestDataService, QuestEntity, AdventureEntity } from 'src/app/services/quest-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adventure-list',
  templateUrl: './adventure-list.component.html',
  styleUrls: ['./adventure-list.component.css']
})
export class AdventureListComponent implements OnInit {

  constructor(private questDataService:QuestDataService,
              private router:Router){ }

  public questList:QuestEntity[];
  public adventureList:AdventureEntity[];
  public openAdventure:string="";
  public newAdventureClicked:boolean=false;
  public newAdventureName:string;

  ngOnInit(): void {
   this.getAdventures();
  }

  getAdventures(){
    this.questDataService.getAdventureList().subscribe(response => this.setAdventureList(response));
  }

  setAdventureList(response){
    this.adventureList=response;
  }

  testevent(name:string){
    console.log(name);
  }

  retreiveQuests(adventure:string){
    this.openAdventure=adventure;
    this.questDataService.getQuestList(adventure).subscribe(response => this.setQuestList(response),error => this.questList=null);
  }

  setQuestList(response){
    this.questList=response;
  }

  toggleNewAdventure(){
    this.newAdventureClicked=true;
  }

  createAdventure(){
    let newAdventure={
      name:this.newAdventureName
    }
    this.questDataService.createAdventure(newAdventure).subscribe(response => this.getAdventures());
    this.newAdventureClicked=false;
    
  }
}
