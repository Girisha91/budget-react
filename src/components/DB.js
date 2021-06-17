import React from 'react'
import DisplayBalance from './DisplayBalance';
import { Segment, Grid } from 'semantic-ui-react';

function DB() {
    return (

        <Segment textAlign='center'>
            <Grid columns={2} divided>
                <Grid.Row>
                    <Grid.Column>
                        <DisplayBalance color='green' label='Income:' value='1,045.50' />
                    </Grid.Column>
                    <Grid.Column>
                        <DisplayBalance color='red' label='Expenses:' value='623.50' />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default DB
