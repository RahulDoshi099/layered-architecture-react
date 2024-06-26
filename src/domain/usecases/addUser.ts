import { useAddUserMutation } from '../../api/userApi';
import { useDispatch } from 'react-redux';
import { addUser as addUserAction } from '../../store/userSlice';
import { User } from '../entities/User';

export const useAddUser = () => {
  const [addUserApi] = useAddUserMutation();
  const dispatch = useDispatch();

  const addUser = async (user: Partial<User>) => {
    const response = await addUserApi(user) as any;
    if ('data' in response) {
      dispatch(addUserAction(response.data));
    }
  };

  return { addUser };
};
