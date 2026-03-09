"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type PropertyType = "All" | "House" | "Apartment" | "Residential" | "Commercial";
export type ListingType = "All" | "For Sale" | "For Rent";

export interface FilterState {
    propertyType: PropertyType;
    listingType: ListingType;
    priceRange: string;
    location: string;
    rooms: string;
    searchQuery: string;
}

interface FilterContextValue {
    filters: FilterState;
    setFilters: (f: Partial<FilterState>) => void;
    resetFilters: () => void;
}

const defaultFilters: FilterState = {
    propertyType: "All",
    listingType: "All",
    priceRange: "",
    location: "",
    rooms: "",
    searchQuery: "",
};

const FilterContext = createContext<FilterContextValue>({
    filters: defaultFilters,
    setFilters: () => { },
    resetFilters: () => { },
});

export function FilterProvider({ children }: { children: ReactNode }) {
    const [filters, setFiltersState] = useState<FilterState>(defaultFilters);

    const setFilters = (partial: Partial<FilterState>) =>
        setFiltersState((prev) => ({ ...prev, ...partial }));

    const resetFilters = () => setFiltersState(defaultFilters);

    return (
        <FilterContext.Provider value={{ filters, setFilters, resetFilters }}>
            {children}
        </FilterContext.Provider>
    );
}

export function useFilters() {
    return useContext(FilterContext);
}
