import "./Topbar.css"
import {Home,Timeline, Search, Person, Chat, Notifications } from "@mui/icons-material/";
import { useContext } from "react";
import {Link} from "react-router-dom"
import { AuthContext } from "../../context/AuthContext";

export default function Topbar() {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  const {user} = useContext(AuthContext);

  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <Link to ="/" style={{textDecoration:"none"}}>
        <span className="logo">Skulga</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">
            <Home />
          </span>
          <span className="topbarLink">
            <Timeline />
          </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture : PF+"person/default.png"} alt="" className="topbarImg"/>
        </Link>
      </div>
    </div>
  )
}
