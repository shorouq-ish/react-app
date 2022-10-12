
import "../CSS/DropedItem.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

function DropedItem({name, flag}) {
  function deleteItem(event){
    let id = event.target.id;
    const element = document.getElementById("parent"+id);
    element.remove(); 
    let storageFav = JSON.parse(localStorage.getItem("favourit"));
            for (var i = 0; i < storageFav.length; i++) {
                if (storageFav[i].name === id) {
                    storageFav.splice(i, 1);
                }
            }
    localStorage.setItem("favourit", JSON.stringify(storageFav));
}

  return (
    <div className="countryItem" id={"parent"+name}>
      <div>
        <img src={flag} alt="flag" className="favImage" />
        <div className="countryName"> {name} </div>
      </div>
      <div>
        <HighlightOffIcon id={name}  onClick={deleteItem}  sx={{ fontSize: "1.3rem", pt: "0.8rem" }} />
      </div>
    </div>
  );
}

export default DropedItem;
