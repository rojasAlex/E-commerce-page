                                    
                                    
                                    
document.addEventListener('click', e =>{
  console.log(e.target)

                             /* =====Active Menu======== */

    if(e.target.id === "icon-menu" || e.target.id === "icon-close"){
       menuToggle();
    }   
    
                       /* ============Active Basket ============ */
    if(e.target.id === "icon-cart"){
       showBasket();
    }

                        /* ===========Active Modal ================ */

    if(e.target.matches('.sneakers__images') || e.target.id === 'icon__close-modal'){
        activeModal();
    }


                          /* ===========ACTIVE SLIDER=============== */
   
                          if (e.target.matches('.btn__next')||e.target.id === "btn-next") {
                            Next();
                          } else if (e.target.matches('.btn__previous')|| e.target.id === "btn-previous") {
                            Previous();
                          }

                        /* ============ Quantity ================== */
                    
                          /* ========= Btn Plus============== */
                          
      if(e.target.matches('.btn__plus') || e.target.id ==='icon-plus'){
        Plus()
        
      }
      
      
                    /* =================== Btn Minus ============================ */
      if(e.target.matches('.btn__minus') || e.target.id ==='icon-minus'){
        
        Minus()
      }
                      /* =================== Add to Cart======================== */

      if(e.target.matches('.container__quantity .add__cart')){
          addCart(e)
      }

      if(e.target.id === 'icon-delete'){
          removeShopping()
      }

})                           
                                      
                                    
                                    
                                    /* ============MENU================ */

    const menu = document.querySelector('.menu'),
          body = document.querySelector('body')

          menuToggle = () =>{
            menu.classList.toggle('show__menu')
            body.classList.toggle('modal')
          }  
    
  

                                      /* ============CART============ */

        const basket = document.querySelector('.basket'),
   
              showBasket = () => basket.classList.toggle('showBasket')

  

                            /*========================SLIDER======================== */
          
    const  btnPrevious = document.querySelector(".btn__previous"),
           btnNext = document.querySelector(".btn__next"),
           slider = document.querySelector('.slider__content-modal'),
           sradios = document.querySelectorAll(".sradio"),
           sliderImg = document.querySelectorAll(".sneakers__images-modal"),
           sliderLong = (sliderImg.length-1)*100

        
          
          let num = 0;

         const Next = () =>{
             
              if(num < sliderLong){
              
                num = num+= 100
               
                slider.style.marginLeft = `-${num}%`
               
                if(num===100){
                   let sradio6 = sradios[5]
                      sradio6.checked = true
                     
                  }                 
                  else if(num ===200){
                    let sradio7 = sradios[6]
                    sradio7.checked = true
                
                   
                    
                  }
                else if(num === sliderLong){

                  btnNext.style.pointerEvents = "none"
                   btnNext.style.opacity = ".5"

                    let sradio8 = sradios[7]
                    sradio8.checked = true
                   
                    
                }
              }
              btnPrevious.style.pointerEvents = "unset"
              btnPrevious.style.opacity = "1"
         }

         const Previous = () =>{
              
               num = num-= 100
               
                slider.style.marginLeft = `-${num}%`
               
                if(num===200){
                   let sradio7 = sradios[6]
                      sradio7.checked = true
                }                 
                  else if(num ===100){
                    let sradio6 = sradios[5]
                    sradio6.checked = true
                  }
                else if(num === 0){

                  btnPrevious.style.pointerEvents = "none"
                  btnPrevious.style.opacity = ".5"
                  
                  let sradio5 = sradios[4]
                  sradio5.checked = true
                  sradio5.dataset = 0
                  
                }

                btnNext.style.pointerEvents = "unset"
                 btnNext.style.opacity = "1"
              
         }

       


             /* =========================ACTIVE SLIDER MODAL THUMBNAIL============================= */

                sradios.forEach((sradio)=>{
                   sradio.addEventListener('click', (e)=>{
                     let radio = e.target.attributes[2].value
                     if( radio === "sradio-5"){
                       slider.style.marginLeft = "0%"
                     }else if(radio === "sradio-6"){
                      slider.style.marginLeft = "-100%"
                     }else if(radio === "sradio-7"){
                       slider.style.marginLeft = "-200%"
                     }else if(radio === "sradio-8"){
                        slider.style.marginLeft = "-300%"
                     }
                   })
                })
                            /* ==================Active Modal ================ */


       const sneakerModal = document.querySelector(".sneakers__modal"),    
             activeModal = () =>  sneakerModal.classList.toggle("active__modal")
      


                                    //============Quantity==============

      const value = document.querySelector('.quantity .value'),
            btnCart = document.querySelector('.add__cart')
         
      
      const  products = [
        {name:"sneakers", price: parseInt('125.00'), amount: 0 }
      ]
      
      const productsCart = products.map((product)=>{
        return{
          ...product,
        }
      })
      
         
      const Plus = ()=>{
        productsCart.forEach((item)=>{
          let plus = item.amount+=1
          value.textContent =`${plus}`
          btnCart.dataset.amount =`${plus}`
        } )
      
        
      }
      const Minus = ()=>{
         productsCart.forEach((item)=>{
          if(item.amount > 0){
            let minus = item.amount-=1
            value.textContent = `${minus}`
            btnCart.dataset.amount =`${minus}`
          }
         })
      }
      
      
                                         /* ============Add Cart============== */

        const  basketShopping = document.querySelector('.basket__shopping'),
               iconCart = document.querySelector('.icon__cart'),
               fragment = document.createDocumentFragment(),
               template = document.querySelector('#template')
               
        const addCart = (e) =>{
         
          const data = e.target.dataset.amount;
          if(data){
            console.log(iconCart.dataset.content = data)
            iconCart.classList.add('badge')
          }

          basketShopping.textContent = "";
        
            
          productsCart.forEach((item)=>{
          const  price = item.price,
                 amount = item.amount,
                 total = item.price * item.amount,  
                 clone = template.content.cloneNode(true)
            clone.querySelector('.shopping__price').textContent = `$${price.toFixed(2)}`
            clone.querySelector('.shopping__amount').textContent = `${amount}`
            clone.querySelector('.total__price').textContent =  `$${total.toFixed(2)}`
            fragment.appendChild(clone)
          })

          basketShopping.appendChild(fragment)
          
        }
      
                  /* ================= Delete Shopping================ */
           const cartEmpty = document.querySelector('.basket__shopping-empty')
            
            const removeShopping = () =>{
                basketShopping.textContent = ""
                basketShopping.appendChild(cartEmpty)
                iconCart.classList.remove('badge')
            }





  
