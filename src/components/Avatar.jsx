import AchezPhoto from "../assets/Aches.jpg";
import { Icon } from "@iconify/react";

export default function Avatar() {
  return (
    <div className="avatar-wrapper">
      <Icon icon="clarity:notification-line" className="mobile icon" />
      <Icon icon="fe:app-menu" className="icon" />
      <img src={AchezPhoto} alt="Achez profile photo" className="avatarPhoto" />
    </div>
  );
}
