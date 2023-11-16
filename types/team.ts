import { StaticImageData } from "next/image"

export interface TeamProps {
    id: number
    image: StaticImageData
    name: string
    bio: string
    href: string
}