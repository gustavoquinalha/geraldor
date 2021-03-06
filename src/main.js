import Vue from 'vue'
import { Compact } from 'vue-color'

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
    preview: false,
    topo: false,
    showMenu: true,
    isActive: true,
    show: true,
    menu: 'sizeMenu',
    bgColor: '',
    center: true,
    bottom: false,
    justify: 'justify-center',
    align: 'align-center',
    // image: 'https://pbs.twimg.com/profile_images/882727048183205889/lHnf-QL2_400x400.jpg',
    image: 'https://abrilsuperinteressante.files.wordpress.com/2016/10/super_imgcunha_memes_0.jpg',
    colors: defaultProps,
    text: 'Titulo',
    stext: 'Subtitulo',
    fontSize: '50',
    fontSizes: '50',
    counter: '',
    shown: true,
    shownn: true,
    widthValue: 600,
    heightValue: 600,
    newTodoText: '',
    todos: [
       'Do the dishes',
       'Take out the trash',
       'Mow the lawn'
   ]
  },
  methods: {

    togglePreview() {
     this.preview = !this.preview;
   },

    sizeMenuMenu: function () {
      this.showMenu = true;
    },

   toggle: function () {
       this.showMenu = !this.showMenu;
       this.menu = ''
   },

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
