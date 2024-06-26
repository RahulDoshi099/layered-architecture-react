import React, { useState } from 'react';
import { User } from '../domain/entities/User';
import { useAddUser } from '../domain/usecases';

interface UserFormProps {
  user?: User | null;
  onSave: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ user, onSave }) => {
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const { addUser } = useAddUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await addUser({ name, email });
    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <button type="submit">{user ? 'Update' : 'Add'} User</button>
    </form>
  );
};

export default UserForm;
