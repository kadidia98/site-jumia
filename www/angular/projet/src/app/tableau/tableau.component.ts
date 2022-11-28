import { Component, OnInit } from '@angular/core';

type User = {
  nom: string,
  prenom: string,
  email: string,
  telephone: string,
  
}
@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

 users!: User[]

  ngOnInit(): void {
    this.users=[
      {
        nom: "Sarr",
        prenom: "Mamadou",
        email: "mamadou01@gmail.com",
        telephone: "771231212"
        
      },
       {
        nom: "diallo",
        prenom: "khadidiatou",
        email: "diallo01@gmail.com",
        telephone: "771231212"
        
      },
      {
        nom: "diagne",
        prenom: "awa",
        email: "diagne01@gmail.com",
        telephone: "771231212"
        
      },
      {
        nom: "gueye",
        prenom: "mbayang",
        email: "gueye01@gmail.com",
        telephone: "771231212"
        
      },
      {
        nom: "fall",
        prenom: "mouhamed",
        email: "fall01@gmail.com",
        telephone: "771231212"
        
      },
      {
        nom: "diouf",
        prenom: "cheikh",
        email: "diouf01@gmail.com",
        telephone: "771231212"
        
      },
    ]
  }

}
