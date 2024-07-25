"use client";
import React from "react";
import { Grid, Text } from "@chakra-ui/react";
import { PiChartLineUp } from "react-icons/pi";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "1w",
    InProgress: 100,
    Completed: 80,
  },
  {
    name: "2w",
    InProgress: 150,
    Completed: 110,
  },
  {
    name: "3w",
    InProgress: 200,
    Completed: 80,
  },
];

const Barchart = () => {
  return (
    <Grid h={"100%"} rowGap={3}>
      <Text
        color={"#2D89BA"}
        display={"flex"}
        alignItems={"center"}
        columnGap={2}
        p={".3rem"}
      >
        Your Progress <PiChartLineUp size={20} />
      </Text>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            label={{ value: "Points", angle: -90, position: "insideLeft" }}
          />
          <Tooltip />
          <Bar dataKey="Completed" fill="#2D89BA" barSize={15} />
          <Bar dataKey="InProgress" fill="#97CAF0" barSize={15} />
          <Legend align="right" />
        </BarChart>
      </ResponsiveContainer>
    </Grid>
  );
};

export default Barchart;
