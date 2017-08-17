let React = require('react');
let Popular = require('./Popular.js');
let ReactRouter = require('react-router-dom');
let Router = ReactRouter.BrowserRouter;
let Route = ReactRouter.Route;
let Nav = require('./Nav');
let Home = require('./Home');
let Battle = require('./Battle');
let Switch = ReactRouter.Switch;

class App extends React.Component {
  render() {
    return (
        <Router>
            <div className='container'>
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} />
                    <Route path='/popular' component={Popular} />
                    <Route path='/battle' component={Battle} />
                    <Route render={ () =>{
                            return(
                                <p>Not Found</p>
                            )
                        }
                    }/>
                </Switch>
            </div>
        </Router>
    )
  }
}

module.exports = App;
