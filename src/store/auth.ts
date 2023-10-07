import axios, { AxiosResponse } from 'axios';
import router from '@liberu-ui/ui/src/core/services/router';

/**
 * Represents the state of the application.
 */
export interface AppState {
  isAuth: boolean;
  intendedRoute: string | null;
  intendedPath: string | null;
}

/**
 * Represents the data mutation functions for the application state.
 */
export const mutations = {
  /**
   * Mutates the state to mark the user as authenticated.
   * @param state - The current state.
   */
  login(state: AppState): void {
    state.isAuth = true;
    localStorage.setItem('isAuth', 'true');
  },
  
  /**
   * Mutates the state to mark the user as unauthenticated.
   * @param state - The current state.
   */
  logout(state: AppState): void {
    state.isAuth = false;
    localStorage.setItem('isAuth', 'false');
    localStorage.removeItem('authorization');
  },
  
  /**
   * Sets the intended route for redirection after authentication.
   * @param state - The current state.
   * @param route - The intended route.
   */
  setIntendedRoute(state: AppState, route: string): void {
    state.intendedRoute = route;
  },

  /**
   * Sets the intended path for redirection after authentication.
   * @param state - The current state.
   * @param path - The intended path.
   */
  setIntendedPath(state: AppState, path: string): void {
    state.intendedPath = path;
  },
};

/**
 * Represents the action functions for the application state.
 */
export const actions = {
  /**
   * Logs out the user.
   * @param commit - The commit function from the Vuex store.
   */
  logout({ commit }: { commit: Function }): void {
    axios.post('/api/logout')
      .then(() => {
        commit('appState', false, { root: true });
        commit('logout');
        router.push({ name: 'login' });
      });
  },
};