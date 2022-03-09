AFRAME.registerComponent('cursor-listener',{
 schema:{
   ComicId : {default:'',type: "string"}
 },
init: function(){
    this.handleMouseEnterEvent();
    this.handleMouseLeaveEvent();
},
handleComicsstate: function(){
 const Id = this.getAttribute('id')
 const comicsId = ['Superman','Spiderman','Batman','Ironman']
  if(comicsId.includes(Id)){
     const posterContainer = document.querySelector('#posterContainer')
     posterContainer.setAttribute('cursor-listener',{
         ComicId : Id
     })
     this.el.setAttribute('material',{color: '#FF8D1A'});
  }
},
handleMouseEnterEvent: function(){
 this.el.addEventListener('mouseenter',() =>{
     this.handleComicsstate()
 }) 

},
handleMouseLeaveEvent: function(){
 this.el.addEventListener('mousedown',()=>{
    const {ComicId} = this.data
    if(ComicId){
       const el = document.querySelector(`#${ComicId}`)
       const id = el.getAttribute('id')
       if(id === ComicId){
          el.setAttribute('material',{color:'white'})
       }
    }
 })
}
})