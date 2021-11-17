import classNames from "classnames";
import styles from "../App.module.scss";
import useWebservices from "../reducers/useWebservices";

export default function Header() {
  const webservices = useWebservices();

  const isLoading = webservices.length === 0;
  const isDanger = !isLoading && webservices.every((p) => !p.up);
  const isWarning = !isLoading && webservices.some((p) => !p.up);

  let statusText = isLoading ? "Loading..." : "All systems operational";
  let statusColor = isLoading ? "var(--accentColor)" : "var(--successColor)";
  let statusTextColor = "white";

  if (isWarning) {
    statusText = "Something is no ok!";
    statusColor = "var(--warningColor)";
    statusTextColor = "black";
  }
  if (isDanger) {
    statusText = "Everything is broken!";
    statusColor = "var(--dangerColor)";
  }

  return (
    <>
      <div
        className={classNames(
          styles.logo,
          isLoading ? styles.logoLoading : undefined,
          isWarning ? styles.logoWarning : undefined,
          isDanger ? styles.logoDanger : undefined
        )}
      >
        <svg
          className={classNames(
            isLoading ? styles.logoLoading : undefined,
            isWarning ? styles.logoWarning : undefined,
            isDanger ? styles.logoDanger : undefined
          )}
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.5479 10.5739L20.5218 10.5739C20.8393 10.5739 21.1566 10.6205 21.4881 10.7751C21.8855 10.9603 22.0963 11.2524 22.2439 11.4683C22.2554 11.4851 22.2662 11.5024 22.2761 11.5201C22.4497 11.8292 22.5392 12.1628 22.5392 12.5217C22.5392 12.8627 22.4581 13.2343 22.2761 13.5581C22.2744 13.5612 22.2726 13.5643 22.2708 13.5674L16.6013 23.3065C16.4762 23.5213 16.2461 23.6531 15.9976 23.6522C15.7491 23.6513 15.5199 23.5179 15.3964 23.3022L9.83089 13.5839C9.8293 13.5812 9.8277 13.5786 9.82609 13.576C9.69874 13.3661 9.50177 13.0415 9.46733 12.6226C9.43566 12.2374 9.52222 11.8515 9.71576 11.5169C9.9093 11.1822 10.2007 10.9146 10.5511 10.7509C10.9269 10.5753 11.3077 10.5739 11.5479 10.5739ZM15.3044 11.9652L11.5479 11.9652C11.3011 11.9652 11.2063 11.9804 11.1401 12.0114C11.0485 12.0541 10.9716 12.1244 10.9202 12.2134C10.8687 12.3023 10.8455 12.4054 10.854 12.5086C10.8588 12.5678 10.8829 12.6354 11.0251 12.87C11.0281 12.8749 11.031 12.8799 11.0339 12.8849L15.3044 20.342V11.9652ZM16.6957 11.9652V20.3788L21.0651 12.873C21.1145 12.7834 21.1479 12.654 21.1479 12.5217C21.1479 12.4144 21.1257 12.3213 21.0759 12.2253C21.0238 12.1503 20.992 12.1106 20.9654 12.0834C20.9426 12.0601 20.9251 12.0477 20.9003 12.0361C20.797 11.9879 20.6913 11.9652 20.5218 11.9652L16.6957 11.9652Z"
            fill="#303757"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32 16C32 24.8365 24.8365 32 16 32C7.16342 32 0 24.8365 0 16C0 7.16342 7.16342 0 16 0C24.8365 0 32 7.16342 32 16ZM30.6087 16C30.6087 24.0681 24.0681 30.6087 16 30.6087C7.93182 30.6087 1.3913 24.0681 1.3913 16C1.3913 7.93182 7.93182 1.3913 16 1.3913C24.0681 1.3913 30.6087 7.93182 30.6087 16Z"
            fill="currentColor"
          />
        </svg>
      </div>

      <div
        className={classNames(
          styles.header,
          isLoading ? styles.headerLoading : undefined,
          isWarning ? styles.headerWarning : undefined,
          isDanger ? styles.headerDanger : undefined
        )}
      >
        The Open Network{" "}
        <span
          data-background-color={statusColor}
          data-text-color={statusTextColor}
          data-tip={statusText}
          className={styles.headerStatus}
        >
          Status
        </span>
      </div>
    </>
  );
}
