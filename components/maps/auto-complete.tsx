"use client";

// components/maps/auto-complete.tsx
import React, { useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Autocomplete } from '@react-google-maps/api';


export const AutoComplete: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Check if window.google is available
        const loadGoogleMaps = () => {
            if (typeof window !== 'undefined' && window.google) {
                const center = { lat: 50.064192, lng: -130.605469 };
                const defaultBounds = {
                    north: center.lat + 0.1,
                    south: center.lat - 0.1,
                    east: center.lng + 0.1,
                    west: center.lng - 0.1,
                };

                const options = {
                    bounds: defaultBounds,
                    componentRestrictions: { country: 'in' },
                    fields: ['address_components', 'geometry', 'icon', 'name'],
                    strictBounds: false,
                };

                const autocomplete = new google.maps.places.Autocomplete(inputRef.current!, options);

                autocomplete.addListener('place_changed', () => {
                    const place = autocomplete.getPlace();
                    if (place.geometry) {
                        console.log('Selected place: ', place);
                    }
                });
            }
        };

        loadGoogleMaps();
    }, []);

    return (
        <div>
            <Input
                id="pac-input"
                type="text"
                ref={inputRef}
                placeholder="Enter a location"
                style={{ width: '100%', padding: '10px' }}
            />
        </div>
    );
};


