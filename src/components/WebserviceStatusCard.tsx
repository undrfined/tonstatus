import classNames from "classnames";
import Skeleton from './Skeketon';

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
                                               performance,
                                             }: {
  performance?: ServicePerformanceV1;
}) {
  if (!performance) {
    return (
      <div className="webservice-status-card Loading">
        <Skeleton/>
      </div>
    )
  }

  const { service, up, uptime, avgResponseTime } = performance;

  const isUp = uptime < 100;

  return (
    <div className="webservice-status-card">
      <div className="webservice-status-card-details">
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
          isUp ? "Up" : "Down"
        )}
      >
        <span className="material-icons">{isUp ? 'thumb_up' : 'thumb_down'}</span>
      </div>
    </div>
  );
}