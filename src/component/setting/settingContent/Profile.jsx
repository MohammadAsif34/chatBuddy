import styles from "../SettingSidebarContent.module.css";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../../context/UserContext";

const Profile = () => {
  const navigate = useNavigate();
  const { currUser } = useContext(userContext);
  return (
    <>
      <div className={styles.settingProfile}>
        <div className={styles.avatar}>
          <img src={currUser?.avatar || "/chatBuddy/default_avatar.png"} />
        </div>

        <div className={styles.name}>
          <p>{currUser?.name || "default_name"}</p>
          <span className="bi bi-pencil"></span>
        </div>
        <div className={styles.about}>
          <label>About</label>
          <p>{currUser?.about || "default_about"}</p>
          <span className="bi bi-pencil"></span>
        </div>
        <div className={styles.phone}>
          <label>Phone number</label>
          <p>+91 {currUser?.phone || "0000000000"}</p>
        </div>
        <p></p>
      </div>
      <div className={styles.logout}>
        {currUser ? (
          <button
            onClick={() => {
              try {
                sessionStorage.clear();
                window.location.href = "/";
              } catch (error) {
                alert(error);
              }
            }}
          >
            Logout
          </button>
        ) : (
          <button onClick={() => navigate("login")}>login</button>
        )}
        <p>
          Chat history on this computer will be cleared when you are log out.
        </p>
      </div>
    </>
  );
};

export default Profile;
