import React from 'react';
import { useGetUsers } from '../domain/usecases';

const UserList: React.FC = () => {
  const { users } = useGetUsers();

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
};

export default UserList;
