"use client";

import { ReactLenis } from "lenis/react";
import { type FC } from "react";

type LenisScrollProviderProps = {
  children: React.ReactNode;
};

const LenisScrollProvider: FC<LenisScrollProviderProps> = ({ children }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 2, smoothWheel: true }}>
      {children}
    </ReactLenis>
  );
};

export default LenisScrollProvider;
