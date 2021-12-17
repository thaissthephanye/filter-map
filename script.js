const mensagens = [
  { id: 1, nome: 'Parabéns pelo seu aniversário!', categoria: 'aniv' },
  { id: 2, nome: 'Muitas felicidades pelo seu aniversário.', categoria: 'aniv' },
  { id: 3, nome: 'Felicidades e muitos anos de vida.', categoria: 'aniv' },
  { id: 4, nome: 'Seja bem-vindo', categoria: 'bvind' },
  { id: 5, nome: 'Feliz Natal e próspero ano novo.', categoria: 'anonov' }
]
const felicit = mensagens.filter(mensagens => mensagens.categoria === 'aniv');
console.log('Mensagens de felicitação pelo aniversário')
console.log(felicit.map(felicit => felicit.nome))

function exibirMensagem()
        {
            var resultado = new Date();
            alert(felicit.map(felicit => felicit.nome));
        }
 
        
        var btn = document.getElementById("btn");
 
        btn.addEventListener("click", exibirMensagem);
