import { Component, Host, h,Prop,Element,Event,EventEmitter} from '@stencil/core';
import echarts from 'echarts'




@Component({
  tag: 'kup-echarts',
  styleUrl: 'kup-echarts.css',
  shadow: true,
})
export class KupEcharts {
 @Prop() objectData: object={};
 @Prop() types: string='line';
 @Prop() graphTitle:string='';
 @Prop() graphTitleSize:number;
 @Prop() legend:string;
 @Prop() graphTitleColor:string;
 
 

  private chartContainer?: HTMLDivElement;
  private myChart: any;
  private oj = {};
  private x=[];
  private rightjson:any;
  private datajson=[];
  private datapiejson=[];

  @Event() kupEchartsClicked: EventEmitter;
  
  CreateEcharts()
  {
    this.myChart= echarts.init(this.chartContainer);
    this.myChart.setOption(this.rightjson);
  }
  
  ParseJsonX()
  {
        let Xaxis=this.objectData['rows'];
        
        for(let i=0;i<Xaxis.length;i++)
         {
          this.x[i]=Xaxis[i].cells.Col1.obj.k;
         }
   
  
  }

  ParseJsonY()
  {
    let ngraph=this.objectData['columns'];
    let conta=0;

    for(let i=0;i<ngraph.length;i++)
    {
       if(ngraph[i].name!='Col1')
        {
        this.oj[ngraph[i].name] = [];
        

        conta=conta+1;
      
        }

    }

  let yvalue=this.objectData['rows'];
  let x=[];
  for(let i=0;i<yvalue.length;i++)
    {
      for (let key in this.oj) 
         {
          if (this.oj.hasOwnProperty(key)) 
          {
            let value=yvalue[i].cells[key].obj.k;;
            this.oj[key].push(value);
          }
      }
        
     }
  }
  createlegend()
  {
        let arr=[];
        for (let key in this.oj)
        {
          arr.push(key);
        }
        return arr;
  }
  
   objectpie()
  {
    console.log(this.oj);
    let somme=[];
    for (let key in this.oj)
      { let somma=0;
      for(let j=0;j<this.oj[key].length;j++)
        {
            var d=parseFloat(this.oj[key][j]);
            somma=somma+d;
        }
      somme.push(somma);

      }
    
    let i=0;
    for (let key in this.oj)
        {   
         let rjson={}; 
         rjson['value'] = somme[i];
         rjson['name']=key;
    
         this.datapiejson.push(rjson);
         i++;
        }

  console.log(this.datapiejson);
return this.datapiejson;

  }

  Createrightjson()
  {
    
    
    for (let key in this.oj)
    { 
      let rjson={};
      rjson['data'] = this.oj[key];
      rjson['name']=key;
      rjson['type']=this.types.toLowerCase();
      this.datajson.push(rjson);
    }

  console.log(this.datajson);

  let tlegend=this.legend;
  console.log(tlegend);

  
    console.log(this.datajson);
    this.rightjson={
      title: {
        text: this.graphTitle,
        textStyle: {
          fontSize: this.graphTitleSize,
          color:this.graphTitleColor,
        },
        
    },
      legend: {
        data: this.createlegend(),
        [tlegend]:0,
        
         },
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

  createpiejson(){
    let tlegend=this.legend;
    this.rightjson={
      title: {
        text: this.graphTitle,
        textStyle: {
          fontSize: this.graphTitleSize,
          color:this.graphTitleColor,
        },
        
    },
      legend: {
        data: this.createlegend(),
        [tlegend]:0,
        },
     
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
    
      series:[
        {
            name: 'echart',
            type: 'pie',
            data: this.datapiejson,
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
  };

  }
  componentWillUpdate ()
  {
    this.CreateEcharts();
  }

  componentDidLoad() {
    
    this.ParseJsonX();
    this.ParseJsonY();
    if(this.types=='Pie')
      {  
         this.objectpie();
         this.createpiejson();
      }

    else{
            this.Createrightjson();
        }
  
    this.CreateEcharts();
   
   
  

  }
  OnKupClick()
  {
    this. kupEchartsClicked.emit();
  }

  render() {
    return (
      <Host>
    <div id="main" onClick={()=>this.OnKupClick()} ref={(chartContainer) =>(this.chartContainer = chartContainer)}> </div>
  
      </Host>
    );
    
  }

}
