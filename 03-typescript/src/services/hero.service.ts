import { heroes } from "../data/heroes"

export const findHeroById = (id: Number) =>
    heroes.find((hero) => hero.id === id)