import React, { useState } from 'react';
import UserForm from '../components/UserForm';
import UserList from '../components/UserList';

const UsersPage: React.FC = () => {
  const [editingUser, setEditingUser] = useState(null);

  const handleSave = () => {
    setEditingUser(null);
  };

  return (
    <div>
      <UserForm user={editingUser} onSave={handleSave} />
      <UserList />
    </div>
  );
};

export default UsersPage;
