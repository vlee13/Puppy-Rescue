import React, { PureComponent } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default class Example extends PureComponent {
  static jsfiddleUrl = "https://jsfiddle.net/alidingling/q4eonc12/";

  render() {
    return (
      <BarChart
        width={700}
        height={300}
        data={this.props.data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
        barSize={20}
      >
        <XAxis dataKey="name" scale="point" padding={{ left: 10, right: 10 }} />
        <YAxis domain={[0, 10]} />
        <Tooltip />
        <Legend />
        <CartesianGrid strokeDasharray="3 3" />
        <Bar
          dataKey="votes.length"
          fill="#8884d8"
          background={{ fill: "#eee" }}
        />
      </BarChart>
    );
  }
}
