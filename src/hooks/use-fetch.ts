import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useFetch = ({
  endpoint,
  id,
}: {
  endpoint: string;
  id: string | null;
}) => {
  return useQuery({
    queryKey: [endpoint, id],
    queryFn: async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_API_URL}/${endpoint}/${id}`,
      );
      return data;
    },
  });
};
