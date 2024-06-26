import { useFetchUsersQuery } from "../../api/userApi";
import { useDispatch } from "react-redux";
import { setUsers } from "../../store/userSlice";
import { useEffect } from "react";

export const useGetUsers = () => {
  const { data: users = [] } = useFetchUsersQuery();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUsers(users));
  }, [users, dispatch]);

  return { users };
};
