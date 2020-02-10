import React, { Component } from 'react';

import { DefaultProperties, DefaultPropertiesFlexWrap} from './defaultProperties';
import SinglePropertyExample from './singlePropertyExample';

class BasicWorkingWithFlexbox extends Component{
    render(){
        return(
            <div>
                <div className="comment">
                    <p>The initial values for the flex container are:  
                        <span>flex-direction: row</span> 
                        <span>flex-wrap: no-wrap</span> 
                        <span>align-items: stretch</span> 
                        <span>justify-content: flex-start</span>
                    </p>
                    <p>The initial values for our flex items are: 
                        <span>flex-grow: 0</span>
                        <span>flex-shrink: 1</span>
                        <span>flex-basis: auto</span> 
                    </p>
                </div>

                <div className="default-flexbox seperator">
                    <DefaultProperties />
                </div>

                <div className="comment">
                    <p><span>flex-direction: row</span> : makes all immidiate childrens to float in one row, 
                        <span>flex-wrap: no-wrap</span> : because of this content will not wrap to next row, 
                        <span>align-items: stretch</span> : this gives equal height to all the cards regard less of their content, 
                        <span>justify-content: flex-start</span>: this makes the content to always align from left margine.
                    </p>
                </div>

                <h2 className="sub-heading">align-item Property values</h2>

                <h3 className="section-heading">align-items: flex-start</h3>
                <div className="examples example-1 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">align-items: flex-end</h3>
                <div className="examples example-2 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">align-items: baseline</h3>
                <div className="examples example-3 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">align-items: center</h3>
                <div className="examples example-4 seperator-1">
                    <SinglePropertyExample />
                </div>


                <h2 className="sub-heading">justify-content Property values</h2>

                <h3 className="section-heading">justify-content: flex-start</h3>
                <div className="examples example-2-1 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">justify-content: flex-end</h3>
                <div className="examples example-2-2 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">justify-content: center</h3>
                <div className="examples example-2-3 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">justify-content: space-around</h3>
                <div className="examples example-2-4 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">justify-content: space-between</h3>
                <div className="examples example-2-5 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">justify-content: space-evenly</h3>
                <div className="examples example-2-6 seperator-1">
                    <SinglePropertyExample />
                </div>
                

                <h2 className="sub-heading">Changing flex-direction from default property row to column</h2>

                <h3 className="section-heading">flex-direction: column and align-items: stretch</h3>
                <div className="examples-1 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and align-items: flex-start</h3>
                <div className="examples-1 example-3-1 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and align-items: flex-end</h3>
                <div className="examples-1 example-3-2 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and justify-content: flex-start</h3>
                <div className="examples-1 example-3-3 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and justify-content: flex-end</h3>
                <div className="examples-1 example-3-4 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and justify-content: space-around</h3>
                <div className="examples-1 example-3-5 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and justify-content: space-between</h3>
                <div className="examples-1 example-3-6 seperator-1">
                    <SinglePropertyExample />
                </div>

                <h3 className="section-heading">flex-direction: column and justify-content: space-evenly</h3>
                <div className="examples-1 example-3-7 seperator-1">
                    <SinglePropertyExample />
                </div>

                <div className="comment">
                    <p><span>flex-grow</span> 
                        <span>flex-shrink</span>
                        <span>flex-basis</span> These three properties are more usually described by the shorthand <span>flex</span> property. If we add <span>flex: 1 1 300px</span> to an item, we are stating that <span>flex-grow should be 1</span> so that items can grow, <span>flex-shrink should be 1</span> so that items can shrink, and the <span>flex-basis should be 300</span> pixels. Applying this to our cards layout gives us the example below.
                    </p>
                </div>

                <h3 className="section-heading">flex: 1 1 300px</h3>
                <div className="default-flexbox seperator flex-item-props-1">
                    <DefaultProperties />
                </div>

                <h3 className="section-heading">flex: 3 1 300px</h3>
                <div className="comment">
                    <p>
                        The available space is distributed after the amount needed for flex-basis has been taken into account. This is why our first item is not three times the size of our other items, but instead gets a share of three parts of the remaining space. You will see a bigger change by setting the value for flex-basis to 0
                    </p>
                </div>

                <div className="default-flexbox seperator flex-item-props-2">
                    <DefaultProperties />
                </div>

                <h3 className="section-heading">flex: 3 1 0</h3>
                <div className="comment">
                    <p>
                    For flex-basis to 0, in which case we wouldn’t have a starting value to remove from the overall container. Then, the entire width of the container could be distributed in proportion to our items.
                    </p>
                </div>

                <div className="default-flexbox seperator flex-item-props-3">
                    <DefaultProperties />
                </div>

                <h3 className="section-heading">flex: 3 1 auto</h3>
                <div className="comment">
                    <p>
                    In the next example, I have set the flex-basis on all cards to auto. I then gave the first card a width of 400 pixels. So, the flex-basis of that first card is now 400 pixels, which is used to work out how to distribute space. The other two cards have a flex-basis based on their content’s width.
                    </p>
                </div>

                <div className="default-flexbox seperator flex-item-props-4">
                    <DefaultProperties />
                </div>

                <div className="comment">
                    <p>
                    If we go back to our original flex: 1 1 300px, add more items to our example and set flex-wrap: wrap on the container, the items will wrap in order to maintain as near as possible the flex-basis value. If we have five images and three fit onto one row, then the next two will wrap onto a new row. As the items are allowed to grow, they both grow equally, and so we get two equal-sized items on the bottom row and three in the row above.
                    </p>
                </div>
                <div className="default-flexbox seperator flex-item-flex-wrap">
                    <DefaultPropertiesFlexWrap />
                </div>

            </div>
        )
    }
}

export default BasicWorkingWithFlexbox