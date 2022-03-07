/**************************************
    VUE INSTANCE
 **************************************/
new Vue({
  el: '#app',
  data() {
    return {
      appTitle: 'SAN CAKE',
      products: [
        { id: 1, title: 'CHOCO CAKE', price: 300 },
        { id: 2, title: 'CAKE BERRY', price: 400 },
        { id: 3, title: 'CAKE NILLA', price: 250 },
        { id: 4, title: 'ORE CAKE', price: 500 }
      ],
      cart: [],
      total: 0
    };
  },
  methods: {
    addItem(prod){
      // Increment total price
      this.total += prod.price;
      
      let inCart = false; 
      // Update quantity if the item is already in the cart
      for(let i = 0; i < this.cart.length; i++){
        if(this.cart[i].id === prod.id){
          inCart = true;
          this.cart[i].quantity++;
          break;
        }
      }
      // Add item if not already in the cart
      if(! inCart){
        this.cart.push({
          id: prod.id,
          title: prod.title,
          price: prod.price,
          quantity: 1
        }); 
      }
    },
    add(item){
      this.total += item.price;
      item.quantity++;
    },
    sub(item){
      this.total -= item.price;
      if(item.quantity > 1){
        item.quantity--; 
      } else{
        for( let i = 0; i < this.cart.length; i++){
          if(this.cart[i].id === item.id){
            this.cart.splice(i, 1);
            break;
          }
        }
      }
    }
  },
  filters: {
    currency(price){
      return 'MXN ' + price.toFixed(2);
    }
  }
});