import React from 'react';
import { SWConsumer } from '../../context';

const withContext = Wrapper => p => {
    return <SWConsumer>
        {props => <Wrapper {...{...props, ...p}}>{p.children}</Wrapper>}
    </SWConsumer>
};

export default withContext