//functional component 
// work with objects
// if i dont want use a atribute i use ?
//see in the interface especialely in age

interface Person {
    age?: number,
    firstName: string,
    lastName: string,
    address: {
        country: string,
        houseNo: number
    }
}

//un objeto literal es una forma de escribir y definir objetos en JavaScript 
//utilizando una notación sencilla y directa

export default function ObjectLiterals() {
    //tipos de datos
    const name: string  = 'Vinny ';
    const age: number = 27;
    const isActive: boolean = false;

    const people = ['Ana', 'Carlos', 'Paul']

    //funciones

    const addTwoNumbers = (a:number, b:number): number => {
        return a + b;
    }    

    //objeto literal
    const person: Person = {
        //age: 27,
        firstName: 'Vinny',
        lastName: 'Buitron',
        address: {
            country: 'Ecuador',
            houseNo: 1234
        }
    }
  
    return (
        //print objects we use JSON
        <>  
            <h3>Tipos Basicso</h3>
            {name} - {age} - {isActive ? 'Activo' : 'No Activo'} - {people.join(', ')}
            <h3>Objetos</h3>
            {JSON.stringify(person, null, 2)}
            <h3>Funciones</h3>
         <span> El resultado de la suma es {addTwoNumbers(1, 6)}</span>
        </>
    )
}