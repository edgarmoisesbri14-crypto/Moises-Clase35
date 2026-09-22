import userRoutes from "./user.routes.js";

const allRoutes = (app) => {

    app.get("/", (req, res) => {
        res.json({ message: "API is running" });
    });

    app.use("/users", userRoutes);

};

export default allRoutes;