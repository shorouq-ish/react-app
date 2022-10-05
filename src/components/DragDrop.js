import "../CSS/DragDrop.css";
import DropedItem from "./DropedItem";

function DragDrop() {
  return (
    <div className="drop">
      <div className="fav-title">Favourites</div>
      <DropedItem />
      <DropedItem />
      <DropedItem />
    </div>
  );
}

export default DragDrop;
