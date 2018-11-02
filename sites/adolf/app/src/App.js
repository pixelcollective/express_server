import React, { Component } from 'react'
import Nav from './components/Nav.js'
import NaziEagleEmphasized from './svg/NaziEagleEmphasized.js'
import NaziEagleGradient from './svg/NaziEagleGradient.js'
import HitlerCampaign from './svg/HitlerCampaign.js'
import Hitler from './images/hitler-sq.jpg'
import './css/app.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="meta">
          <div className="container">
            <div className="row">
              <div className="columns two">
                <HitlerCampaign />
              </div>
              <div className="columns nine offset-by-one">
                <Nav />
              </div>
            </div>
          </div>
        </div>
        <div className="header">
          <div className="eagle-wrap">
            <div className="page-title">
              <div className="container">
                <div className="row">
                  <div className="twelve columns">
                    <NaziEagleEmphasized />
                    <h1>Powerful Leadership &amp; Republican Values For America's Heartland</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>   
        <div className="container">
          <div className="row callout">
            <div className="four columns offset-by-one">
              <img src={Hitler} />
            </div>
            <div className="six columns">
              <h1>Adolf is the embodiment of the Republican party.</h1>
              <p>Proud heritage, a strong military and the protection of the American everyman from the scourge of the immigrant.</p>
            </div>
          </div>
        </div>
        <div className="container pillars">
          <div className="row">
            <div className="twelve columns">
              <h3>Adolf stands with Trump on Issues like Immigration</h3>
              <blockquote>
                <p>“It’s our right as a sovereign nation to choose immigrants we think are the likeliest to thrive and flourish and love us. When Mexico sends its people, they’re not sending their best. They’re sending people that have lots of problems, and they’re bringing those problems with us. They’re bringing drugs. They’re bringing crime. They’re rapists.”</p>
                <cite>&mdash; Donald Trump</cite>
              </blockquote>
              <p>Perhaps the only man greater than Adolf Hitler is Donald Trump. And, as luck would have it for the card-carrying American voter, their platforms are perfectly compatible.</p>
              <button>Learn More</button>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
              <h3>Adolf is Rooted in American History and Tradition</h3>
              <p>Since the civil war, in which the southern states were conquered, against all historical logic and sound sense, the American people have been in a condition of political and popular decay. In that war, it was not the Southern States, but the American people themselves who were conquered. In this spurious blossoming of economic progress and power politics, America has ever since been drawn deeper into the mire of progressive self-destruction.</p>
              <button>Make America Great Again</button>
            </div>
          </div>
          <div className="row">
            <div className="twelve columns">
                <h3>Adolf &hearts;'s Small Business</h3>
                <blockquote>
                  <p>We must close union offices, confiscate their money and put their leaders in prison. We must reduce workers salaries and take away their right to strike.</p>
                  <cite>&mdash; Adolf Hitler</cite>
                </blockquote>
                <button>Donate Today</button>
              </div>
          </div>
        </div>
        <div className="blog">
          <div className="row">
            <div className="twelve columns">
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
