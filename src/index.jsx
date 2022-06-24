import React from 'react';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
//make an "App" Component, render that instead of Hello world
root.render(<p>Hello world!</p>);
