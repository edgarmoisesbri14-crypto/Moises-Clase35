import * as userService from "../services/user.service.js";

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        next(error);
    }
};

const createUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await userService.createUser(userData);

        res.status(201).json(newUser);
    } catch (error) {
        next(error);
    }
};

const getUserById = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const user = await userService.getUserById(userId);

        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
};

const updateUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const userData = req.body;
        const updateUser = await userService.updateUser(userId, userData);

        if (!updateUser) {
            return res.status(404).json({ message: "user not found" });
        }

        res.status(200).json(updateUser);
    } catch (error) {
        next(error);
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deleteUser = await userService.deleteUser(userId);

        if (!deleteUser) {
            return res.status(404).json({ message: "user not found" });
        }

        res.status(200).json({ message: "user deleted successfully" });
    } catch (error) {
        next(error);
    }
};

export {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};