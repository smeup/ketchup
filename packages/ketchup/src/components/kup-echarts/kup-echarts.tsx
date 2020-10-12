import { Component, Host, h,Prop,Element} from '@stencil/core';
import echarts from 'echarts'




@Component({
  tag: 'kup-echarts',
  styleUrl: 'kup-echarts.css',
  shadow: true,
})
export class KupEcharts {
  @Prop() objectData: object={};
 @Prop() types: string='line';
 

  private chartContainer?: HTMLDivElement;
  private myChart: any;
  private oj = {};
  private x=[];
  private rightjson:any;
  private datajson=[];
  CreateEcharts()
  {
    //console.log(this.objectData);
   this.myChart= echarts.init(this.chartContainer);
   
    this.myChart.setOption(this.rightjson);
  }
  
  ParseJsonX()
  {
        let Xaxis=this.objectData['rows'];
        
       // console.log(Xaxis);
        for(let i=0;i<Xaxis.length;i++)
        {
          this.x[i]=Xaxis[i].cells.Col1.obj.k;
        }
   //  console.log(x);
  
  }

  ParseJsonY()
  {
    
    
    let ngraph=this.objectData['columns'];
    console.log(ngraph);
    let conta=0;
    for(let i=0;i<ngraph.length;i++)
    {
       if(ngraph[i].name!='Col1')
       {
        this.oj[ngraph[i].name] = [];
        

        conta=conta+1;
      
       }

    }
  // console.log(obj);
  
   let yvalue=this.objectData['rows'];
   //console.log(yvalue);
   let x=[];
   // console.log(Xaxis);
    for(let i=0;i<yvalue.length;i++)
    {
      
        for (let key in this.oj) {
          if (this.oj.hasOwnProperty(key)) {
            
            let value=yvalue[i].cells[key].obj.k;;
          //  console.log(value);
              this.oj[key].push(value);
          }
      }
        
          
        
      
     
    }
    console.log(this.oj);

  }

  Createrightjson()
  {
    
    
    for (let key in this.oj)
    { let rjson={};
      rjson['data'] = this.oj[key];
      rjson['name']=key;
      rjson['type']=this.types.toLowerCase();
      this.datajson.push(rjson);
    }

  
    console.log(this.datajson);
    this.rightjson={
      xAxis: {
          type: 'category',
          data: this.x
      },
      tooltip: {
        trigger: 'axis'
    },
      yAxis: {
          type: 'value'
      },
      series:this.datajson
  };
  
  

  }

  componentDidLoad() {
    this.ParseJsonX();
    this.ParseJsonY();
    this.Createrightjson();
    this.CreateEcharts();
   
  

  }

  render() {
    return (
      <Host>
    <div id="main" ref={(chartContainer) =>
          (this.chartContainer = chartContainer)
        }></div>
      </Host>
    );
  }

}
