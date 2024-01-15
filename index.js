class Hero {
    constructor(nome, idade, tipo) {
       this.nome = nome;
       this.idade = idade;
       this.tipo = tipo;
    }
   
    atacar() {
       let ataque;
   
       switch (this.tipo) {
         case 'mago':
           ataque = 'usou magia';
           break;
         case 'guerreiro':
           ataque = 'usou espada';
           break;
         case 'monge':
           ataque = 'usou artes marciais';
           break;
         case 'ninja':
           ataque = 'usou shuriken';
           break;
         default:
           console.log('Tipo de herói inválido');
           return;
       }
   
       console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
   }
   let mago = new Hero('Mago de luz', 30, 'mago');
   mago.atacar(); 
   // Saída: "o mago atacou usando usou magia"
   
   let guerreiro = new Hero('Guerreiro impetuoso', 25, 'guerreiro');
   guerreiro.atacar(); 
   // Saída: "o guerreiro atacou usando usou espada"
   
   let monge = new Hero('Monge sabio', 40, 'monge');
   monge.atacar(); 
   // Saída: "o monge atacou usando usou artes marciais"
   
   let ninja = new Hero('Ninja astuto', 20, 'ninja');
   ninja.atacar();
    // Saída: "o ninja atacou usando usou shuriken"