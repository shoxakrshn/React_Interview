import React, { useContext } from 'react';

type contextType = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
};

export const UserContext = React.createContext<contextType | null>(null);

export const useUserContext = () => {
  const user = useContext(UserContext);

  if (user === null) {
    throw new Error('useSearchContext must be used in UserContext');
  }

  return user;
};
