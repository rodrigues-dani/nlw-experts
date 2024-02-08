const perguntas = [
    //criação de uma array perguntas contendo as perguntas e respostas.  
    {
      //criação de um objeto sendo a palavra 'pergunta' uma propriedade e a pergunta em si o valor. 
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      //criação de uma array contendo as possiveis respostas da pergunta. 
      respostas: [
        "variável",
        "let",
        "var",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método é usado para imprimir algo no console em JavaScript?",
      respostas: [
        "console.log()",
        "print()",
        "log()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a sintaxe correta para comentários de uma linha em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 0
    },
    {
      pergunta: "Qual símbolo é usado para representar uma comparação de igualdade em JavaScript?",
      respostas: [
        "=",
        "==",
        "===",
      ],
      correta: 2
    },
    {
      pergunta: "Qual método é usado para converter uma string em um número em JavaScript?",
      respostas: [
        "parseString()",
        "parseInt()",
        "stringToNumber()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual operador é usado para concatenar strings em JavaScript?",
      respostas: [
        "+",
        "&",
        "|",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do operador 'typeof' em JavaScript?",
      respostas: [
        "Retornar o tipo de uma variável",
        "Comparar dois valores",
        "Executar uma função",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a palavra-chave usada para definir uma função em JavaScript?",
      respostas: [
        "function",
        "define",
        "fn",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método é usado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "append()",
        "push()",
        "addToEnd()",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a maneira correta de escrever um comentário de várias linhas em JavaScript?",
      respostas: [
        "// Este é um comentário",
        "<!-- Este é um comentário -->",
        "/* Este é um comentário */",
      ],
      correta: 2
    },
  ];
  
  const quiz = document.querySelector('#quiz')
  //usar o documento para utilizar uma função dele. Essa função é para buscar elemente html e colocar numa variavel para mudar conteudo. 
  //criação de uma constante 'quiz' e atribuindo a ela o valores das tags relacionadas ao 'quiz'.
  const template =  document.querySelector('template')
  //criação de uma constante 'template' e atribuindo a ela o valores das tags relacionadas ao 'template'.
  
  //novo conjunto. Set -> posso tirar ou acrescenta, não posso repetir informação. 
  const corretas = new Set()
  //contagem de perguntas -> variavel não pode ter espaço.
  const totalDePerguntas = perguntas.length
  //pegar dentro do acertos HTML, dentro do span e atribuir ao mostrarTotal
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  //loop ou laço de repetição 
  for(const item of perguntas){
  //criação de laço de repetição para puxar cada pergunta criada na constante perguntas um a um da array
    const quizItem = template.content.cloneNode(true)
    //criação de uma constante 'quizItem' e atribuindo a ela o conteudo das tags relacionadas ao 'template'. selecionando todas as tags da familia
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas){
      //criação de laço de repetição para puxar cada resposta criada na constante perguntas um a um da array
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      //adicionar um clone
      dt.querySelector('span').textContent = resposta
      //selecionar atraves do querySelector, dentro do dt, dentro do Input e atribuido as respostas de cada pergunta um name e um valor. Sendo o name 'Pergunta + o indice indicando qual é a pergunta, e o valor indicando qual o indice de resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-'+ perguntas.indexOf(item))
      //selecionando dentro do input, alterar o valor referente ao input, guarde o valor de cada indice referente as respostas. 
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
      //evento = a interação que está ocorrendo na tela. 
      //verificando o evento ocorrendo no input. 
      dt.querySelector('input').onchange = (event) => {
        //valor do indice referente a resposta selecionada
        //event.target.value
        //verificando se a resposta selecionada é igual a resposta correta -> retorna um booleano (0 ou 1 / true or false)
        const estaCorreta = event.target.value == item.correta
        //deletar das corretas, sempre que encontrar o item. 
        corretas.delete(item)
        //se estiver correta, adicionar o item.
        if(estaCorreta){
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
  
  
      quizItem.querySelector('dl').appendChild(dt)
      //adicionar um filho ao dt
    }
    quizItem.querySelector('dl dt').remove()
    //remover a resposta que esta no HTML como exemplo
    
    quiz.appendChild(quizItem)
    // coloca a pergunta na tela
  
  }
  
  