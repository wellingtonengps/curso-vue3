app.component("cart-display", {
  props: "cart",
  emits: "update-cart",

  setup(props, { emit }) {
    const cart = ref(1);
    const addToCart = () => {
      cart.value += 1;
    };

    return {
      cart,
      addToCart,
    };
  },

  template: `
    <div class="cart">Cart: {{cart}}</div>
  `,
});
