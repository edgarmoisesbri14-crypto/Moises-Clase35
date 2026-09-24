import userRoutes from "./user.routes.js";
import productRoutes from "./product.routes.js";

const allRoutes = (app) => {

    app.use("/users", userRoutes);
    app.use("/products", productRoutes);

};

export default allRoutes;