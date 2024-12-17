import axios from "axios";
import { Datos } from "../interfaces/datos";

export const loadUserAction = async () => {
    const {data} = await axios.get<Datos>('https://api.agify.io/?name=vinny')

    return data;  //antes data.data el segundo data es un arreglo q estaba en la interfaz por eso ya no es necesario
}