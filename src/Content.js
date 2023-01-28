import { useState } from "react";
import {FaTrashAlt } from 'react-icons/fa';



const Content = () => {

    const [items,setItems] = useState([
      {
        id:1,
        checked:false,
        item:"Coke"
      },
      {
        id:2,
        checked:false,
        item:"Pepsi"

      },
            {
        id:3,
        checked:false,
        item:"Fanta"

      }
    ]);

    const handleCheck = (id) => {
        const listItems = items.map((item)=>{
         return  item.id === id ? {...item,checked:!item.checked } : item;
        })
        setItems(listItems);
        localStorage.setItem('shopingList',JSON.stringify(listItems));
    }
    const handleDelete = (id) => {
      const listItems = items.filter((item)=> item.id!==id);
      setItems(listItems);
      localStorage.setItem('shopingList',JSON.stringify(listItems));
    }



    return (
    <main>
      {items.length ? (
      <ul>
        {items.map((item) => {return (
          <li className="item" key={item.id}> 
             <input type="checkbox"
             onChange={()=>handleCheck(item.id)}
             checked={item.checked}>
             </input>
             <label
             style={(item.checked ? {textDecoration:'line-through'} : null)}
             onDoubleClick={()=>{handleCheck(item.id)}}
             > {item.item}   </label>
             <FaTrashAlt
             onClick={()=>handleDelete(item.id)}
             role="button"
             tabIndex="0"/>
             
          </li>
        )})}
      </ul>
      ): (
        <p
        style={{marginTop:'2rem'}}>List is empty</p>
      )
      }

    </main>
    )
}



  export default Content;