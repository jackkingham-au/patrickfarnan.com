import React from 'react';
import CalltoActionLink from './CalltoActionLink';
import { Container, Grid } from '@mui/material';

const CalltoActionPayGrid = ({block}) => {
    let gridMd;

    // Determine What Items Are Divisable By
    if(block.list.length % 3 === 0) {
        gridMd = 4;
    } else {
        gridMd = 6;
    }

    // Generate List Items
    const items = block.list.map(block => {
        return (
            <Grid item xs={12} md={gridMd}>
                <CalltoActionLink block={block} />
            </Grid>
        );
    });

    return (
        <Container>
            <Grid container spacing={2}>
                {
                    items.map(item => item)
                }
            </Grid>
        </Container>
    );
}

export default CalltoActionPayGrid;
