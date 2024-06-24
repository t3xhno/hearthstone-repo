import apiClient from "./apiClient";
import { type IMinion } from "../types/minions";

export const api = {
  async getActiveMinions(): Promise<IMinion[]> {
    return (await apiClient.get("/minions_active")).data.data;
  },
  async getAllMinions(): Promise<IMinion[]> {
    return (await apiClient.get("/minions_all")).data.data;
  },

  async getActiveHeroes() {
    return (await apiClient.get("/heroes_active")).data.data;
  },
  async getAllHeroes() {
    return (await apiClient.get("/heroes_all")).data.data;
  },
};
