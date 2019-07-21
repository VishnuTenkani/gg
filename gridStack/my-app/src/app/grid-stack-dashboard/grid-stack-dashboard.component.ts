import { ChangeDetectionStrategy,
  Component,
  OnInit,
  ViewEncapsulation } from '@angular/core';
import {  CompactType,
  DisplayGrid,
  GridsterComponentInterface,
  GridsterConfig,
  GridsterItem,
  GridsterItemComponentInterface,
  GridType }  from 'angular-gridster2';
  import { CookieService } from 'ngx-cookie-service';
  

@Component({
  selector: 'app-grid-stack-dashboard',
  templateUrl: './grid-stack-dashboard.component.html',
  styleUrls: ['./grid-stack-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None
})
export class GridStackDashboardComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  changedDashboard:any;
  //queryChartsValue:string =''
  constructor(private cookieSrv:CookieService) { }
  static itemChange(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.log('itemChanged', item, itemComponent);
  }

  static itemResize(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.log('itemResized', item, itemComponent);
    
  }

  static itemInit(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.log('itemInitialized', item, itemComponent);
  }

  static itemRemoved(item: GridsterItem, itemComponent: GridsterItemComponentInterface) {
    console.log('itemRemoved', item, itemComponent);
  }

   ngOnInit() {
     this.GetUserCharts(false);
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      itemChangeCallback: GridStackDashboardComponent.itemChange,
      itemResizeCallback: GridStackDashboardComponent.itemResize,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true,
        handles: {
          s: true, e: true, n: true, w: true,
          se: true, ne: true, sw: true, nw: true
        }
      },
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1
    };
    
    
   this.loadGrid();
    // this.dashboard = [
    //   {id:1,cols: 1, rows: 1, y: 0, x: 0},
    //   {id:2,cols: 1, rows: 1, y: 0, x: 0},
    //   {id:3,cols: 1, rows: 1, y: 0, x: 0},
    //   {id:4,cols: 1, rows: 1, y: 0, x: 0},
    // ];
    
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }
  GetUserCharts(isPreview) {
                   
    var res = [{queryId:1,chartDisplayName:"sales by month"},{queryId:2,chartDisplayName:"Sales by payment method"},
    {queryId:3,"chartDisplayName":"Sales by Location"},{queryId:4,"chartDisplayName":"Sales by Category"}];

   this.LoadDashboard(isPreview, res);
}

 availableCharts = [];
 queryCharts = [];
LoadDashboard = function (isPreview, userCharts) {

  this.queryCharts = userCharts;
  this.availableCharts.push({ chartid: 'Line_Chart', chartname: 'Line Chart' });
  this.availableCharts.push({ chartid: 'Column_Chart', chartname: 'Column Chart' });
  this.availableCharts.push({ chartid: 'Goal_Meter', chartname: 'Goal Meter' });
  this.availableCharts.push({ chartid: 'Pie_Chart', chartname: 'Pie Chart' });
  this.availableCharts.push({ chartid: 'Doughnut_Chart', chartname: 'Doughnut Chart' });
  this.availableCharts.push({ chartid: 'Column_Stack', chartname: 'Column Stack' });
  this.availableCharts.push({ chartid: 'Area_Chart', chartname: 'Area Chart' });
  this.availableCharts.push({ chartid: 'Combo', chartname: 'Combo' });
  this.availableCharts.push({ chartid: 'HeatMap', chartname: 'HeatMap' });
  this.availableCharts.push({ chartid: 'Table', chartname: 'Table' });
  this.availableCharts.push({ chartid: 'Bubble_Chart', chartname: 'Bubble Chart' });
  this.availableCharts.push({ chartid: 'Geo_Map', chartname: 'Geo Map' });
  this.availableCharts.push({ chartid: 'KPI', chartname: 'KPI' });
  this.availableCharts.push({ chartid: 'Gauge_Meter', chartname: 'Gauge Meter' });
  this.availableCharts.push({ chartid: 'Card', chartname: 'Card' });
  this.availableCharts.push({ chartid: 'Scorecard', chartname: 'Scorecard' });
  this.availableCharts.push({ chartid: 'TreeMap', chartname: 'TreeMap' });
  this.availableCharts.push({ chartid: 'List', chartname: 'List' });
 console.log(this.availableCharts);
  
  
  
  
}
  getDefaultData() {
    return this.dashboard = [
    {id:1,cols: 1, rows: 1, y: 0, x: 0, isContent:true, queryChartsValue:"sales by month", ChartsValue:'Line Chart'},   
    {id:2,cols: 1, rows: 1, y: 0, x: 0, isContent:true,queryChartsValue:"sales by month", ChartsValue:'Line Chart'},
    {id:3,cols: 1, rows: 1, y: 0, x: 0,isContent:true, queryChartsValue:"sales by month", ChartsValue:'Line Chart'},
    {id:4,cols: 1, rows: 1, y: 0, x: 0,isContent:true, queryChartsValue:"sales by month", ChartsValue:'Line Chart'},
      ];
    }

  addItem() {
    let i = 0;
    i = this.dashboard.length;
    this.dashboard.push({id: i + 1, x: 0, y: 0, cols: 1, rows: 1,queryChartsValue:"",ChartsValue:""});
    console.log(this.dashboard);
    
  }
  savedItem(object){
    object.forEach(element => {
      element.isContent =true;
       if ((element.ChartsValue =="Line Chart" && element.queryChartsValue =="sales by month")||element.ChartsValue =="" && element.queryChartsValue ==""){
      element.ChartsValue ="Line Chart",
      element.queryChartsValue = "sales by month"
      }
    });
    this.cookieSrv.set( 'grid-Data', JSON.stringify(this.dashboard));
  }
  loadGrid(){
    let gd:any = this.cookieSrv.get('grid-Data');
    if(gd != undefined && gd.length > 0){
         this.dashboard = JSON.parse(gd);
    }else{
      this.dashboard = this.getDefaultData();
    }
  }
  updateChartValue(chartValue,obj){
    obj.forEach(item =>{
      item.ChartsValue = chartValue;
    })
    
  }
  updateQueryChartValue(queryChartValue,obj){
   obj.forEach(item=>{
     item.queryChartsValue = queryChartValue;
   })
  }
  

}
