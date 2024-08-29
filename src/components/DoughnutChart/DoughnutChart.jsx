import React, { useEffect, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const DoughnutChart = ({ percentages, colors, cutout, centerText }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = chartRef.current;

    if (chart) {
      const ctx = chart.ctx;
      const originalDraw = chart.draw;

      chart.draw = function () {
        originalDraw.call(this);

        const width = chart.width;
        const height = chart.height;
        const fontSize = (height / 114).toFixed(2);
        ctx.restore();
        ctx.font = `${fontSize}em sans-serif`;
        ctx.textBaseline = "middle";

        const text = centerText;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;

        ctx.fillText(text, textX, textY);
        ctx.save();
      };
    }
  }, [percentages, colors, cutout, centerText]);

  const data = {
    datasets: [
      {
        data: percentages,
        backgroundColor: colors,
        borderWidth: 0,
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: cutout || "70%",
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return (
    <div style={{ position: "relative", width: "151px", height: "151px" }}>
      <Doughnut ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default DoughnutChart;
