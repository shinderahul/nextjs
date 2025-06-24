export const pieChartData = {
  labels: ["CSR", "SSR", "SSG", "ISR"],
  datasets: [
    {
      label: "Rendering Methods",
      data: [10, 20, 30, 15], // Example values, adjust as needed
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)", // CSR
        "rgba(54, 162, 235, 0.6)", // SSR
        "rgba(75, 192, 192, 0.6)", // SSG
        "rgba(255, 206, 86, 0.6)", // ISR
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};
