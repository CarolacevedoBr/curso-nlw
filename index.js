
//array
  let participantes = [
  {
    nome: "Carolina Linares",
    email: "carolinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Charlote Linares",
    email: "charlolinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Mehl Linares",
    email: "mehllinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Gatolina Linares",
    email: "gatolinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },{
    nome: "Belly Linares",
    email: "bellylinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },
  {
    nome: "Anna Linares",
    email: "annalinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },{
    nome: "Raton Linares",
    email: "ratonlinaresbr@betmail.com",
    dataInscricao: new Date (2024, 1, 4, 22, 19, 00),
    dataCheckIn : new Date(2024, 2, 25, 22, 00)
  },
]


  const criarNovoParticipante = (participante) => {

    const dataInscricao = dayjs(Date.now()).to(participante.dataInscricao)

    let dataCheckIn = dayjs(Date.now()).to(participante.dataCheckIn)

    if(participante.dataCheckIn == null) {
      dataCheckIn = `
      <button
        data-email="${participante.email}"
        onclick="fazerCheckIn(event)"
        >
        Confirmar check-in
      </button>
      
      `
    } 

    return `
      <tr> 
        <td>
          <strong>
            ${participante.nome}
          </strong>
          <br>
          <small>
            ${participante.email}
          </small>
        </td>
        <td>${dataInscricao}</td>
        <td>${dataCheckIn}</td>
      </tr>
    `
    }


const atualizarLista = (participante) => {
  let output = ""
  for(let participante of participantes) {
    output = output + criarNovoParticipante(participante)
  }
    document
    .querySelector('tbody')
    .innerHTML = output
}


atualizarLista(participantes)



const adicionarParticipante = (event) => {     
  event.preventDefault()

  const dadosDoFormulario = new FormData(event.target)

  const participante = {                                        
    nome: dadosDoFormulario.get('nome'),
    email: dadosDoFormulario.get('email'),
    dataInscricao: new Date(),
    dataCheckIn: null
  }
  
  // verificar se o paricipante ja existe 
  const participanteExiste = participantes.find((p) =>
     p.email == participante.email
  )
   
   if(participanteExiste){
    alert('Email jà cadastrado!')
    return
   }

  participantes = [participante, ...participantes]
  atualizarLista(participantes)

  // limpar o formulario
  event.target.querySelector('[name="nome"]').value = ""
  event.target.querySelector('[name="email"]').value = ""
 } 

const fazerCheckIn = (event) =>  {                               
  //confirmar se realmente quer o check-in
const mensagemConfirmacao = 'tem certeza que deseja fazer o chech-in'

  // const resultado = confirm(mensagemConfirmacao)
  
  if(confirm(mensagemConfirmacao) == false){
    return
  }
  
  // encontar o particpante dentro da lista 
  const participante = participantes.find((p) => 
     p.email = event.target.dataset.email
   )
 
  // atualizar o check-in do participante
  participante.dataCheckIn = new Date()
  
  // atualizar a lista de participantes
  atualizarLista(participantes)
   
}

