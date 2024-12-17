import { useEffect, useState } from "react";
import { Datos } from "../interfaces/datos";
import { loadUserAction } from "../actions/load-user";

export default function useUser(){
    //llamamos a la interface que creamos  <User[]>
    const [users, setusers] = useState<Datos>(); //Datos[]>([]);   este ejemplo si fuera un arreglo muy importante en el interface
    //cuando no hay nada en los corchetes significa
    //cuando se ejecuta toda la carga se ejecuta el efecto
    useEffect(()=>{
        loadUserAction().then(users => setusers(users))
    }, [])

    return{users}
}