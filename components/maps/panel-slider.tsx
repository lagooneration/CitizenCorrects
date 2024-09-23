"use client";

import React from 'react';
import { Slider } from '@/components/ui/slider';

// Assuming SolarPanelConfig is defined elsewhere in your codebase.
import { SolarPanelConfig } from '@/lib/solar';

interface SolarPanelSliderProps {
    configId: number;
    solarPanelConfigs: SolarPanelConfig[];
    setConfigId: (id: number) => void;
}

const SolarPanelSlider: React.FC<SolarPanelSliderProps> = ({  solarPanelConfigs, setConfigId }) => {
    const handleChange = (event: Event, value: number | number[]) => {
        if (typeof value === 'number') {
            setConfigId(value);
        }
    };

    return (
        <Slider
            
            onChange={handleChange as any} // We cast here because MUI's Slider expects a different event signature.
            aria-labelledby="solar-panel-slider"
            min={0}
            max={solarPanelConfigs.length - 1}
        />
    );
};

export default SolarPanelSlider;
