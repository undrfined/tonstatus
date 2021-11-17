import classNames from "classnames";
import { Bar } from "react-chartjs-2";
import { ChartOptions } from "chart.js";
import useModal from "use-react-modal";
import { useEffect, useState } from "react";
import Skeleton from "./Skeketon";
import {
  DateServicePerformanceMeasurementV1,
  getWebserviceDaily,
  getWebserviceHourly,
  ServicePerformanceV1,
} from "../api";

const cardChartOptions: ChartOptions<"bar"> = {
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

const modalChartOptions: ChartOptions<"bar"> = {
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
        display: true,
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
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
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
  const { isOpen, openModal, Modal, backdropRef } = useModal();
  const [activeDate, setActiveDate] = useState("24h");
  const [showModalChart, setShowModalChart] = useState(false);
  const [fullData, setFullData] = useState<
    DateServicePerformanceMeasurementV1[]
  >([]);

  useEffect(() => {
    if (!isOpen) {
      setShowModalChart(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const refreshFullData = async () => {
        if (!performance) {
          return;
        }

        setShowModalChart(false);

        const from = new Date();
        const to = new Date();

        if (activeDate === "24h") {
          from.setHours(from.getHours() - 24);
          setFullData(await getWebserviceHourly(performance.service, from, to));
        }

        if (activeDate === "7d") {
          from.setHours(from.getHours() - 24 * 7);
          setFullData(await getWebserviceDaily(performance.service, from, to));
        }

        if (activeDate === "30d") {
          from.setHours(from.getHours() - 24 * 30);
          setFullData(await getWebserviceDaily(performance.service, from, to));
        }

        setTimeout(() => {
          setShowModalChart(true);
        }, 500);
      };

      refreshFullData();
    }
  }, [isOpen, activeDate, performance]);

  const modalChartData = {
    labels: fullData.map((d) => new Date(d.date).toLocaleString()),
    datasets: [
      {
        type: "line",
        label: "Uptime",
        borderColor: "#0072ab",
        borderWidth: 2,
        fill: false,
        data: fullData.map((d) => d.uptime),
      },
      {
        type: "bar",
        label: "Average response time",
        data: fullData.map((d) => d.avgResponseTime),
        backgroundColor: "#0088CC",
      },
    ],
  };

  if (!performance) {
    return (
      <div className="webservice-status-card Loading">
        <Skeleton />
      </div>
    );
  }

  const { service, up, uptime, avgResponseTime, last24Hours } = performance;

  const cardChartData = {
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
          <Bar data={cardChartData} options={cardChartOptions} />
        </div>

        <button
          onClick={openModal}
          className="webservice-status-card-details-button"
        >
          Show details
        </button>

        {isOpen && (
          <Modal>
            <div className="modal">
              <div className="modal-dates">
                <div
                  className={classNames(
                    "modal-date",
                    activeDate === "24h" ? "modal-date-active" : undefined
                  )}
                  onClick={() => setActiveDate("24h")}
                >
                  24h
                </div>
                <div
                  className={classNames(
                    "modal-date",
                    activeDate === "7d" ? "modal-date-active" : undefined
                  )}
                  onClick={() => setActiveDate("7d")}
                >
                  7 days
                </div>
                <div
                  className={classNames(
                    "modal-date",
                    activeDate === "30d" ? "modal-date-active" : undefined
                  )}
                  onClick={() => setActiveDate("30d")}
                >
                  30 days{" "}
                </div>
              </div>

              <div className="modal-content">
                {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
                {/* @ts-ignore */}
                {showModalChart && (
                  /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
                  /* @ts-ignore */
                  <Bar data={modalChartData} options={modalChartOptions} />
                )}
                {(!showModalChart || !fullData.length) && <Skeleton />}
              </div>
            </div>
          </Modal>
        )}

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
