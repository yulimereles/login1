
import { AppRouter } from './routers/AppRouter';
import { AuthProvider } from './context/AuthProvider';
import { SocketProvider } from './context/SocketProvider';
import { ChatProvider } from './context/ChatProvider';
import { MainRoutes } from './routers/MainRoutes';

const App = () => {
  

  return (
    <ChatProvider>
      <AuthProvider>
        <SocketProvider>
          <AppRouter />
        <MainRoutes/>
        </SocketProvider>
      </AuthProvider>
    </ChatProvider>
  );
};

export default App;
