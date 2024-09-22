import { createContext } from 'react';

const UserContext = createContext({
    user: null,
    changeUser: () => {}
});

export default UserContext;
