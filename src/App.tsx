
//import { AuthProvider } from './context/AuthContext'
import ObjectLiterals from './typescript/ObjectLiterals'
import Counter from './hcomponents/Counter'
import UserPage from './hcomponents/UserPage'
//import UserPage from './components/UserPage'


function App() {

  return (
    //fragment <> </>
    <>
      {/*<AuthProvider>*/}
        <div className='flex flex-col justify-center items-center h-svh'>
          
          {/*coment very importante the estructure*/}
          {/*<ObjectLiterals />*/}
          {/*<BasicFunctions/>*/}
          {/*<Counter />*/}
          {/*<LoginPage/>*/}
          <UserPage/>
        </div>
      {/*</AuthProvider>*/}
    </>
  )
}

export default App
