import React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import ProTip from "./protip";
import GraphView from "./graph";

const data = {
  nodes: [
    { index: 0, name: "Ossi Tervonen", value: 1800, hours: "+30:00" },
    { index: 1, name: "Tuntilaskutus", value: 1500, hours: "+25:00" },
    { index: 2, name: "Digia", value: 1500, hours: "+25:00" },
    { index: 3, name: "Tommi Rantala", value: 1800, hours: "+30:00" },
    {
      index: 4,
      name: "Business Finland - Digitaalinen Liiketoimintajärjestelmä",
      value: 3180,
      hours: "+53:00"
    },
    { index: 5, name: "AtoZ Oy", value: 7290, hours: "+121:30" },
    { index: 6, name: "Kimmo Hakkarainen", value: 2220, hours: "+37:00" },
    { index: 7, name: "Tommi Puonti", value: 3390, hours: "+56:30" },
    { index: 8, name: "TK00582 Delta", value: 2250, hours: "+37:30" },
    { index: 9, name: "SMC", value: 8940, hours: "+149:00" },
    { index: 10, name: "Jyrki Oksanen", value: 1320, hours: "+22:00" },
    {
      index: 11,
      name: "AtoZ toiminnan kehitys",
      value: 540,
      hours: "+9:00"
    },
    { index: 12, name: "Tommi Kauppinen", value: 1440, hours: "+24:00" },
    { index: 13, name: "Liukumapoissaolo", value: 150, hours: "+2:30" },
    { index: 14, name: "Jarkko Ylinen", value: 1800, hours: "+30:00" },
    {
      index: 15,
      name: "44498 Automation ORG Work MISC. training",
      value: 120,
      hours: "+2:00"
    },
    { index: 16, name: "Jari Puonti", value: 1080, hours: "+18:00" },
    {
      index: 17,
      name: "70512 AutoMine Multi-Lite Basic for DR410i",
      value: 270,
      hours: "+4:30"
    },
    { index: 18, name: "Hallinto", value: 1050, hours: "+17:30" },
    { index: 19, name: "Iiris Sarpiokoski", value: 840, hours: "+14:00" },
    {
      index: 20,
      name: "70504 Testing, test tools and simulation development",
      value: 600,
      hours: "+10:00"
    },
    {
      index: 21,
      name: "70412 ML Traffic Control - Phase 1",
      value: 1320,
      hours: "+22:00"
    },
    { index: 22, name: "Janne Katila", value: 1950, hours: "+32:30" },
    { index: 23, name: "70500 DT SW CPE", value: 420, hours: "+7:00" },
    { index: 24, name: "Raimo Ahola", value: 1860, hours: "+31:00" },
    {
      index: 25,
      name: "10913 – NG3D testiautomaatio kehitys",
      value: 1140,
      hours: "+19:00"
    },
    { index: 26, name: "Novatron", value: 1140, hours: "+19:00" },
    {
      index: 27,
      name: "70511 LH515i AutoMine > G2-G5",
      value: 210,
      hours: "+3:30"
    },
    {
      index: 28,
      name: "Payroll projekti - vaihe 1",
      value: 1260,
      hours: "+21:00"
    },
    { index: 29, name: "Posti", value: 1560, hours: "+26:00" },
    {
      index: 30,
      name: "70509 AutoMine SF CPE",
      value: 600,
      hours: "+10:00"
    },
    {
      index: 31,
      name: "70501 Test Area, facility, equipm...",
      value: 210,
      hours: "+3:30"
    },
    { index: 32, name: "70337 Pikku-Niilo", value: 1500, hours: "+25:00" },
    {
      index: 33,
      name: "Rekrytointi ja rekrymessut",
      value: 780,
      hours: "+13:00"
    },
    { index: 34, name: "Myynti", value: 480, hours: "+8:00" },
    {
      index: 35,
      name: "61-375 Automation and SW testing",
      value: 30,
      hours: "+0:30"
    },
    {
      index: 36,
      name: "Payroll projekti - vaihe 2",
      value: 300,
      hours: "+5:00"
    },
    {
      index: 37,
      name: "D0005 Automine Surface Drilling - DI650i",
      value: 210,
      hours: "+3:30"
    },
    { index: 38, name: "Jouko Johansson", value: 1980, hours: "+33:00" },
    { index: 39, name: "Sisäinen", value: 30, hours: "+0:30" },
    {
      index: 40,
      name: "Liike - konsultointi",
      value: 1950,
      hours: "+32:30"
    },
    { index: 41, name: "Solita Oy", value: 1950, hours: "+32:30" },
    {
      index: 42,
      name: "70490 OM Roadmap_Location Tracking Project: 61725",
      value: 1200,
      hours: "+20:00"
    },
    { index: 43, name: "Lääkärikäynti", value: 180, hours: "+3:00" },
    { index: 44, name: "Teemu Pajala", value: 900, hours: "+15:00" },
    { index: 45, name: "Sairas", value: 900, hours: "+15:00" },
    {
      index: 46,
      name: "Nikolas Lahtinen (PHZ)",
      value: 900,
      hours: "+15:00"
    },
    { index: 47, name: "Tuntityö", value: 900, hours: "+15:00" },
    { index: 48, name: "Heeros", value: 900, hours: "+15:00" }
  ],
  links: [
    { source: 0, target: 1, value: 1500, hours: "+25:00" },
    { source: 3, target: 4, value: 1800, hours: "+30:00" },
    { source: 6, target: 4, value: 660, hours: "+11:00" },
    { source: 7, target: 8, value: 2250, hours: "+37:30" },
    { source: 10, target: 11, value: 300, hours: "+5:00" },
    { source: 12, target: 11, value: 240, hours: "+4:00" },
    { source: 0, target: 13, value: 120, hours: "+2:00" },
    { source: 14, target: 15, value: 120, hours: "+2:00" },
    { source: 16, target: 17, value: 270, hours: "+4:30" },
    { source: 12, target: 18, value: 60, hours: "+1:00" },
    { source: 19, target: 18, value: 630, hours: "+10:30" },
    { source: 10, target: 18, value: 360, hours: "+6:00" },
    { source: 14, target: 20, value: 600, hours: "+10:00" },
    { source: 14, target: 21, value: 1080, hours: "+18:00" },
    { source: 22, target: 23, value: 420, hours: "+7:00" },
    { source: 24, target: 21, value: 240, hours: "+4:00" },
    { source: 7, target: 25, value: 1140, hours: "+19:00" },
    { source: 24, target: 27, value: 210, hours: "+3:30" },
    { source: 6, target: 28, value: 1260, hours: "+21:00" },
    { source: 16, target: 30, value: 600, hours: "+10:00" },
    { source: 24, target: 31, value: 210, hours: "+3:30" },
    { source: 22, target: 32, value: 1500, hours: "+25:00" },
    { source: 12, target: 13, value: 30, hours: "+0:30" },
    { source: 12, target: 33, value: 210, hours: "+3:30" },
    { source: 10, target: 33, value: 360, hours: "+6:00" },
    { source: 19, target: 33, value: 210, hours: "+3:30" },
    { source: 10, target: 34, value: 60, hours: "+1:00" },
    { source: 12, target: 34, value: 420, hours: "+7:00" },
    { source: 22, target: 35, value: 30, hours: "+0:30" },
    { source: 6, target: 36, value: 300, hours: "+5:00" },
    { source: 16, target: 37, value: 210, hours: "+3:30" },
    { source: 38, target: 39, value: 30, hours: "+0:30" },
    { source: 38, target: 40, value: 1950, hours: "+32:30" },
    { source: 24, target: 42, value: 1200, hours: "+20:00" },
    { source: 0, target: 43, value: 180, hours: "+3:00" },
    { source: 44, target: 45, value: 900, hours: "+15:00" },
    { source: 46, target: 47, value: 900, hours: "+15:00" },
    { source: 10, target: 4, value: 240, hours: "+4:00" },
    { source: 12, target: 4, value: 480, hours: "+8:00" },
    { source: 39, target: 5, value: 30, hours: "+0:30" },
    { source: 13, target: 5, value: 150, hours: "+2:30" },
    { source: 45, target: 5, value: 900, hours: "+15:00" },
    { source: 21, target: 9, value: 1320, hours: "+22:00" },
    { source: 37, target: 9, value: 210, hours: "+3:30" },
    { source: 40, target: 41, value: 1950, hours: "+32:30" },
    { source: 30, target: 9, value: 600, hours: "+10:00" },
    { source: 34, target: 5, value: 480, hours: "+8:00" },
    { source: 42, target: 9, value: 1200, hours: "+20:00" },
    { source: 33, target: 5, value: 780, hours: "+13:00" },
    { source: 18, target: 5, value: 1050, hours: "+17:30" },
    { source: 1, target: 2, value: 1500, hours: "+25:00" },
    { source: 4, target: 5, value: 3180, hours: "+53:00" },
    { source: 11, target: 5, value: 540, hours: "+9:00" },
    { source: 25, target: 26, value: 1140, hours: "+19:00" },
    { source: 28, target: 29, value: 1260, hours: "+21:00" },
    { source: 15, target: 9, value: 120, hours: "+2:00" },
    { source: 20, target: 9, value: 600, hours: "+10:00" },
    { source: 43, target: 5, value: 180, hours: "+3:00" },
    { source: 36, target: 29, value: 300, hours: "+5:00" },
    { source: 47, target: 48, value: 900, hours: "+15:00" },
    { source: 35, target: 9, value: 30, hours: "+0:30" },
    { source: 23, target: 9, value: 420, hours: "+7:00" },
    { source: 32, target: 9, value: 1500, hours: "+25:00" },
    { source: 31, target: 9, value: 210, hours: "+3:30" },
    { source: 8, target: 9, value: 2250, hours: "+37:30" },
    { source: 27, target: 9, value: 210, hours: "+3:30" },
    { source: 17, target: 9, value: 270, hours: "+4:30" }
  ]
};

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="xl">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App v4-beta example
        </Typography>
        <GraphView data={data} />
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}
