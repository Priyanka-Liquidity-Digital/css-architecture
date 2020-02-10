import React, { Component } from 'react';

import BasicWorkingWithFlexbox from '../components/BasicWorkingWithFlexbox';

class FlexboxBasics extends Component {
    render(){
        return(
            <div className="flexbox-examples">
                <h1 className="heading">Use of basic Felxbox properties</h1>
                <BasicWorkingWithFlexbox />
            </div>
        )
    }
}

export default FlexboxBasics