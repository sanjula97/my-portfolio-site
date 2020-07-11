import React, { Component } from 'react';
import { Tabs, Tab } from 'react-mdl';

class Projects extends Component{

    state={
        activeTab: 0
    }

    render(){
        return(
            <div className="category-tabs">
                <Tabs 
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({activeTab : tabId})}
                    ripple >
                        <Tab>React</Tab>
                        <Tab>Angular</Tab>
                        <Tab>ViewJs</Tab>
                        <Tab>NodeJs</Tab>
                        <Tab>Java</Tab>
                        <Tab>Kotlin</Tab>
                    </Tabs>
            </div>
        );
    }
}

export default Projects;