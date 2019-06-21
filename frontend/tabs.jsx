import React from 'react';
class Tabs extends React.Component {
  constructor(props){
    super(props);
    this.state={index:0,content:[]};
    
  }
  
  componentDidMount(){
    this.setState({content:this.props.content});
  }

  tabClick(index){
    this.setState({index:index});
    let headers = document.querySelectorAll("*[class^='tab-header']");
    for(let i = 0;i<headers.length;i++){
      if(i === index){
        headers[i].className = "tab-header-selected";
      }else{
        headers[i].className = "tab-header";
      }
    }
  }

  render(){
    return (
      <div>
      <h1>Tabs</h1>
      <div className="tabs">
        <ul className="tabs-header-list">
            <li className="tab-header" onClick={()=>(this.tabClick(0))} ><div >{this.props.content[0].title}</div></li>
            <li className="tab-header" onClick={()=>(this.tabClick(1))}><div >{this.props.content[1].title}</div></li>
            <li className="tab-header" onClick={()=>(this.tabClick(2))}> <div >{this.props.content[2].title}</div></li></ul>
      <article className="tab-content">
        {this.props.content[this.state.index].content}
      </article>
      </div>
      </div>
    )
  }
}

export default Tabs;