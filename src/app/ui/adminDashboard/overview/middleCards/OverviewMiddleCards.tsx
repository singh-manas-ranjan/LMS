"use client";
import { Box, Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { Chart } from "react-google-charts";

type TChartData = {
  data: [
    [string, string, string], // First element for headers
    ...Array<[string, number, number]> // Rest of the elements for data rows
  ];
};

const coursesChartData: TChartData[] = [
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["Week 1", 1000, 400],
      ["Week 2", 1100, 420],
      ["Week 3", 1200, 440],
      ["Week 4", 1300, 460],
    ],
  },
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["Jan", 1890, 750],
      ["Feb", 1650, 570],
      ["Mar", 1700, 520],
      ["Apr", 1820, 680],
      ["May", 1620, 610],
      ["June", 1780, 410],
      ["July", 2800, 810],
    ],
  },
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["Q1", 2000, 700],
      ["Q2", 2200, 750],
      ["Q3", 2400, 800],
      ["Q4", 2600, 850],
    ],
  },
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["2021", 3000, 1000],
      ["2022", 3200, 1050],
      ["2023", 3400, 1100],
      ["2024", 3600, 1150],
    ],
  },
];
const tasksChartData: TChartData[] = [
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["Week 1", 1200, 450],
      ["Week 2", 1300, 470],
      ["Week 3", 1400, 490],
      ["Week 4", 1500, 510],
    ],
  },
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["Jan", 1980, 800],
      ["Feb", 1750, 620],
      ["Mar", 1800, 570],
      ["Apr", 1920, 730],
      ["May", 1720, 660],
      ["June", 1880, 460],
      ["July", 2900, 910],
    ],
  },
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["Q1", 2200, 750],
      ["Q2", 2400, 800],
      ["Q3", 2600, 850],
      ["Q4", 2800, 900],
    ],
  },
  {
    data: [
      ["Period", "Views", "Enroll"],
      ["2021", 3400, 1200],
      ["2022", 3600, 1250],
      ["2023", 3800, 1300],
      ["2024", 4000, 1350],
    ],
  },
];

type TChartsData = {
  title: string;
  chartData: TChartData[];
};
type TSelectedChartsData = {
  title: string;
  chartData: TChartData;
};

const chartsData: TChartsData[] = [
  { title: "Courses", chartData: coursesChartData },
  { title: "Tasks/Assignment", chartData: tasksChartData },
];

const OverviewMiddleCards = () => {
  const searchParams = useSearchParams();
  const stats = searchParams.get("stats");
  const selectedStatsChartData: TSelectedChartsData[] = [];
  const index =
    stats === "W"
      ? 0
      : stats === "M"
      ? 1
      : stats === "Q"
      ? 2
      : stats === "Y"
      ? 3
      : 0;

  chartsData.forEach((data) =>
    selectedStatsChartData.push({
      title: data.title,
      chartData: data.chartData[index],
    })
  );

  return (
    <Box
      w={"100%"}
      display={"grid"}
      p={".5rem"}
      gridTemplateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2,1fr)" }}
      columnGap={5}
      h={{ sm: "315", md: "fit-content" }}
      overflowY={{ sm: "scroll", md: "unset" }}
      rowGap={5}
    >
      {selectedStatsChartData.map((chart, idx) => (
        <Card
          key={idx}
          boxShadow={
            "rgba(67, 71, 85, 0.27) 0px 0px 0.25em, rgba(90, 125, 188, 0.05) 0px 0.25em 1em"
          }
        >
          <CardHeader>
            <Heading size={{ base: "sm" }}>{chart.title}</Heading>
          </CardHeader>
          <CardBody
            height={"fit-content"}
            overflow={"hidden"}
            display={{ lg: "flex" }}
            justifyContent={"center"}
            fontSize={"xs"}
          >
            <Chart
              chartType="Bar"
              width="100%"
              height="fit-content"
              data={chart.chartData.data}
            />
          </CardBody>
        </Card>
      ))}
    </Box>
  );
};

export default OverviewMiddleCards;
