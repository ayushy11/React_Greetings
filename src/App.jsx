// Mini-Project #1

import React from 'react';
function App() {
    let cdate = new Date();
    let cmin = new Date();
    let greeting = '';

    cdate = cdate.getHours();
    cmin = cmin.getMinutes();

    const cssStyle = {
        color: 'green'
    };

    // object.attribute='value';

    if (cdate >= 1 && cdate < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'green';
    }
    else if (cdate >= 12 && cdate < 19) {
        greeting = 'Good Afternoon';
        cssStyle.color = 'orange';
    }
    else {
        greeting = 'Good Night';
        cssStyle.color = 'purple';
    }
    return (<>
        <div>
            <h1> Hello there, <span style={cssStyle}> {greeting} </span></h1>
            <h1> {cdate}:{cmin} </h1>
        </div>
    </>);
};

export default App;
