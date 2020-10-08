import { Component, Host, h,Prop,Element} from '@stencil/core';
import echarts from 'echarts'




@Component({
  tag: 'kup-echarts',
  styleUrl: 'kup-echarts.css',
  shadow: true,
})
export class KupEcharts {
  @Prop() objectData: object={};
  private chartContainer?: HTMLDivElement;
  private myChart: any;
  CreateEcharts()
  {
    console.log(this.objectData);
   this.myChart= echarts.init(this.chartContainer);
   
    this.myChart.setOption(this.objectData);
  }

  componentDidLoad() {
    this.CreateEcharts()
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
