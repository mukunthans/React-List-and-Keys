const Content = () => {
      const handleNameChange = ()=>{
    const names =["mukunth","ganesh","mahes"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }

  const handleClick = () => {
    console.log("clicked");
  }
  const handleClick2 = (name) => {
    console.log(`${name} clicked`);
  }
    const handleClick3 = (e) => {
    console.log(e);
    console.log(e.target.innerText);
  }


    return (
    <main>
        <p onDoubleClick={handleClick}>
          {/*handleNameChange is called immediately*/ }
            Hello {handleNameChange()}
        </p>
        {/*since inside onclick we pass reference 
        handleClick is not called immediately*/ }
        <button onClick={handleClick}> Click Me</button>
        <button onClick={() => handleClick2("Mukunth")}> Click Me</button>
        <button onClick={(event) => handleClick3(event)}> Click Me</button>

    </main>
    )
}



  export default Content;