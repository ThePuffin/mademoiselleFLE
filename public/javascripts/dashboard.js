//--------------------Pie -----------------------------//

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

Chart.defaults.global.defaultFontColor = "dimgrey";
Chart.defaults.global.defaultFontSize = 16;

const data = {
  labels: [
    "Rendez-vous 70%",
    "Nouveau commentaire 20 %",
    "Nouvel utilisateur 10 %"
  ],
  datasets: [
    {
      fill: true,
      backgroundColor: [
        "rgb(235, 176, 0)",
        "rgb(0, 143, 153)",
        "rgb(235, 110, 128)"
      ],
      data: [10, 9, 8]
    }
  ]
};

const myBarChart = new Chart(ctx, {
  type: "pie",
  data: data
});

//--------------------Map Monde -----------------------------//
const map = AmCharts.makeChart("chartdiv", {
  type: "map",
  theme: "none",
  projection: "miller",

  dataProvider: {
    map: "worldLow",
    getAreasFromMap: true
  },
  areasSettings: {
    autoZoom: true,
    selectedColor: "rgb(255, 80, 61)"
  },
  smallMap: {},
  export: {
    enabled: true,
    position: "bottom-right"
  }
});

//--------------------Bar Chart -----------------------------//

const knowledgeLevels = [
  { name: "None", color: "rgb(0,0,0)" },
  { name: "10", color: "rgb(23, 86, 162)" },
  { name: "20", color: "rgb(54, 200, 162)" },
  { name: "30", color: "rgb(255, 205, 86)" },
  { name: "40", color: "rgb(255, 99, 132)" },
  { name: "50", color: "rgb(160, 120, 132)" },
  { name: "100", color: "rgb(255, 255, 255)" }
];

const languagesData = [
  { name: "A1", value: 4 },
  { name: "A2", value: 3 },
  { name: "B1", value: 2 },
  { name: "B2", value: 1 }
];

const technologiesData = [
  { name: "Unity", value: 4 },
  { name: "Mono C/C++ API", value: 3 },
  { name: "Node.js API", value: 2 }
];

function makeData(text, datasetData) {
  return {
    labels: datasetData.map(entry => entry.name),
    datasets: [
      {
        label: text,
        data: datasetData.map(entry => entry.value),
        backgroundColor: datasetData.map(
          entry => knowledgeLevels[entry.value].color
        )
      }
    ]
  };
}

window.onload = function () {
  let ctx = document.getElementById("barCharts");

  let chart = new Chart(ctx, {
    type: "bar",
    data: makeData("Languages", languagesData),
    options: {
      tooltips: {
        callbacks: {
          label: (tooltipItem, data) => knowledgeLevels[tooltipItem.yLabel].name
        }
      },
      title: {
        display: true,
        text: "Niveaux les plus consultés",
        fontSize: 16
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            barPercentage: 0.9,
            categoryPercentage: 0.7
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              max: knowledgeLevels.length - 1,
              callback: (value, index, values) =>
                knowledgeLevels[value]
                  ? knowledgeLevels[value].name
                  : "Undefined"
            }
          }
        ]
      }
    }
  });
};
