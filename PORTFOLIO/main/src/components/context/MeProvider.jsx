import React, { useState } from "react";
import { MeContext } from "./MeContext";

function MeProvider({ children }) {
  const [me, setMe] = useState(null);

  return (
    <MeContext.Provider value={{ me, setMe }}>{children}</MeContext.Provider>
  );
}

export default MeProvider;
