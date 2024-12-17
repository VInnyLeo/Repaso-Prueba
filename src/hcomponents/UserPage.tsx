import useData from "../hooks/useData"
import UserData from "./UserData";

export default function UserPage() {

  const {users} = useData();

  return (
    <>
        <h3>Usuarios</h3>
        <table>
            <thead>
                <td>Numero</td>
                <td>Nombre</td>
                <td>Edad</td>
            </thead>

            <tbody>
                
                <tr> 
                    <td>{users?.count}</td> 
                    <td>{users?.name}</td> 
                    <td>{users?.age}</td> 
                </tr>
                        
                {/* {users.map( user=>(                    
                    <UserData key={user.id} user={user}/>
                ))}*/}
            </tbody>
        </table>
        <button className='p-2 bg-blue-500 rounded-xl mx-2 text-white hover:bg-red-600'>-+</button>
            
      
    </>
  )
}
