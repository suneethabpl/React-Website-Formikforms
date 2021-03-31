// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


// import React from 'react';
// import Pagewrapper from './Components/Pagewrapper';

// import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// //Pages
// import Home from './Components/Pages/Home'
// import About from './Components/Pages/About'
// // import Services from './Common/Services'
// // import Portofolio from './Common/Portofolio'

// function App() {
//   return (
//     <Router>
//       <Pagewrapper>

//         <Route
//           // path="/home"
//           exact={true}
//           path="/"
//           component={Home}
//         />

//         {/* <Home /> */}
//         <Route
//           path="/about"
//           component={About}
//         />

//         {/* <Route
//           path="/services"
//           component={Services}
//         />

//         <Route
//           path="/portofolio"
//           component={Portofolio}
//         /> */}
//       </Pagewrapper>
//     </Router>
//   );
// }

// export default App;


import React, { Component } from 'react';
import Pagewrapper from './Components/Pagewrapper';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
//Pages
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Contact from './Components/Pages/Contact'
import AdminWrapper from './Components/AdminWrapper';
import Login from './Components/Pages/Login';
import Dashboard from './Components/Pages/Dasboard'
class App extends Component {
  render() {
    return (
      <Router>

        <Route
          path="/admin"
          render={props => {
            return(
              <AdminWrapper>
              {this.props.auth.token ?
              <Dashboard/>
            :
            <Login />
            }
            </AdminWrapper>
    
          )
        }}
        />




        <Route
          // path="/home"
          exact={true}
          path="/"
          // component={Home}
          render={props => (
            <Pagewrapper>
              <Home {...props} />
            </Pagewrapper>
          )}
        />


        {/* <Home /> */}
        <Route
          // path="/home"
          path="/about"
          render={props => (
            <Pagewrapper>
              <About {...props} />
            </Pagewrapper>
          )}
        />

        <Route
          // path="/home"
          path="/contact"
          render={props => (
            <Pagewrapper>
              <Contact {...props} />
            </Pagewrapper>
          )}
        />


      </Router>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return {

  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
