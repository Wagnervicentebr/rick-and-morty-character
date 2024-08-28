import { Character } from "./character"

export interface ResposesCharaceter {
    info: Info,
    results: Character[]
}

interface Info {
  count: number,
  pages: number,
  next: string,
  prev: string
}
