import {SliderItemCharacter} from "@/components/CharacterCard";

export interface Episode {
  id: number,
  name: string
}

export interface Character {
  id: number,
  name: string,
  species: string,
  gender: string,
  image: string,
  status: string,
  type: string,
  location: {
    id: number,
    name: string
  },
  episode?: Episode[]
}

export interface CharsSliderProps {
  initialData: Character[]
}

export interface SliderItemCharacterProps extends Character {
  customMargin?: string
}

export interface CharacterFullInfo {
  id: number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: {
    id: number,
    name: string,
    dimension: string,
    type: string
  },
  location: {
    id: number,
    name: string,
    dimension: string,
    type: string
  },
  image: string,
  episode: {
    id: number,
    name: string,
    episode: string,
    air_date: string,
  }[]
}

export interface LazyLoadedImageProps {
  src: string
  alt: string
  className?: string
}

export interface LocationProps {
  id: number,
  name: string,
  type: string,
  dimension: string,
  residents: {
    id: string,
    name: string,
    status: string,
    species: string,
    type: string
  }[]
}

export interface LocationsSliderProps {
  initialData: LocationProps[]
}

export interface SliderItemLocationProps extends LocationProps {
  customMargin?: string
}