const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products, userName, email } = ctx.request.body;
  
    
    try {
      // Normalize products to always be an array
      const normalizedProducts = Array.isArray(products) ? products : [products];
      
      // Process each product (this example assumes you might do more processing)
      const processedProducts = await Promise.all(
        normalizedProducts.map(async (product) => {
          // Optionally retrieve item information from the database
          const item = await strapi.service("api::item.item").findOne(product.id);

          return {
            id: product.id,
            name: item.name,
            price: item.price,
            count: product.count,
          };
        })
      );

      // Create the order in the Strapi database
      const newOrder = await strapi.service("api::order.order").create({
        data: { userName, email, products: processedProducts },
      });

      // Send success response to the frontend
      ctx.response.status = 200;
      return { message: "Order created successfully", order: newOrder };
    } catch (error) {
      // Handle errors and send failure response
      ctx.response.status = 500;
      return { error: { message: "There was a problem creating the order" } };
    }
  },
}));
