"use client";

// https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=37.2746464&location.longitude=-121.7530949&key=YOUR_API_KEY


import { useEffect } from 'react';

interface BuildingInsights {
  // Define the structure of your BuildingInsights data here
  // For example:
  // solarPotential: number;
  // roofSegmentStats: Array<{ ... }>;
  [key: string]: any;
}

async function findClosestBuildingInsights(latitude: number, longitude: number, apiKey: string): Promise<BuildingInsights | undefined> {
  const url = `https://solar.googleapis.com/v1/buildingInsights:findClosest?location.latitude=${latitude}&location.longitude=${longitude}&requiredQuality=HIGH&key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BuildingInsights = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return undefined;
  }
}

function changeMaxValue(element: HTMLInputElement, newMax: number): void {
  if (element && element.valueAsNumber > newMax) {
    element.value = newMax.toString();
    const displayElement = document.getElementById('element_modules_range_display');
    if (displayElement) {
      displayElement.innerHTML = newMax.toString();
    }
  }
  element.max = newMax.toString();
  console.log("Max value changed to", newMax);
}

function updateRange(rangeElement: HTMLInputElement, displayElement: HTMLElement): void {
  displayElement.innerHTML = rangeElement.value;
}

function calculateOutput(rangeElement: HTMLInputElement, wattsElement: HTMLInputElement, displayElement: HTMLElement): void {
  const totalWatts = Number(rangeElement.value) * Number(wattsElement.value);
  const totalKilowatts = (totalWatts / 1000).toFixed(2);
  displayElement.innerHTML = `${totalKilowatts} kW`;
}

function initializeEventListeners(): void {
  const modulesRange = document.getElementById('element_modules_range') as HTMLInputElement;
  const modulesRangeDisplay = document.getElementById('element_modules_range_display');
  const modulesRangeWatts = document.getElementById('element_modules_range_watts') as HTMLInputElement;
  const modulesCalculatorDisplay = document.getElementById('element_modules_calculator_display');

  if (modulesRange && modulesRangeDisplay && modulesRangeWatts && modulesCalculatorDisplay) {
    changeMaxValue(modulesRange, 100);
    updateRange(modulesRange, modulesRangeDisplay);

    modulesRange.addEventListener('input', () => {
      updateRange(modulesRange, modulesRangeDisplay);
    });

    modulesRange.addEventListener('change', () => {
      calculateOutput(modulesRange, modulesRangeWatts, modulesCalculatorDisplay);
    });
  } else {
    console.error('One or more required elements not found');
  }
}

export default function SolarApi() {
  useEffect(() => {
    initializeEventListeners();
  }, []);
}