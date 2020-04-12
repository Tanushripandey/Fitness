import { Component, OnInit } from '@angular/core';
import {playersListData} from '../../assets/Models/playersDetailsData';
import playerList from '../../assets/json/playersDetailsData.json';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.page.html',
  styleUrls: ['./player-details.page.scss'],
})
export class PlayerDetailsPage implements OnInit {
  params: any;
  player : any;
  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe((params)=>{
    let player = playerList.playersDetails.find((obj)=>{
         let id = +params.id;
        if(obj.id==id){
           return obj;
        }
     })
     this.player = player.playerDetails;
     console.log(this.player)
    });
   
  }

}
