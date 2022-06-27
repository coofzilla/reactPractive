//React Teaching suspended until 경은 finishes basics Jul 1, 2022

//Why did I remove the import for React???
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
