import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class AdventureEntity{
  constructor(){}
  public name:string;
  public stages:number;
  public id:number;
}

export class QuestEntity{
  public title:string;
  public body:string;
  public stage:number;
  public id:number;
  public adventure:AdventureEntity;

}


@Injectable({
  providedIn: 'root'
})
export class QuestDataService {

  constructor(private httpClient:HttpClient) { }

  getAdventureList(){
    return this.httpClient.get<AdventureEntity[]>("http://localhost:8082/home/adventures");
  }

  getQuestList(adventureName:string){
    return this.httpClient.get<QuestEntity[]>("http://localhost:8082/home/"+adventureName+"/quests");
  }

  createQuest(newQuest){
    return this.httpClient.post("http://localhost:8082/home/quests",newQuest);
  }

  getQuestById(id:number){
    return this.httpClient.get<QuestEntity>("http://localhost:8082/home/quests/"+id);
  }

  updateQuest(toUpdate, id:number){
    return this.httpClient.put("http://localhost:8082/home/quests/"+id, toUpdate);
  }

  createAdventure(newAdventure){
    return this.httpClient.post("http://localhost:8082/home/adventures",newAdventure);
  }
}
