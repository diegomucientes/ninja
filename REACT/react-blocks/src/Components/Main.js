import React, { Component } from 'react';
import Advertisement from './Advertisement';
import './Main.css';
import SubContest from './SubContest';

class Main extends Component{
    render(){
        return(
            <div className="main">
                <SubContest>...</SubContest>
                <SubContest>...</SubContest>
                <SubContest>...</SubContest>
                <Advertisement>...</Advertisement>
            </div>
        )
    } 
}

export default Main; 