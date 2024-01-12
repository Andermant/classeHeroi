// Aqui eu estou criando a classe do herói, e seus métodos, estarei implementando atributos aos diferentes tipos de heroi e metodos para identificá-los.

class hero{
  constructor(name, age, type){
    this.name = name
    this.age = age
    this.type = type
  }
  atributes(){
    console.log(this.type[0] + ":")
    console.log("HP: " + this.type[1]) 
    console.log("MP: " + this.type[2])
    console.log("Intelligence: " + this.type[3])
    console.log("strength: " + this.type[4])
  }
  
  atack(){
    switch(this.type[0]){
      case "Guerreiro" :
        console.log("Guerreiro atacou usando a espada!")
        break
      case "Mago" :
        console.log("Mago atacou usando magia!")
        break
      case "Monge" :
        console.log("Monge atacou usando artes marciais!")
        break
      case "Ninja" :
        console.log("Ninja atacou usando suriken!")
        break
      default :
        console.log("O herói não conseguiu atacar")
    }
  }
}


// Aqui estou criando os diferentes tipos de herói, cada um com seus prórios atributos, sendo eles HP, MP, Intelligence e Strength respectivamente.

let Guerreiro = ["Guerreiro", 100,0,30,80]
let Mago = ["Mago", 50,100,80,10]
let Monje = ["Monge", 70,30,30,80]
let Ninja = ["Ninja", 70,10,50,50]

// INPUT
// Uma forma mais fácil de interagir com o código e editar as informações :D

let nome = "Valdemar do Espadão"
let idade = 45
let tipo = Ninja

// Declarando o nosso herói como um objeto!

let character = new hero (nome , idade, tipo)

//OUTPUT
character.atack()