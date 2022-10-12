import "../CSS/DragDrop.css";
import DropedItem from "./DropedItem";
import { useDrop } from 'react-dnd'
import {useEffect, useState} from 'react'


function DragDrop() {
  
  const [dropItem, setdropItem] = useState([]);
  const [{isOver}, drop] = useDrop(() => ({
    accept: 'card',
    drop: (item) => addtoLocalStorage(item.name, item.flag),
    collect: (monitor) => ({
      isOver: !! monitor.isOver()
  })

  }))

  function addtoLocalStorage(name, flag){
    let doubleFlag = 0;
    let favouritCountry = {
      name : name,
      flag : flag
    }
    let storageFav = JSON.parse(localStorage.getItem("favourit"));
    let i = 0;
            if (storageFav) {
                i = storageFav.length;
                for (let n of storageFav) {
                    if (n.name == favouritCountry.name) {
                        doubleFlag = 1;
                        break;
                    }
                }
            }
            else {
              
                storageFav = [];
            }

            if (favouritCountry && !doubleFlag) {
              storageFav[i++] = favouritCountry;
              localStorage.setItem("favourit", JSON.stringify(storageFav));
              
          }
    setdropItem(storageFav);
    

  }

  useEffect(()=>{
    let storageFav = JSON.parse(localStorage.getItem("favourit"));
    if(storageFav){
      setdropItem(storageFav);

    }
    
  },[])
  

  return (
    <div id="drop" className="drop" ref={drop} style={{border: isOver? "5px solid green" : "0px" }}>
      <div className="fav-title" >Favourites</div>
          {dropItem.map((item)=>(
            <DropedItem name={item.name} flag={item.flag} />
          ))}
    </div>
  );
}

export default DragDrop;
