import React from 'react';
const Context = React.createContext();

const {
    Provider: SWProvider,
    Consumer: SWConsumer,
} = Context;

export {
    SWProvider,
    SWConsumer,
    Context
}