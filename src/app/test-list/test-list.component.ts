import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {
films=[
  {titre:'Anges & Demos',affiche:'../assest/ange.jpg',duree:120},
  {titre:'Coco',affiche:'../assets/coco.jpg',duree:88},
  {titre:'Coeur Nomade',affiche:'../assest/nomade.bmp' ,duree:97},
]
dateJour="11/november";
liste=["Retraité","Etudiant","Autre"];
  constructor() { }

  ngOnInit() {
  }

}
