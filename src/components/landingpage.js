import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class LandingPage extends Component{
    render(){
        return(
            <div style={{width:'100%', margin:'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                    <img className="awatar-img" src="https://image.flaticon.com/icons/png/512/924/924915.png" alt="My picture"/>

                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>

                            <hr />

                            <p>HTML/CSS | JavaScript | ReactJS | NodeJS | Express | JAVA | MongoDB</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;