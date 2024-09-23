import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { SolarPanelConfig } from './solar';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}




export function showNumber(x: number) {
  return x.toLocaleString(undefined, { maximumFractionDigits: 1 });
}

export function showMoney(amount: number) {
  return `$${amount.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`;
}

export function findSolarConfig(
  solarPanelConfigs: SolarPanelConfig[],
  yearlyKwhEnergyConsumption: number,
  panelCapacityRatio: number,
  dcToAcDerate: number,
) {
  return solarPanelConfigs.findIndex(
    (config) =>
      config.yearlyEnergyDcKwh * panelCapacityRatio * dcToAcDerate >= yearlyKwhEnergyConsumption,
  );
}