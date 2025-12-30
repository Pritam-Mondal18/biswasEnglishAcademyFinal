import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { useTheme } from "../context/ThemeContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const HoursChart = ({ labels, values }) => {
  const { theme } = useTheme();

  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: (ctx) => {
          const gradient = ctx.chart.ctx.createLinearGradient(0, 0, 0, 300);
          gradient.addColorStop(0, "#ec4899");
          gradient.addColorStop(1, "#6366f1");
          return gradient;
        },
        borderRadius: 10,
      },
    ],
  };

  const options = {
    animation: {
      duration: 900,
      easing: "easeOutQuart",
    },
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: {
        ticks: { color: theme === "dark" ? "#ccc" : "#333" },
        grid: { color: theme === "dark" ? "#333" : "#eee" },
      },
      x: {
        ticks: { color: theme === "dark" ? "#ccc" : "#333" },
        grid: { display: false },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default HoursChart;
