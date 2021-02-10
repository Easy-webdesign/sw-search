import React from 'react';
import { ErrorIndicator } from '../error-indicator';

const ErrorBoundary = p => {
    if(p.error) return <ErrorIndicator/>
    return p.children;
};

export default ErrorBoundary;