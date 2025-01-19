'use client';

import React from 'react';

export interface ChartConfig {
  width?: number;
  height?: number;
  margin?: { top: number; right: number; bottom: number; left: number };
}

export function useChart() {
  const config = React.useMemo<ChartConfig>(() => ({
    width: undefined, // Let it be responsive
    height: undefined, // Let it be responsive
    margin: { top: 5, right: 30, left: 20, bottom: 5 }
  }), []);

  return { config };
}

interface ChartPayload {
  payload: Record<string, unknown>;
}

export function getPayloadConfigFromPayload(payload: ChartPayload[]) {
  if (!payload || !payload.length) return null;
  return payload[0].payload;
}
