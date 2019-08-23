import * as React from 'react'
// import Button from 'antd/es/button';
import './App.css';
import Box from './components/views/HomePage'
import Lista from './pages/list'

class App extends React.Component {

  public myClickHandler(data:string) {
      console.log(data)
  }

  public render() {
    return (
      <div className="App">
        <Box title='标题' age = {200} onMyClick = { this.myClickHandler}/>
        <Lista />
      </div>
    );
  }
}
export default App;