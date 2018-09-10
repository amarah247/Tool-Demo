import { Component, OnInit , ElementRef, ViewChild, AfterViewInit} from '@angular/core';

export interface ComponentLevelInterface{
  name: string;
  event: string;
  carrier:string;
  lteparams:LteParams;
  umtsparams:UmtsParams;
}

export interface LteParams{
  technology:string;
  volteacc:String;
  volteret:string;
  psacc:string;
  psretain:string;
  dlvol:number;
  ulvol:number;
  volteatt:string;
  psatt:string;
  dltpt:string;
  ultpt:string;

}

export interface UmtsParams{
  technology:string;
  csaccess:string;
  csretain:string;
  psacc:string;
  psretain:string;
  dlvol:number;
  ulvol:number;
  csatt:string;
  psatt:string;
  dltpt:string;
  ultpt:string;

}

const INDI_VENUE_DATA: ComponentLevelInterface[] = [
  {name:'Farout Field',
    event: 'Team A vs Team B',
    carrier:'carrier 1',
    lteparams:{
      technology:'LTE',
      volteacc:'99.72%',
      volteret:'96.00%',
      psacc:'99.00%',
      psretain:'96.00%',
      dlvol: 14,
      ulvol: 2,
      volteatt:'',
      psatt:'',
      dltpt:'',
      ultpt:''},
    umtsparams:{
      technology:'UMTS',
      csaccess:'99.72%',
      csretain:'96.00%',
      psacc:'99.00%',
      psretain:'96.00%',
      dlvol: 14,
      ulvol: 2,
      csatt:'',
      psatt:'',
      dltpt:'',
      ultpt:''}},
  {name:'Farout Field',
      event: 'Team A vs Team B',
      carrier:'carrier 2',
      lteparams:{
        technology:'LTE',
        volteacc:'99.72%',
        volteret:'96.00%',
        psacc:'99.00%',
        psretain:'96.00%',
        dlvol: 14,
        ulvol: 2,
        volteatt:'',
        psatt:'',
        dltpt:'',
        ultpt:''},
      umtsparams:{
        technology:'UMTS',
        csaccess:'99.72%',
        csretain:'96.00%',
        psacc:'99.00%',
        psretain:'96.00%',
        dlvol: 14,
        ulvol: 2,
        csatt:'',
        psatt:'',
        dltpt:'',
        ultpt:''}},
  {name:'Farout Field',
      event: 'Team A vs Team B',
      carrier:'carrier 3',
      lteparams:{
        technology:'LTE',
        volteacc:'99.72%',
        volteret:'96.00%',
        psacc:'99.00%',
        psretain:'96.00%',
        dlvol: 14,
        ulvol: 2,
        volteatt:'',
        psatt:'',
        dltpt:'',
        ultpt:''},
      umtsparams:{
        technology:'UMTS',
        csaccess:'99.72%',
        csretain:'96.00%',
        psacc:'99.00%',
        psretain:'96.00%',
        dlvol: 14,
        ulvol: 2,
        csatt:'',
        psatt:'',
        dltpt:'',
        ultpt:''}}
];

@Component({
  selector: 'app-carrier-level',
  templateUrl: './carrier-level.component.html',
  styleUrls: ['./carrier-level.component.css']
})



export class CarrierLevelComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  dataSource = INDI_VENUE_DATA;
lteDisplayedColumns: string[] = ['technology','carrier','volteacc','volteret','psacc','psretain','dlvol','ulvol',
'volteatt','psatt','dltpt','ultpt'];
umtsDisplayedColumns: string[] = ['technology','carrier','csaccess','csretain','psacc','psretain','dlvol','ulvol',
'csatt','psatt','dltpt','ultpt'];


// ADD CHART OPTIONS. 
chartOptions = {
  responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
}
labelspie= ['1','2','3'];

// STATIC DATA FOR THE CHART IN JSON FORMAT.


chartData2 = [
  {
    
    data: [33.33,33.33,33.33] 
  }
];



// CHART COLOR.
colors = [
  // { // 1st Year.
  //   backgroundColor: 'rgba(77,83,96,0.2)'
  // },
  { // 2nd Year.
    backgroundColor: 'rgba(30, 169, 224, 0.8)'
  }
]

// CHART CLICK EVENT.
onChartClick(event) {
  console.log(event);
}
}




