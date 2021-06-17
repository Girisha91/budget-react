import React from 'react'
import { Segment, Grid, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';

function EntryLine(props) {
    return (
        <Segment color={props.isExpense ? 'red' : 'green'}>
            <Grid columns={3} textAlign='right'>
                <Grid.Row>
                    <Grid.Column width={10} textAlign='left'>{props.description}</Grid.Column>
                    <Grid.Column width={3} textAlign='right'>{props.value}</Grid.Column>
                    <Grid.Column width={3}>
                        <Icon name='edit' bordered />
                        <Icon name='trash' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

EntryLine.defaultProps = {
    isExpense: false
}

EntryLine.propTypes = {
    isExpense: PropTypes.bool,
    description: PropTypes.string,
    value: PropTypes.string
}
export default EntryLine
