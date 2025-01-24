app.component("product-display", {
  setup(props) {
    const image = ref("./assets/images/t-shirt-blue.png");
    const changeImage = (variantimage) => {
      image.value = variantimage;
    };

    const product_title = "T-Shirt";
    const brand = "Well";
    const titleWithBrand = computed(() => {
      return product_title + " " + brand;
    });

    const inStock = 0;
    const inStockComputed = computed(() => {
      if (inStock > 10) {
        return "inStock";
      } else if (inStock <= 10 && inStock > 0) {
        return "Almost of Stock";
      } else {
        return "Out of Stock";
      }
    });

    return {
      image,
      changeImage,
      details: ["50% Cotton", "30% polyester", "20% wool"],
      variants: [
        {
          id: 1,
          color: "blue",
          image: "./assets/images/t-shirt-blue.png",
        },
        {
          id: 2,
          color: "green",
          image: "./assets/images/t-shirt-green.png",
        },
      ],
      titleWithBrand,
      inStockComputed,
    };
  },
  template: `
   <div class="product-display">
        <div class="product-container">
          <div class="prodct-image">
            <img v-bind:src="image" alt="image blue" srcset="" />
          </div>
          <div class="prodct-info">
            <h1>{{titleWithBrand}}</h1>
            <p>{{inStockComputed}}</p>
            <ul>
              <li v-for="detail in details">{{detail}}</li>
            </ul>
            <div
              v-for="variant in variants"
              :key="variant.id"
              @mouseover="changeImage(variant.image)"
            >
              {{variant.color}}
            </div>
            <button class="button" @click="$emit('add-to-cart')">Add to Cart</button>
          </div>
        </div>
      </div>`,
});
