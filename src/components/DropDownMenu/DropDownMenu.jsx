import "./DropDownMenu.css";
import React from "react";

function template() {
  return (
    <div className="DropDownMenu">
        <div className="search-container search">
            <input className="search" onKeyUp={this.handleSearch} type="text" placeholder="select your color" tabIndex="1" />
            {/* <input className="search" onKeyUp={this.handleSearch} onKeyDown={this.handleDelete} type="search" placeholder="select your color" /> */}
            <i className="search">🔍</i>
        </div>
        {/* <div onMouseLeave={this.handleMouseLeave} className="dropdown-container"> */}
        {
            (this.state.colors.length>0) ? (
                <div className="dropdown-container">
                    {
                        this.state.colors.map((color, index) => {
                            return (
                                // <span key={index} onClick={event => this.handleSelect(event, index)} tabIndex={(index+1).toString()}>
                                <span key={index} onClick={event => this.handleSelect(event, index)} tabIndex="2" onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave} /*onTab={this.handleTab}*/>
                                    <b>{color[0]}</b>{color[1]}
                                </span>
                            );
                        })
                    }
                </div>
            ) : null
        }
    </div>
  );
};

export default template;
