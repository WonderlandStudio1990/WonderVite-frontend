'use client'

import { PlasmicRootProvider } from "@plasmicapp/loader-react"
import { PLASMIC } from "@/plasmic-init"
import { ReactNode } from "react"

export function PlasmicWrapper({ children }: { children: ReactNode }) {
  return (
    <PlasmicRootProvider loader={PLASMIC}>
      {children}
    </PlasmicRootProvider>
  );
}
