/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from "react";

import "./MinionsList.scss";
import MinionCard from "./components/MinionCard";
import { useMinions } from "../../hooks/useMinions";
import MinionFilter from "./components/MinionFilter";

const Minions: FC = () => {
  const {
    error,
    isLoading,
    fetchMinions,
    setMinionTier,
    setMinionType,
    filteredMinions,
    setShowOnlyActive,
  } = useMinions();

  useEffect(() => {
    fetchMinions();
  }, []);

  return (
    <div className="content-wrapper">
      <MinionFilter
        setTier={setMinionTier}
        setType={setMinionType}
        setActive={setShowOnlyActive}
      />
      {error && <div className="error">{error.message}</div>}
      {!isLoading && filteredMinions ? (
        <div className="minions-list">
          {filteredMinions.map((minion) => (
            <MinionCard key={minion.id} minion={minion} />
          ))}
        </div>
      ) : (
        <div className="loading">Loading...</div>
      )}
    </div>
  );
};

export default Minions;
