import { useState } from 'react'
import './App.css'

function App() {

  const[email, setEmail] = useState("") /*estado: email, e usamos o setEmail para atualizar o estado, useState declara o estado.*/
  const[senha, setSenha] = useState("")

  function handleEmail(evento){       /*conectado ao onchange */
    setEmail(evento.target.value)
  }
                                                  /*console.log: mostrar uma informação no inspecionar e console */
  function handleSenha(evento){       
    setSenha(evento.target.value)
  }

  function handleSubmit(){
    alert(`
    Email: ${email}
    Senha: ${senha}
    `)
  }


  return (
    <>
      <header>
        <h1>Login</h1>
      </header>

      <main>

        

      <form action="" onSubmit={handleSubmit}>   

      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id='email' placeholder='Digite seu email' onChange={handleEmail}/>
      </div>

      <div>
        <label htmlFor="senha">Senha:</label>
         <input type="password" id='senha' placeholder='Digite sua senha'onChange={handleSenha} />
      </div>

      <button>Enviar</button>

      </form>

      </main>

    </>
  )
}

export default App