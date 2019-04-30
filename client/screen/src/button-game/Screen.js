import React from 'react';
import { connect } from 'react-redux';

function Screen({ count }) {
    return (
        <div>
            The Button has been pushed {count} times.
        </div>
    );
}

function mapStateToProps(state) {
    return {
        count: state.count,
    };
}

export default connect(mapStateToProps)(Screen);
