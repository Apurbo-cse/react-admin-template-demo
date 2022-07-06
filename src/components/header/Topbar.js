import "./topbar.css"
import { FaBars, FaUser } from "react-icons/fa";

export default function Topbar(){

    return(<div className="navbar navbar-default">
<ul>

  
  
  <li><a href="#settings">  <FaBars  /></a></li>
  <li><a href="#user"><FaUser /></a></li>
</ul>
    </div>);
}