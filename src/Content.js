import { useState } from "react";


const Content = () => {

    const [name,setName] = useState('Dave');
    const [count,setCount] = useState(0);


      const handleNameChange = ()=>{
    const names =["mukunth","ganesh","mahes"];
    const int = Math.floor(Math.random()*3);
     setName(names[int]);
  }

  const handleClick = () => {
    //the count value is brought to the function and is not changed inside the function
    setCount(count+1);
    setCount(count+3);

    console.log(count);
  }

  const handleClick2 = (name) => {
    console.log(`${name} clicked`);
  }
    const handleClick3 = () => {
    console.log(count);

  }


    return (
    <main>
        <p onDoubleClick={handleClick}>
          {/*handleNameChange is called immediately*/ }
            Hello {name}
        </p>
        {/*since inside onclick we pass reference 
        handleClick is not called immediately*/ }
        <button onClick={handleNameChange}> Change Name</button>
        <button onClick={handleClick}> Click Me</button>
        <button onClick={handleClick3}> Click Me</button>

    </main>
    )
}



  export default Content;