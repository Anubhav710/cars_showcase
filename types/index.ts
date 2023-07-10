import { MouseEventHandler } from "react"

export interface CustomButtonProps {
  title: string
  containerStyles?: string
  handleClick?: MouseEventHandler<HTMLButtonElement>
  btnType?: "button" | "submit"
  textStyle?: string
  rightIcon?: string
}

export interface SearchManufacturerProps {
  manufacturer: string
  setManufacturer: (manufacturer: string) => void
}

export interface OptionProp {
  title: string
  value: string
}

export interface CustomFilterProps {
  title: string
  options: OptionProp[]
}

export interface CarProps {
  city_mpg: number
  combination_mpg: number
  cylinders: number
  displacement: number
  drive: string
  fuel_type: string
  highway_mpg: number
  make: string
  model: string
  transmission: string
  year: number
}

export interface FilterProps {
  manufaturer: string
  year: number
  fuel: string
  limit: number
  model: string
}

export interface HomeProps {
  searchParams: FilterProps
}

export interface ShowMoreProps {
  pageNumber: number
  isNext: boolean
}
