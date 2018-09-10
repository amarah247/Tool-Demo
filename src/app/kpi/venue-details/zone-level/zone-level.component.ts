import { Component, OnInit } from '@angular/core';

export interface CellZoneParams{
  venuename:string;
  carrier:string;
  zone:string;
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
  prbutil:string;
  traffic:string;
}

const CELL_DATA: CellZoneParams[] = [
  {venuename:'Faragout Field',
  carrier:'carrier 1',
  zone:'zone 1',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'30%',
  traffic:'30%'},
  {venuename:'Faragout Field',
  carrier:'carrier 1',
  zone:'zone 2',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'40%',
  traffic:'40%'},
  {venuename:'Faragout Field',
  carrier:'carrier 1',
  zone:'zone 3',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'90%',
  traffic:'90%'},
  {venuename:'Faragout Field',
  carrier:'carrier 2',
  zone:'zone 1',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'30%',
  traffic:'30%'},
 { venuename:'Faragout Field',
  carrier:'carrier 2',
  zone:'zone 2',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'40%',
  traffic:'40%'},
  {venuename:'Faragout Field',
  carrier:'carrier 2',
  zone:'zone 3',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'90%',
  traffic:'90%'},
  {venuename:'Faragout Field',
  carrier:'carrier 3',
  zone:'zone 1',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'30%',
  traffic:'30%'},
  {venuename:'Faragout Field',
  carrier:'carrier 3',
  zone:'zone 2',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'40%',
  traffic:'40%'},
  {venuename:'Faragout Field',
  carrier:'carrier 3',
  zone:'zone 3',
  volteacc:'99.72%',
  volteret:'96.00%',
  psacc:'99.00%',
  psretain:'96.00%',
  dlvol: 14,
  ulvol: 2,
  volteatt:'',
  psatt:'',
  dltpt:'',
  ultpt:'',
  prbutil:'90%',
  traffic:'90%'}]

  const ZONE_DATA: CellZoneParams[] = [
    {venuename:'Faragout Field',
    carrier:'carrier 1',
    zone:'zone 1',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'30%',
    traffic:'30%'},
    {venuename:'Faragout Field',
    carrier:'carrier 2',
    zone:'zone 1',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'40%',
    traffic:'40%'},
    {venuename:'Faragout Field',
    carrier:'carrier 3',
    zone:'zone 1',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'90%',
    traffic:'90%'},
    {venuename:'Faragout Field',
    carrier:'carrier 1',
    zone:'zone 2',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'30%',
    traffic:'30%'},
    { venuename:'Faragout Field',
    carrier:'carrier 2',
    zone:'zone 2',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'40%',
    traffic:'40%'},
    {venuename:'Faragout Field',
    carrier:'carrier 3',
    zone:'zone 2',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'90%',
    traffic:'90%'},
    {venuename:'Faragout Field',
    carrier:'carrier 1',
    zone:'zone 3',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'30%',
    traffic:'30%'},
    {venuename:'Faragout Field',
    carrier:'carrier 2',
    zone:'zone 3',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'40%',
    traffic:'40%'}, 
    {venuename:'Faragout Field',
    carrier:'carrier 3',
    zone:'zone 3',
    volteacc:'99.72%',
    volteret:'96.00%',
    psacc:'99.00%',
    psretain:'96.00%',
    dlvol: 14,
    ulvol: 2,
    volteatt:'',
    psatt:'',
    dltpt:'',
    ultpt:'',
    prbutil:'90%',
    traffic:'90%'}]

@Component({
  selector: 'app-zone-level',
  templateUrl: './zone-level.component.html',
  styleUrls: ['./zone-level.component.css']
})
export class ZoneLevelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
cellDisplayedColumns: string[] = ['carrier','zone','volteacc','volteret','psacc','psretain','dlvol','ulvol',
'volteatt','psatt','dltpt','ultpt'];
zoneDisplayedColumns:string[]=['zone','carrier','prbutil','traffic'];
dataSource = CELL_DATA;
zoneDataSource=ZONE_DATA;

title = 'PRB Utilization';
titleother= 'Traffic';

// ADD CHART OPTIONS. 
chartOptions = {
  responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
}

labels =  ['Z1-C1', 'Z1-C2', 'Z1-C3', 'Z2-C1', 'Z2-C2', 'Z3-C3'];
labelspie= ['1','2','3'];

// STATIC DATA FOR THE CHART IN JSON FORMAT.
chartData = [
  {
    label: 'PRB Utilization',
    data: [30,40,90,30,40,90,0,100] 
  }
];

chartData1 = [
  {
    label: 'Traffic',
    data: [30,40,90,30,40,90,0,100] 
  }
];

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
