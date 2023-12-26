// let tela = document.getElementById("telat");

numeroAntigo = 0
nomeAcorde = {
  "exibicao": [
    {
        "nome": "ERRO",
        "img": "ERRO",
    },
    {
      "nome": 'Lá Maior',
      "img": "./imagens/A - acorde.jpg",
    },
    {
      "nome": 'Lá Maior com sétima',
      "img": "./imagens/A7 - acorde.jpg",
    },
    {
      "nome": 'Lá menor',
      "img": "./imagens/Am - acorde.jpg",
    },
    {
      "nome": 'Dó Maior',
      "img": "./imagens/C - acorde.jpg",
    },
    {
      "nome": 'Dó Maior com sétima',
      "img": "./imagens/C7 - acorde.jpg",
    },
    {
      "nome": 'Ré Maior',
      "img": "./imagens/D - acorde.jpg",
    },
    {
      "nome": 'Ré Maior com sétima',
      "img": "./imagens/D7 - acorde.jpg",
    },
    {
      "nome": 'Ré menor',
      "img": "./imagens/Dm - acorde.jpg",
    },
    {
      "nome": 'Mi Maior',
      "img": "./imagens/E - acorde.jpg",
    },
    {
      "nome": 'Mi Maior com sétima',
      "img": "./imagens/E7 - acorde.jpg",
    },
    {
      "nome": 'Mi menor',
      "img": "./imagens/Em - acorde.jpg",
    },
    {
      "nome": 'Sol Maior',
      "img": "./imagens/G - acorde.jpg",
    }
  ]
}


function exibir(){
  numero = Math.floor(Math.random() * 12 +1)
  if (numeroAntigo == numero) {
    exibir();
  }
  acordes.innerHTML = `
    <p>${nomeAcorde.exibicao[numero].nome}</p>
    <div class="acordes">
      <img src="${nomeAcorde.exibicao[numero].img}">
    </div>
      `;

  tela = acordes;
  numeroAntigo = numero;
  
      speed = document.getElementById("speed").value;
      console.log(speed)
}


function iniciar(stop) {
  console.log("Começou")
  
  if (stop == 1) {
    parar();
  }else
  if(stop == 0){
    speed = document.getElementById("speed").value;
    velocidade = Number(speed) * 1000;
    timer = setInterval(function(){
      exibir();
    }, velocidade);
  }
  
}

function parar() {
  clearInterval(timer)
  console.log("Parou")
}

function velocidade(){
    speed = document.getElementById("speed").value;
    velocidade = Number(speed) * 1000;
    console.log(speed)
    return velocidade;
}