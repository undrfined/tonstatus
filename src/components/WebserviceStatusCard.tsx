import classNames from "classnames";

interface ServicePerformanceV1 {
  service: string;
  from: Date;
  to: Date;
  avgResponseTime: number;
  up: boolean;
  uptime: number;
  lastCheck: Date | null;
}

// todo...

export default function WebserviceStatusCard({
  up,
  service,
}: ServicePerformanceV1) {
  return (
    <div className="WebserviceStatusCard">
      <div className="WebserviceStatusCard-Name">{service}</div>
      <div
        className={classNames(
          "WebserviceStatusCard-Status",
          up ? "Up" : "Down"
        )}
      >
        {service}
      </div>
    </div>
  );
}
