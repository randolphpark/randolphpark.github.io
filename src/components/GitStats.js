import React from "react";
import { Level } from "react-bulma-components";
import axios from "axios";
import { PieChart, Pie, Cell } from "recharts";
import _ from "underscore";
const langColor = require("../util/languageColor.json");

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

class GitStats extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false
    };

    axios
      .get(this.props.languages_url)
      .then(response => {
        const data = _.mapObject(response.data, function(val, key) {
          return { name: key, value: val };
        });
        this.setState({ data: _.values(data), loaded: true });
      })
      .catch(error => console.log(error))
      .then(() => console.log("alywas excueted"));
  }

  renderChart() {
    if (this.state.loaded) {
      return (
        <div>
          <PieChart width={200} height={200} onMouseEnter={this.onPieEnter}>
            <Pie
              data={this.state.data}
              cx={"50%"}
              cy={"50%"}
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
            >
              {this.state.data.map((entry, index) => (
                <Cell
                  key={entry.name + "-cell-chart"}
                  fill={langColor[entry.name]}
                />
              ))}
            </Pie>
          </PieChart>

          <Level.Item>
            {this.state.data.map(language => (
              <Level.Item key={language.name + "-tag"}>
                <div className="tags has-addons">
                  <span
                    className="tag"
                    style={{ backgroundColor: langColor[language.name] }}
                  />
                  <span className="tag is-light">{language.name}</span>
                </div>
              </Level.Item>
            ))}
          </Level.Item>
        </div>
      );
    } else {
      return <p> not loaded</p>;
    }
  }

  render() {
    return <div>{this.renderChart()}</div>;
  }
}

export default GitStats;
