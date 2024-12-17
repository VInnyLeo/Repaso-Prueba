import {Datos} from "../interfaces/datos"

interface nombre{
    datos: Datos;
}

export default function UserData({datos}: nombre){
    return(
        <tr>
                        <td>
                        <span>{datos.count}</span>
                        </td>
                        <td>
                            <span>{datos.name} {'-'}</span>
                        </td>
                        <td>
                        <span>{datos.age}</span>
                        </td>
                    </tr>

    )
}