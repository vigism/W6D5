import React from 'react';

class Clock extends React.Component{

  constructor(props){
    super(props);
    this.state = {hour:0,minute:0,second:0};
    let date = new Date();
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    
  }
  
  componentDidMount(){
    this.setState({
      hour: this.hour,
      minute: this.minute,
      second: this.second
    });
    setInterval(this._tick.bind(this),1000);
  }

  _tick(){
    let newState = {};
    
    if(this.state.second + 1 >= 60){
      newState["second"] = 0;
    }else{
      newState["second"] = this.state.second + 1;
    }

    if(newState["second"] === 0){
      newState["minute"] = this.state.minute + 1;
    }

    if(newState["minute"] >= 60){
      newState["minute"] = 0;
    }

    if(newState["minute"] === 0){
      newState["hour"] = this.state.hour + 1;
    }
    if(newState["hour"] >= 24){
      newState["hour"] = 0;
    }


    
    this.setState(newState);
  }

  render(){
    let hour = (this.state.hour);
    let minute = this.state.minute;
    let second = this.state.second;
    if(hour<10){
      hour = "0"+hour.toString()
    }else{
      hour = hour.toString();
    }
    if(minute<10){
      minute = "0"+minute.toString()
    }else{
      minute = minute.toString();
    }
    if(second<10){
      second = "0"+second.toString()
    }else{
      second = second.toString();
    }
    return(
      <div className="parent">
      <h1 className="clock">Clock</h1>
      
        <h5 className="clock-disp"><i>{hour}</i>:<i>{minute}</i>:<i>{second}</i></h5>

      </div>
    );
  }
}

export default Clock;