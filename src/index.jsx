import React from 'react';

import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);

const App = () => {
  return <div>Hello App</div>;
};

export default App;

root.render(<App />);
