AFRAME.registerComponent("poster", {
    init: function () {
      this.placesContainer = this.el;
      this.createCards();
    },
  
    createCards: function () {
      const thumbNailsRef = [
        {
            id: 'Superman',
            title:'Superman',
            url:'assets/Superman.png'
        },
        {
         id: 'Spiderman',
         title:'Spiderman',
         url:'assets/Spiderman.png'
     },
     {
         id: 'Batman',
         title:'Batman',
         url:'assets/Batman.png'
     },
     {
         id: 'Ironman',
         title:'Ironman',
         url:'assets/Ironman.png'
     }
      ];
      let prevoiusXPosition = -60;
  
      for (var item of thumbNailsRef) {
        const posX = prevoiusXPosition + 30;
        const posY = 10;
        const posZ = -40;
        const position = { x: posX, y: posY, z: posZ };
        prevoiusXPosition = posX;
  
        // Border Element
        const borderE1 = this.createBorder(position,item.id);
        // Thumbnail Element
        const thumbNail = this.createThumbNailItem(item);
        borderE1.appendChild(thumbNail);
        // Title Text Element
     
  
        this.placesContainer.appendChild(borderE1);


      }
    },
    createBorder:function(position,id){
      const entityE1 = document.createElement('a-entity')
      entityE1.setAttribute('id',id)
      entityE1.setAttribute('visible',true)
      entityE1.setAttribute('geometry',{
        primitive: 'plane',
        width: 50,
        height: 50,
      })     
     entityE1.setAttribute('position',position)
     entityE1.setAttribute('material',{
       color: 'white',
       opacity: 0
     })

     entityE1.setAttribute('cursor-listener',{})
     return entityE1

    },
    
    createThumbNailItem: function(item){
     const entityE1 = document.createElement('a-entity')
     entityE1.setAttribute('visible',true)
     entityE1.setAttribute('geometry',{
       primitive:'plane',
       width: 20,
       height: 20,
     })
     entityE1.setAttribute('material',{
       src: item.url,
      
     })
     return entityE1
    },

  });
  