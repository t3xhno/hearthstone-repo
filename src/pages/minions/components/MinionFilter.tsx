import { FC } from "react";

import "./MinionFilter.scss";
import { MinionType } from "../../../types/minions";

interface IProps {
  setTier: (minionTier: number) => void;
  setActive: (isActive: boolean) => void;
  setType: (minionType: MinionType) => void;
}

const MinionFilter: FC<IProps> = ({ setTier, setType, setActive }) => {
  return (
    <div className="minion-filters-wrapper">
      <div className="minion-filter filter-active">
        <select
          id="isActive"
          name="isActive"
          value="true"
          onChange={(e) => setActive(e.target.value === "true")}
        >
          <option value="true">Active</option>
          <option value="false">All</option>
        </select>
      </div>

      <div className="minion-filter filter-type">
        <select
          id="minionType"
          name="minionType"
          onChange={(e) =>
            setType(MinionType[e.target.value as keyof typeof MinionType])
          }
        >
          <option value={undefined}>All</option>
          {Object.keys(MinionType).map((mType) => (
            <option key={mType} value={mType}>
              {mType}
            </option>
          ))}
        </select>
      </div>

      <div className="minion-filter filter-tier">
        <select
          id="minionTier"
          name="minionTier"
          onChange={(e) => setTier(+e.target.value)}
        >
          <option value={undefined}>All</option>
          {[1, 2, 3, 4, 5, 6].map((tier) => (
            <option key={tier} value={tier}>
              {tier}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default MinionFilter;
