new Vue({
  el: '#app',
  data: {
    segundos:    0,
    puntos:   0,
    resultado:  null,
    futbolistas: [
      {'nombre': 'Hugo Sánchez', 'posicion': '0px 0px'},
      {'nombre': 'Lionel Messi', 'posicion': '0px 0px'},
      {'nombre': 'Roberto Baggio', 'posicion': '0px 0px'},
      {'nombre': 'Andrés Iniesta', 'posicion': '0px 0px'},
      {'nombre': 'Medina Bello', 'posicion': '0px 0px'},
      {'nombre': 'Ruben paz', 'posicion': '0px 0px'},
      {'nombre': 'Jorge Comas', 'posicion': '0px 0px'},
      {'nombre': 'Beto Acosta', 'posicion': '0px 0px'},
      {'nombre': 'Loco Gatti', 'posicion': '0px 0px'},
      {'nombre': 'Chilavert', 'posicion': '0px 0px'},
      {'nombre': 'Aguinaga', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
      {'nombre': '', 'posicion': '0px 0px'},
    ],
    futbolistas_shuffle: null;
  },

  computed: {
    tiempo: function(){
      
    },
    velocidad: function(){
      
      var vel =  segundos/puntos;
      return vel.toFixed(2);

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
    this.empezar();
  },

  methods: {

    empezar: function() {
      this.mezclar_futbolistas();
      console.log('empezar');
    },

    mezclar_futbolistas: function(){
      a = this.futbolistas;
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
      this.futbolistas_shuffle = a;

    }
    
  },
});

//console.log(moment.utc(158000).format("mm:ss"));
