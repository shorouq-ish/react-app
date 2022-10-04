import Image1 from "../assets/al.svg";
import "../CSS/DropedItem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function DropedItem() {
  return (
    <div className="countryItem">
      <div>
        <img src={Image1} alt="flag" className="favImage" />
        <div className="countryName"> Jordan </div>
      </div>
      <div>
        <HighlightOffIcon sx={{ fontSize: "1.3rem", pt: "0.8rem" }} />
      </div>
    </div>
  );
}

export default DropedItem;
