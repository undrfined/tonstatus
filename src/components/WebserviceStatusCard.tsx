import classNames from "classnames";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import Skeleton from "./Skeketon";
import { ServicePerformanceV1 } from "../api";

const options: ChartOptions<"bar"> = {
  layout: {
    padding: {
      left: -10,
      bottom: -10,
    },
  },
  scales: {
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
      title: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
        drawBorder: false,
      },
      title: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    subtitle: {
      display: false,
    },
  },
};

export default function WebserviceStatusCard({
  performance,
}: {
  // eslint-disable-next-line react/require-default-props
  performance?: ServicePerformanceV1;
}) {
  if (!performance) {
    return (
      <div className="webservice-status-card Loading">
        <Skeleton />
      </div>
    );
  }

  const { service, up, uptime, avgResponseTime, last24Hours } = performance;

  const data = {
    labels: last24Hours.map((d) => d.date),
    datasets: [
      {
        type: "bar",
        label: "Average response time",
        data: last24Hours.map((d) => d.avgResponseTime),
        backgroundColor: "rgba(0, 0, 0, .04)",
      },
      {
        type: "line",
        label: "Uptime",
        borderColor: "rgba(0, 0, 0, .04)",
        borderWidth: 2,
        fill: false,
        data: last24Hours.map((d) => d.uptime),
      },
    ],
  };

  return (
    <div className="webservice-status-card">
      <div className="webservice-status-card-details">
        <div className="webservice-status-card-bar">
          {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
          {/* @ts-ignore */}
          <Bar data={data} options={options} />
        </div>

        <button className="webservice-status-card-details-button">
          Show details
        </button>

        <div className="webservice-status-card-name">{service}</div>
        <div className="webservice-status-card-measurements">
          <div className="webservice-status-card-measurement">
            <div className="webservice-status-card-measurement-value">
              {Math.round(uptime)}%
            </div>
            <div className="webservice-status-card-measurement-name">
              Uptime
            </div>
          </div>
          <div className="webservice-status-card-measurement">
            <div className="webservice-status-card-measurement-value">
              {Math.round(avgResponseTime)}ms
            </div>
            <div className="webservice-status-card-measurement-name">
              Average response time
            </div>
          </div>
        </div>
      </div>
      <div
        className={classNames(
          "webservice-status-card-status",
          up ? "Up" : "Down"
        )}
      >
        <span className="material-icons">{up ? "thumb_up" : "thumb_down"}</span>
      </div>
    </div>
  );
}
