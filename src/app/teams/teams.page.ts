import { Component, OnInit } from '@angular/core';
import { TeamlistData } from '../../assets/Models/teamList';
import teamList from '../../assets/json/teamsList.json' ;
@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  listTeamDetails: TeamlistData[] = [];

  constructor() { }

  ngOnInit() {
    this.listTeamDetails = [...teamList.Teams];
    console.log(this.listTeamDetails);
  }

}
