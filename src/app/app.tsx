import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from '@/src/app/appRoutes.tsx';
import '@/src/app/app.scss';

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
