import { create } from "zustand";
import axios from "axios";

const useGithubStore = create((set) => ({
  user: null,
  repos: null,
  colors: null,
  loading: false,
  error: null,
  fetchUser: async (username) => {
    set({ loading: true, error: null, user: null, repos: null });
    try {
      const userResponse = await axios.get(
        `https://api.github.com/users/${username}`
      );
      const reposResponse = await axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      set({
        user: userResponse.data,
        repos: reposResponse.data,
        loading: false,
      });
    } catch (error) {
      set({
        error: error.response
          ? error.response.data.message
          : "Error fetching data",
        loading: false,
        user: null,
        repos: null,
      });
    }
  },
  clearUserData: () => {
    set({ user: null, repos: null, loading: false, error: null });
  },
  fetchLanguageColor: async () => {
    try {
      const colorsResponse = await axios.get(
        "https://raw.githubusercontent.com/ozh/github-colors/master/colors.json"
      );
      set({ colors: colorsResponse.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useGithubStore;
