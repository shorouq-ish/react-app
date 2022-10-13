import "../CSS/DragDrop.css";
import DropedItem from "./DropedItem";
import { useDrop } from "react-dnd";

function Favourites({ onDrop, favourits, onClick, theme }) {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "card",
    drop: (item) => addtoLocalStorage(item.name, item.flag),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  function addtoLocalStorage(name, flag) {
    {
      onDrop(name, flag);
    }
  }

  const deleteItem = (id) => {
    {
      onClick(id);
    }
  };

  return (
    <div
      id="drop"
      className="drop"
      ref={drop}
      style={{ border: isOver ? "5px solid green" : "0px" }}
      data-theme={theme}
    >
      <div className="fav-title">Favourites</div>
      {favourits.map((item) => (
        <DropedItem name={item.name} flag={item.flag} onClick={deleteItem} />
      ))}
    </div>
  );
}

export default Favourites;
