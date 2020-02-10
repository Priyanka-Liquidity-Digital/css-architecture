import React, {Component} from 'react';
import { BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom';

import FlexboxBasics from '../../pages/FlexboxBasics';

class Layout extends Component {
    render(){
        return(
            <div className="layout">
                <Router>
                    <Switch>
                        <Redirect exact strict from="/" to="/flexbox-basics" />
                        <Route exact strict path={"/flexbox-basics"} component={FlexboxBasics} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default Layout
