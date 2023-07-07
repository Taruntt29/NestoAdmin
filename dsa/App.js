import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouteData } from './utils/Routes';
import HomeDashboardContent from './dashboard/home-dashnoard-content/HomeDashboardContent';
import CopyrightText from './dashboard/footer/CopyrightText';
import Chat from './dashboard/chat/Chat';
import '../index.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {RouteData.map(({ id, path, element, page, routes }) => {
          if (page === 'login') {
            return <Route key={id} path={path} element={element} />;
          } else if (page === 'dashboard' && routes) {
            return (
              <Route
                key={id}
                path={path}
                element={
                  <>
                    {element} <CopyrightText /> <Chat />
                  </>
                }
              >
                <Route index element={<HomeDashboardContent />} />
                {routes.map(({ id, path, element }) => (
                  <Route key={id} path={path} element={element} />
                ))}
              </Route>
            );
          } else {
            return <Route key={id} path={path} element={element} />;
          }
        })}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
