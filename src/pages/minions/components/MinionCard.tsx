/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from "react";

import "./MinionCard.scss";
import { type IMinion } from "../../../types/minions";

interface IProps {
  minion: IMinion;
}

const MinionCard: FC<IProps> = ({ minion }) => {
  return (
    <div className="minion" key={minion.id}>
      <div className="minion-name">{minion.name}</div>
      <img src={minion.pictureSmall} alt="Minion" />
    </div>
  );
};

export default MinionCard;
