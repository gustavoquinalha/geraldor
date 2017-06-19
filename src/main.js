import Vue from 'vue'
import { Compact } from 'vue-color'

// Vue.component('todo-item', {
//   template: `
//     <li>
//       {{ title }}
//       <button v-on:click="$emit('remove')">X</button>
//     </li>
//   `,
//   props: ['title']
// })
var defaultProps = {
  hex: '#194d33',
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 1
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.30,
    a: 1
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 1
  },
  a: 1
}

new Vue({
  el: '#app',
  components: {
    'compact-picker': Compact
  },
  data: {
    topo: false,
    menu: 'sizeMenu',
    bgColor: 'bg8',
    center: true,
    bottom: false,
    justify: 'justify-center',
    align: 'align-center',
    image: '',
    colors: defaultProps,
    text: 'Titulo',
    stext: 'Subtitulo',
    fontSize: '28',
    fontSizes: '16',
    counter: '',
    shown: true,
    shownn: true,
    widthValue: 800,
    heightValue: 600,
    newTodoText: '',
    todos: [
       'Do the dishes',
       'Take out the trash',
       'Mow the lawn'
   ]
  },
  methods: {

    toggleText() {
     this.shown = !this.shown;
   },
    toggleStext() {
     this.shownn = !this.shownn;
   },

    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    },

    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },

    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    removeImage: function (e) {
      this.image = '';
    },

    teste: function (e) {
      this.bgColor = 'nobg'
    }

  }
})
