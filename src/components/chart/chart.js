import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import './chart.css';
export default class Chart extends Component {
  state = {
    chartData: null
  }

  componentDidUpdate(prevProps) {
    if(prevProps.selectedItem !== this.props.selectedItem) {
      const { selectedItem } = this.props;

      this.setState({
        chartData: selectedItem
      });
    }
  }

  render() {
    const { chartData } = this.state;
    
    if (!chartData) {
      return (
        <div className="chart text">Select from the list, please.</div>
      );
    }
    
    const { countryName } = chartData;

    return (
      <div className="chart">
        <h4 className="text">Country name: {countryName}</h4>
        <Line data={chartData} 
                     width={3}
                     height={2}
                     options={{
                       title: {
                         display: true,
                         text: 'Infant Mortality Rate',
                         fontSize:25
                       },
                       legend: {
                         display: true,
                         position: 'right'
                       }
                     }}/>
      </div>
    )
  }
};