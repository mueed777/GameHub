import { useQuery } from "@tanstack/react-query";
import { FetchResponse } from "../services/api-client";
import apiClient from "../services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () =>
  useQuery<FetchResponse<Genres>, Error>({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchResponse<Genres>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
export default useGenres;
