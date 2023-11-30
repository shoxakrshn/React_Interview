import './App.css';
import { Block } from './block';
import { UserProvider } from './context/UserProvider';

const App: React.FC = () => {
  return (
    <UserProvider>
      <Block />
    </UserProvider>
  );
};

export default App;
