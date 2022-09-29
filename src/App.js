import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import Weat from './components/Weat';
import Footer from './components/Footer';

export default class App extends Component {
  pageSize=24;
  // apiKey= "pub_105921cd052f429f65c7fc2bafbbb43e64dfe";
    apiKey="pub_10523b85f697bb01373c380beb4504a356cd1";
  
state={mode:false,progress:0}
// state={progress:0}

setMode=()=>{
  if(this.state.mode==="light"){
this.setState({mode:"dark"});
document.body.style.backgroundColor="white"
document.body.style.color="black"

  }
  else{
    this.setState({mode:"light"});
    document.body.style.backgroundColor="#040720";
    document.body.style.color="#4c00b0";
  }

}

  
setProgress =  (pro)=>{
   this.setState({progress:pro})
}

  render() {
    return (
      <>
        <Router>
          
          <NavBar mode={this.state.mode} setMode={this.setMode} />
          
          <LoadingBar
          height={4}
          color='#f11946'
          progress={this.state.progress}
          />
         
          <Routes>
            <Route exact path="/" element={<News mode={this.state.mode} setProgress={this.setProgress} key="top" pageSize={this.pageSize} category="top" apiKey={this.apiKey} />}>

            </Route> 

            <Route exact path="/business" element={<News mode={this.state.mode} setProgress={this.setProgress} key="business" pageSize={this.pageSize} category="business" apiKey={this.apiKey}/>}>

            </Route>

            <Route exact path="/entertainment" element={<News mode={this.state.mode} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} category="entertainment" apiKey={this.apiKey} />}>

            </Route>

            <Route exact path="/health" element={<News mode={this.state.mode} setProgress={this.setProgress} key="health" pageSize={this.pageSize} category="health" apiKey={this.apiKey} />}>

            </Route>

            <Route exact path="/science" element={<News mode={this.state.mode} setProgress={this.setProgress} key="science" pageSize={this.pageSize} category="science" apiKey={this.apiKey} />}>

            </Route>

            <Route exact path="/sports" element={<News mode={this.state.mode} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} category="sports" apiKey={this.apiKey} />}>

            </Route>

            <Route exact path="/technology" element={<News mode={this.state.mode} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} category="technology" apiKey={this.apiKey}/>}>

            </Route>

            <Route exact path='weather' element={<Weat mode={this.state.mode} setProgress={this.setProgress}/>}></Route>   
          </Routes>

{!News&& <Footer/>}
        </Router>

      </>
    )
  }
}

