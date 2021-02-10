import React from 'react';

const Descr = p => {
    return <span>{p.label}: {p.value === 'films' ? p.item[p.value].join(', ') : p.item[p.value]}</span>
};

export default Descr