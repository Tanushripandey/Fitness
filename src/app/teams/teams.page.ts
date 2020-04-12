import { Component, OnInit } from '@angular/core';
import { TeamlistData } from '../../assets/Models/teamList';
import teamList from '../../assets/json/teamsList.json' ;
import { Router } from '@angular/router';
@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  listTeamDetails: TeamlistData[] = [];

  constructor(public router: Router) { }

  ngOnInit() {
    this.listTeamDetails = [...teamList.Teams];
    console.log(this.listTeamDetails);
  }

  teamDetails(id) {
    console.log(id)
    this.router.navigate(['/player-details', id]);    
  }

}
