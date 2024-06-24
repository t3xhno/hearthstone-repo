/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

import { type AxiosError } from "axios";
import { api } from "../services/apiData";
import { MinionType, type IMinion } from "../types/minions";

export const useMinions = () => {
  const [error, setError] = useState<AxiosError>();
  const [isLoading, setIsLoading] = useState(false);
  const [allMinions, setAllMinions] = useState<IMinion[]>();
  const [showOnlyActive, setShowOnlyActive] = useState(true);
  const [activeMinions, setActiveMinions] = useState<IMinion[]>();
  const [filteredMinions, setFilteredMinions] = useState<IMinion[]>();

  const [minionTier, setMinionTier] = useState<number>();
  const [minionType, setMinionType] = useState<MinionType>();

  const fetchMinions = async () => {
    setIsLoading(true);
    try {
      const allMinions = await api.getAllMinions();
      const activeMinions = await api.getActiveMinions();

      setAllMinions(allMinions);
      setActiveMinions(activeMinions);
      setFilteredMinions(
        showOnlyActive
          ? activeMinions
              .filter((minion) => !minion.isToken)
              .sort((a, b) => (b.tier < a.tier ? 1 : 0))
          : allMinions
              .filter((minion) => !minion.isToken)
              .sort((a, b) => (b.tier < a.tier ? 1 : 0))
      );

      setError(undefined);
    } catch (error) {
      setError(error as AxiosError);
    } finally {
      setIsLoading(false);
    }
  };

  //   Filtering effect
  useEffect(() => {
    if (!activeMinions || !allMinions) return;
    setIsLoading(true);
    const minionPool = showOnlyActive ? [...activeMinions] : [...allMinions];
    let filteredPool = !minionType
      ? minionPool
      : minionPool.filter((minion) => minion.types.includes(minionType));
    filteredPool = !minionTier
      ? filteredPool
      : filteredPool.filter((minion) => minion.tier === minionTier);
    setFilteredMinions(
      filteredPool
        .filter((minion) => !minion.isToken)
        .sort((a, b) => (b.tier < a.tier ? 1 : 0))
    );
    setIsLoading(false);
  }, [minionTier, minionType, showOnlyActive]);

  return {
    error,
    isLoading,
    fetchMinions,
    setMinionTier,
    setMinionType,
    filteredMinions,
    setShowOnlyActive,
  };
};
