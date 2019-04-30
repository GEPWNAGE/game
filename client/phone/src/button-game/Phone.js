import React from 'react';
import { connect } from 'react-redux';

import { increment } from './redux/actions';

function Phone({ increment }) {
    return (
        <div>
            <h1>Push The Button</h1>
            <button onClick={increment}>The Button</button>
        </div>
    );
}

const mapDispatchToProps = {
    increment,
};

export default connect(null, mapDispatchToProps)(Phone);
