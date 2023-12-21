import React, { useState ,useEffect} from 'react';
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
import Chart from './components/chart/Chart';
import Footer from './components/Footer/Footer.jsx';

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
    {path:'/covid',Component:Chart},
  ]

  const [mode, setmode] = useState("light");
  const togglemode =() =>{
    if (mode === "light"){
      setmode("dark");
    }
    else{
      setmode("light");
    }
  }

  useEffect(() => {
    // Update the class on the body element when mode changes
    document.body.classList.toggle('dark-mode', mode === 'dark');
  }, [mode]);


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

  return (
    <Router>
      <Chatbot />
      <Navbar togglemode={togglemode} mode={mode} />

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
      <Footer/>
    </Router>
  );
}

export default App;
