import React, { useState, useEffect } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  // Legend,
  ResponsiveContainer,
} from "recharts";

const initial = {
  popularity: false,
  vote_average: true,
  vote_count: false,
};

const CharVis = ({ data = [] }) => {
  console.log(data);
  const [graph, setGraph] = useState(initial);
  console.log(graph);

  useEffect(() => {
    setGraph(initial);
  }, [data]);

  const renderTooltip = (props) => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "gray",
            borderRadius: "5px",
            border: "1px solid #999",
            color: "black",
            margin: 10,
            padding: 10,
          }}
        >
          <div>
            Title : <span>{data.title}</span>
          </div>
          <div>
            Character : <span>{data.character}</span>
          </div>
          <div>
            Rating : <span>{data.vote_average}</span>
          </div>
          <div>
            Vote Count : <span>{data.vote_count}</span>
          </div>
          <div>
            Popularity : <span>{data.popularity}</span>
          </div>
        </div>
      );
    }

    return null;
  };

  const domain = parseDomain(data);
  console.log(domain);
  const range = [50, domain[1]];

  return (
    <>
      <div>
        <ResponsiveContainer width="100%" height={500}>
          <ScatterChart
            width={800}
            height={60}
            margin={{
              top: 10,
              right: 10,
              bottom: 10,
              left: 10,
            }}
          >
            <XAxis type="category" interval={10} padding={{ right: 10 }} />
            <YAxis
              type="number"
              dataKey={
                graph.vote_average
                  ? "vote_average"
                  : graph.popularity
                  ? "popularity"
                  : "vote_count"
              }
              interval={0}
              height={10}
              width={80}
            />
            <ZAxis
              type="number"
              dataKey="vote_count"
              domain={domain}
              range={range}
            />
            <Tooltip
              cursor={{ strokeDasharray: "3 3" }}
              wrapperStyle={{ zIndex: 100 }}
              content={renderTooltip}
            />
            <Scatter data={data} fill="#8884d8" 
            opacity={0.6}
             />
          </ScatterChart>
        </ResponsiveContainer>
      </div>

      <ChartBtn setGraph={setGraph} graph={graph} />
    </>
  );
};

const parseDomain = (data) => [
  0,
  Math.max(
    Math.max.apply(
      null,
      data.map((entry) => entry.popularity)
    )
  ),
];

const ChartBtn = ({ setGraph, graph }) => {
  return (
    <div className="flexCC flex-wrap">
      {/* Create a button tailwind calasses*/}
      <button
        onClick={() => {
          setGraph({
            ...graph,
            popularity: true,
            vote_average: false,
            vote_count: false,
          });
        }}
        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Popularity
      </button>
      <button
        onClick={() => {
          setGraph({
            ...graph,
            popularity: false,
            vote_average: true,
            vote_count: false,
          });
        }}
        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Vote Average
      </button>
      <button
        onClick={() => {
          setGraph({
            ...graph,
            popularity: false,
            vote_average: false,
            vote_count: true,
          });
        }}
        className="m-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        View Vote Count
      </button>
    </div>
  );
};

export default CharVis;
