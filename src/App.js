import React from 'react';
import { Layout, Header, Navigation,Drawer,Content } from 'react-mdl';
import Main from './components/main'

import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div style={{height: '300px', position: 'relative'}}>
    <Layout >
        <Header className="header-color" title="Sanjula Kraunarathna" scroll>
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">AbouMe</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/aboutme">AbouMe</Link>
            </Navigation>
        </Drawer>
        <Content>
          <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
