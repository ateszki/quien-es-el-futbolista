Vue.component('botones',{
  props: ['opciones'],

  template: '<div v-for="op in opciones"><button data-indice={{op.indice}} data-correcto={{op.correcto}} v-on:click="respuesta" class="btn btn-default col-xs-8 col-xs-offset-2" >{{ op.nombre }}</button></div>',

  methods: {
    respuesta: function(event){
      self = this.$parent;
      
      if(event.target.dataset.indice==self.indice){
        event.target.classList.add('btn-success');
        self.puntos+=1;
      } else {
        event.target.classList.add('btn-danger');
      }
      if(event.target.dataset.indice == self.futbolistas_shuffle.length-1){
        self.terminar();
        return false;
      }
      
      var bot = event.target;
      window.setTimeout(function(){
        bot.classList.remove('btn-success')
        bot.classList.remove('btn-danger')
        self.indice +=1;
        self.opciones = null;
        self.crear_opciones();
      },200);
    },
 
  }
});

new Vue({
  el: '#app',
  data: {
    terminado: false,
    segundos:    0,
    puntos:   0,
    futbolistas: [
      {'nombre': 'Hugo Sánchez', 'posicion': '0px 0px'},
      {'nombre': 'Lionel Messi', 'posicion': '-70px 0px'},
      {'nombre': 'Roberto Baggio', 'posicion': '-140px 0px'},
      {'nombre': 'Ronaldo', 'posicion': '-210px 0px'},
      {'nombre': 'Andrés Iniesta', 'posicion': '-280px 0px'},
      {'nombre': 'Medina Bello', 'posicion': '-340px 0px'},
      {'nombre': 'No sé', 'posicion': '-410px 0px'},
      {'nombre': 'Ruben paz', 'posicion': '-480px 0px'},
      {'nombre': 'Jorge Comas', 'posicion': '-550px 0px'},
      {'nombre': 'Beto Acosta', 'posicion': '-620px 0px'},
      {'nombre': 'Loco Gatti', 'posicion': '-690px 0px'},
      {'nombre': 'Chilavert', 'posicion': '-760px 0px'},
      {'nombre': 'Aguinaga', 'posicion': '-830px 0px'},
      {'nombre': 'No sé', 'posicion': '-900px 0px'},
      {'nombre': 'Maradona', 'posicion': '-970px 0px'},
      {'nombre': 'Zico', 'posicion': '-1040px 0px'},
      {'nombre': 'Cristiano Ronaldo', 'posicion': '0px -155px'},
      {'nombre': 'No sé', 'posicion': '-70px -155px'},
      {'nombre': 'Gullit', 'posicion': '-140px -155px'},
      {'nombre': 'Bengoechea', 'posicion': '-210px -155px'},
      {'nombre': 'No sé', 'posicion': '-280px -155px'},
      {'nombre': 'Ronaldinho', 'posicion': '-370px -155px'},
      {'nombre': 'Pato Fillol', 'posicion': '-440px -155px'},
      {'nombre': 'Lagarto Fleita', 'posicion': '-510px -155px'},
      {'nombre': 'No sé', 'posicion': '-580px -155px'},
      {'nombre': 'Luis Islas', 'posicion': '-670px -155px'},
      {'nombre': 'Antonio Mohamed', 'posicion': '-750px -155px'},
      {'nombre': 'Ruso Abramovich', 'posicion': '-830px -155px'},
      {'nombre': 'No sé', 'posicion': '-910px -155px'},
      {'nombre': 'No sé', 'posicion': '-990px -155px'},
      {'nombre': 'Javier Mascherano', 'posicion': '-1070px -155px'},
      {'nombre': 'No sé', 'posicion': '0px -296px'},
      {'nombre': 'Marcelo Salas', 'posicion': '-70px -296px'},
      {'nombre': 'Socrates', 'posicion': '-140px -296px'},
      {'nombre': 'Romario', 'posicion': '-210px -296px'},
      {'nombre': 'Carlos Tevez', 'posicion': '-280px -296px'},
      {'nombre': 'Pipi Romagnoli', 'posicion': '-350px -296px'},
      {'nombre': 'No sé', 'posicion': '-420px -296px'},
      {'nombre': 'Pájaro Caniggia', 'posicion': '-490px -296px'},
      {'nombre': 'Pibe Valderrama', 'posicion': '-560px -296px'},
      {'nombre': 'Garrafa Sánchez', 'posicion': '-630px -296px'},
      {'nombre': 'Rogerio Ceni', 'posicion': '-700px -296px'},
      {'nombre': 'Burrito Ortega', 'posicion': '-770px -296px'},
      {'nombre': 'Negro Palma', 'posicion': '-840px -296px'},
      {'nombre': 'Bruja Verón', 'posicion': '-910px -296px'},
      {'nombre': 'Alberto Kempes', 'posicion': '-990px -296px'},
      {'nombre': 'Pipo Gorosito', 'posicion': '-1060px -296px'},
      {'nombre': 'Beto Alonso', 'posicion': '0px -442px'},
      {'nombre': 'No sé', 'posicion': '-80px -442px'},
      {'nombre': 'Beto Márcico', 'posicion': '-160px -442px'},
      {'nombre': 'Pepe Chatruc', 'posicion': '-240px -442px'},
      {'nombre': 'Bochini', 'posicion': '-320px -442px'},
      {'nombre': 'No sé', 'posicion': '-400px -442px'},
      {'nombre': 'Comizzo', 'posicion': '-480px -442px'},
      {'nombre': 'Oscar Garré', 'posicion': '-560px -442px'},
      {'nombre': 'Radamel Falcao', 'posicion': '-620px -442px'},
      {'nombre': 'No sé', 'posicion': '-700px -442px'},
      {'nombre': 'Bicicleta Saturno', 'posicion': '-780px -442px'},
      {'nombre': 'Luifa Artime', 'posicion': '-860px -442px'},
      {'nombre': 'No sé', 'posicion': '-940px -442px'},
      {'nombre': 'Pasucci', 'posicion': '-1020px -442px'},
      {'nombre': 'Bilardo', 'posicion': '-1080px -442px'},
    ],
    futbolistas_shuffle: null,
    opciones: null,
    indice: 0,
    en_juego: false,
    intervalID: null,
  },

  computed: {
    tiempo: function(){
      return moment.utc(this.segundos*1000).format("mm:ss")
    },
    velocidad: function(){
      var vel =  (this.segundos==0||this.indice==0)?0:((this.indice+1)*60)/this.segundos;
      return vel.toFixed(2);

    },
    resultado: function(){
      var res = (this.terminado)?this.puntos*this.velocidad:0;
      return res.toFixed(2)
    },
    distribution: function(){
      var dist = this.adults;
      if (this.children !== null){
        for(i=0;i<this.children;i++){
          dist+='-7'
        }
      }
      if(this.rooms !== null && this.rooms > 1){
        dist += '!'+this.rooms;
      }
      return dist;
    },
  },

  created: function () {
    //metodo on init
    

  },

  methods: {

    empezar: function() {
      self = this;
      this.mezclar_futbolistas();
      this.intervalID = window.setInterval(function(){
        self.segundos +=1;
      }, 999);
      this.en_juego = true;
      this.crear_opciones();

    },
    terminar: function(){
      clearInterval(this.intervalID);
      this.en_juego = false;
      this.futbolistas_shuffle = null;
      this.opciones = null;
      this.terminado = true;

    },

    mezclar_futbolistas: function(){
      a = this.array_shuffle(this.futbolistas);
      this.futbolistas_shuffle = a;

    },
    array_shuffle: function(a){
      let counter = a.length;

      // While there are elements in the array
      while (counter > 0) {
          // Pick a random index
          let index = Math.floor(Math.random() * counter);

          // Decrease counter by 1
          counter--;

          // And swap the last element with it
          let temp = a[counter];
          a[counter] = a[index];
          a[index] = temp;
      }
      return a;
    },
    crear_opciones: function(){
        var id = this.indice;
        var futbolista = this.futbolistas_shuffle[id];
        var ops = [];
        this.opciones = [];
        futbolista.indice = id;
        imgcont = document.getElementById("imgcont").style.backgroundPosition = futbolista.posicion;
        var o =[];
        var usados = [];
        o.push(futbolista);
        usados.push(id)
        var f = '';
        while (o.length < 3){
          i = Math.floor((Math.random() * this.futbolistas_shuffle.length) );
          var usado = false;
          for(j=0;j<usados.length;j++){
            if(usados[j] == i){
              usado = true;
              break;
            }
          }
          if(!usado){
            f = this.futbolistas_shuffle[i];
            f.indice = i;
            o.push(f);
            usados.push(i)
          }
        }
        ops = this.array_shuffle(o);
        this.opciones = ops;
    },
    
  },
});

//console.log(moment.utc(158000).format("mm:ss"));
