import React from 'react'
import { Statistic } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function DisplayBalance(props) {
    return (
        <Statistic size={props.size} color={props.color}>
            <Statistic.Label style={{ textAlign: "left" }}>{props.label}</Statistic.Label>
            <Statistic.Value>{props.value}</Statistic.Value>
        </Statistic>
    )
}


// setting default value for props
// default props
DisplayBalance.defaultProps = {
    color: 'black',
    size: 'tiny'
}


// setting props type
//prop type should be assigned to all values
//if we miss one value then it will show error
DisplayBalance.propTypes = {
    color: PropTypes.string,
    size: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string
}


export default DisplayBalance
