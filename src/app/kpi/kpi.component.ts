import { Component, OnInit } from '@angular/core';

export interface VenueElement {
  name: string;
  event: string;
  params:MainKPIs;
}

export interface MainKPIs{
  volteacc:String;
  volteret:string;
  psacc:string;
  psretain:string;
  dlvol:number;
  ulvol:number;

}

const VENUE_DATA: VenueElement[] = [
  {name:'Farout Field',
    event: 'Team A vs Team B',
    params:{
      volteacc:'99.72%',
      volteret:'96.00%',
      psacc:'99.00%',
      psretain:'96.00%',
      dlvol: 14,
      ulvol: 2}},
  {name:'Venue 2',
    event: 'Team A vs Team B',
    params:{
      volteacc:'98.72%',
      volteret:'97.00%',
      psacc:'99.00%',
      psretain:'95.00%',
      dlvol: 14,
      ulvol: 2}}
];

@Component({
  selector: 'app-kpi',
  templateUrl: './kpi.component.html',
  styleUrls: ['./kpi.component.css']
})
export class KpiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  displayedColumns: string[] = ['name', 'event','volteacc','volteret','psacc','psretain','dlvol','ulvol'];
  dataSource = VENUE_DATA;
}
