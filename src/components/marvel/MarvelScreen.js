import React from "react";
import { HeroList } from "../hero/HeroList";

export const MarvelScreen = () => {
  return (
    <div>
      <hr />
      <HeroList publisher={"Marvel Comics"} />
    </div>
  );
};
