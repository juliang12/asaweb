import { perros } from "../data/data"

export const getDogData = ({ id }: {id: string | undefined}) => {
    console.log(typeof id)
    const dog = perros.find(d => d.id === Number(id))
    return dog
}