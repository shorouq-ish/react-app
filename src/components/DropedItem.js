import "../CSS/DropedItem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function DropedItem({ name, flag, onClick }) {
  function deleteItem(e) {
    {
      onClick(e.target.id);
    }
  }

  return (
    <div className="countryItem" id={"parent" + name}>
      <div>
        <img src={flag} alt="flag" className="favImage" />
        <div className="countryName"> {name} </div>
      </div>
      <div>
        <HighlightOffIcon
          id={name}
          onClick={deleteItem}
          sx={{ fontSize: "1.3rem", pt: "0.8rem" }}
        />
      </div>
    </div>
  );
}

export default DropedItem;
