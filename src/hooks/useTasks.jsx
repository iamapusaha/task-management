import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useTasks = () => {
  const { user } = useContext(AuthContext);

  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["tasks", user?.email],
    queryFn: async () => {
      const res = await axios.get(
        `http://localhost:3000/tasks?email=${user?.email}`
      );
      const data = await res.data;
      return data;
    },
  });
  return [tasks, refetch];
};

export default useTasks;
