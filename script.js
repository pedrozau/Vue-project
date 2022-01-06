
Vue.directive('red',{
    inserted:function(element){
        element.style.color = '#3D3B52'
    }
})

const app = new Vue({
    el:'#apps',
    data:{
        messageDoDia:'',
        dia:false,
        imageTarde:''

        
    },
      created(){
          
         this.dia = true
        

      }
    ,
    methods:{
        horaDoDia:function(){
             
           let  dates = new Date()
           let  hora = dates.getHours()
      
           

            if(hora  >= 0  &&  hora <= 11){
                   
                this.messageDoDia = 'Bom Dia'
                window.document.body.style.background = '#1FA1ED'
                this.imageTarde = './img/dia.jpg'
               

            }else if(hora >= 12 && hora <= 17 ){

                this.messageDoDia = 'Boa Tarde'
                window.document.body.style.background = '#8A5612'
                this.imageTarde = './img/tarde_.jpg'


            }else {
                this.messageDoDia = 'Boa Noite'
                window.document.body.style.background = '#524F4E'
                this.imageTarde = './img/noite.jpg'
            }

           
                return ` agora são ${hora} horas `
            
           /*
                setInterval(()=>{
                     let  date = new Date()
                      let hora = date.getHours() 
                       let minuto = date.getMinutes() 
                       let segundo = date.getSeconds()
                        console.log(`${hora}:${minuto}:${segundo}`)  
                     },1000) 


                     */

            

        }
         
    },
    directives:{
        capitalize:function(element){
            let words = element.innerText.split(' ')
            words.forEach((text,index)=>{
                words[index] = text.charAt(0).toUpperCase() + text.slice(1)
            })

            element.innerText = words.join(' ')
        }
    }
})