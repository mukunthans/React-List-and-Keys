

import Header from './header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const handleNameChange = ()=>{
    const names =["mukunth","ganesh","mahes"];
    const int = Math.floor(Math.random()*3);
    return names[int];
  }
  return (
    <div className="App">
     <Header/>
     <Content/>
     <Footer/>
    </div>
  );
}

export default App;
