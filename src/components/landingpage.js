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

                            <div className="social-links">

                                {/* linkedin */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-linkedin-square"  aria-hidden="true"></i>
                                </a>
                                {/* Github */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-github"  aria-hidden="true"></i>
                                </a>
                                {/* bitbucket */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-bitbucket"  aria-hidden="true"></i>
                                </a>
                                {/* freecode camp */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-free-code-camp"  aria-hidden="true"></i>
                                </a>
                                {/* twitter */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-twitter"  aria-hidden="true"></i>
                                </a>
                                {/* facebook */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-facebook-square"  aria-hidden="true"></i>
                                </a>
                                {/* instergram */}
                                <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                    <i class="fa fa-instagram"  aria-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;