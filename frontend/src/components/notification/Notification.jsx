import { useEffect, useState } from "react";
import "./notification.scss";

const notifs = [
  "We are open for partnership",
  "We deliver Next-Level Software Solutions!",
  "Expert Software design, development, support & maintenance!",
];

const Notification = () => {
  const [notifIndex, setNotifIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNotifIndex((prev) => (prev === notifs.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="notification">
      <span>{notifs[notifIndex]}</span>
    </div>
  );
};

export default Notification;
