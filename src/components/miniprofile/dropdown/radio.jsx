import React, { Component } from "react";
import style from "./dropdown.module.css" 



class Demo1 extends Component {

    constructor() {
        super();
        this.state = {
            name: 'Online'
        };
        this.onValChange = this.onValChange.bind(this);
    }

    onValChange = (event) => {
        this.setState({
            name: event.target.value
        });
    }
    
    render() {
        return (
            <ul className={style.onOffStatus}>
                  <li>
                      <div className={style.fgtSec}>
                          <input type="radio" value="Online" onChange={this.onValChange} checked={this.state.name === "Online"}/> 
                          <label >
                            <span>
    
                            </span>
                          </label>
                          <small>Online</small>
                      </div>
                  </li>
                  <li>
                      <div className={style.fgtSec}>
                          <input type="radio" value="Offline" onChange={this.onValChange} checked={this.state.name === "Offline"} /> 
                          <label >
                            <span>
    
                            </span>
                          </label>
                          <small>Offline</small>
                      </div>
                  </li>
              </ul>
        )
    }
  
}


export default Demo1;
