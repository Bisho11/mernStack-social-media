import "./profile.css";
import Topbar from "../../components/Topbar/Topbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import Rightbar from "../../components/Rightbar/Rightbar";

export default function Profile() {
  const PF =process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={`${PF}post/3.png`}
                alt=""
              />
              <img
                className="profileUserImg"
                src={`${PF}person/7.png`}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Bocchi san</h4>
                <span className="profileInfoDesc">Hello my friends!  </span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar/>
          </div>
        </div>
      </div>
    </>
  );
}