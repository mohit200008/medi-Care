import React, { useState } from 'react';
import Navbar from './components/NavBar/Navbar';
import './App.css';
import Home from './components/Home/Homepage.jsx';
import HomeHi from './components/Home/Homepagehi'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ContactUs from './components/Health/Health';
import Chatbot from './components/Chatbot/Chatbot';
import DiseaesPred from './components/DiseasePred/DiseaseDetection';
import Doctor from './components/Doctor/Doctor';
import Details from './components/Doctor/Details';
import NotfoundPage from "./components/NotfoundPage";
import HeartDiseaseForm from "./components/DiseasePred/HeartDiseasePred/HeartDiseaseForm";
import KidneyDiseaseForm from "./components/DiseasePred/KidneyDiseasePred/KidneyDiseaseForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import { CSSTransition } from 'react-transition-group';
import DiseaseReport from './components/DiseasePred/DiseaseReport';

function App() {

  //all the routes
  const routes = [
    { path: '/', Component: Home },
    { path: '/DiseaesPred', Component: DiseaesPred },
    { path: '/hi', Component: HomeHi },
    { path: '/Doctor', Component: Doctor },
    { path: '/Details', Component: Details },
    { path: '/health', Component: ContactUs },
    { path: '/heart-predict', Component: HeartDiseaseForm },
    { path: '/kidney-predict', Component: KidneyDiseaseForm },
    { path: '/report/:type', Component: DiseaseReport },
  ]

  const [mode, setMode] = useState('light');

  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {

    setalert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setalert(null);
    }, 1800);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#050A30";
      showalert("Dark mode has been enbled", "primary");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showalert("Light mode has been enbled", "primary");


    }
  }

  return (
    <Router>
      <Chatbot />
      <Navbar mode={mode} toggleMode={toggleMode} />

      <Switch>


        {
          routes.map(route => {
            const { path, Component } = route;

            return <Route key={path} path={path} exact >
              {
                ({ match }) => (
                  //component to make page transiiton on routing
                  <CSSTransition
                    in={match != null}
                    timeout={500}
                    unmountOnExit
                    classNames="page"
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )
              }


            </Route>
          })
        }

        <Route >
          <NotfoundPage />
        </Route>


        {/* <Switch>
        <Route path='/' exact  >
        {
                      ({ match }) => (
                          <CSSTransition
                            in ={true}
                            timeout={2000}
                            unmountOnExit
                            classNames="page"
                          >
                            <div className="page">
                            <Home/>
                            </div>
                          </CSSTransition>
                      )
                  }
            
        </Route>
        <Route path='/DiseaesPred'  > 
                  {
                      ({ match }) => (
                          <CSSTransition
                            in ={true}
                            timeout={2000}
                            unmountOnExit
                            classNames="page"
                          >
                            <div className="page">
                                <DiseaesPred />
                            </div>
                          </CSSTransition>
                      )
                  }
              </Route>
        <Route path='/hi' exact  >
            <HomeHi/>
        </Route>
        <Route path='/Doctor'  > 
            <Doctor/>
        </Route>
        <Route path='/Details' component={Details} />
        <Route path='/health'  > 
            <ContactUs/>
        </Route>
      </Switch> */}

      </Switch>
    </Router>
  );
}

export default App;
