
// estamos utilizando a funcao get dentro da variavel app
// estamos definindo uma rota
// uma funcao de busca app.get()
// 2 parametros
// primeiro parametro URL 
// segundo parametro é um callback EXECUCAO

// criando uma funcao que irá receber o app como parametro
// e utiliza-lo para criar uma rota
// export -> exportar 

var numbers = [1,2,3,4,5,6,7,8,9,10];
export const numbersFilter = (app) => {
   app.get('/filter', (req, res) => {
        // quero retornar apenas os numeros maiores de 4
        // result tem que armazenar apenas os numeros maiores que 4
        const result = numbers.filter(number => number > 4)
        res.json({result})
   })
}

export const getRotaPrincipal = (app) => {
    app.get('/rotaPrincipal', (req, res) => {
        res.send('Hello World!')
      })
}

export const getRotaPrincipal1 = (app) => {
    app.get('/rotaPrincipal1', (req, res) => {
        res
        .status(201)
        .json({message: "Hello World!"})
    })
  }
  
  
  //  (req, res) => 
  // req -> resquest | requisicao
  // res -> response | retorno da nossa rota
     
  
//   app.put('/editando', (req, res) => {
  
//   })


// Em grupo voces deverão criar uma rota que apresente como retorno 
// todos os funcionários que ganham acima de 4k

const employees = [
    {
      id: 1,
      name: "Alice",
      age: 30,
      salary: 5000,
      active: true,
      team: "Engineer",
    },
    {
      id: 2,
      name: "Bob",
      age: 25,
      salary: 3500,
      active: false,
      team: "Marketing",
    },
    {
      id: 3,
      name: "Carlos",
      age: 28,
      salary: 4800,
      active: true,
      team: "Sales",
    },
    {
      id: 4,
      name: "Diana",
      age: 35,
      salary: 5200,
      active: true,
      team: "Human Resources",
    },
    {
      id: 5,
      name: "Edward",
      age: 40,
      salary: 6000,
      active: false,
      team: "Finance",
    },
  ];
