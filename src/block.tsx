import { useUserContext } from './context/UserContext';

export const Block: React.FC = () => {
  const user = useUserContext();

  return (
    <>
      <h1>{`Context Name ${user.userName}`}</h1>
      <button
        onClick={() => {
          user.setUserName(user.userName + '1');
        }}
      >
        Clock
      </button>
    </>
  );
};
