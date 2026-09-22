import { generateId } from "../utils/generateId.js";

let users = [
    {
        id: 1,
        name: "Moises",
        email: "moises@gmail.com"
    },
    {
        id: 2,
        name: "Juan",
        email: "juan@gmail.com"
    }
];

const getAllUsers = async () => {
    return users;
};

const createUser = async (users) => {
    const newUser = {
        id: users.length + 1,
        name: userData.name,
        email: userData.email
    };

    users.push(newUser);

    return newUser;
};

const getUserById = async (userId) => {
    return users.find(user => user.id === parseInt(userId));
};

const updateUser = async (userId, userData) => {
    const user = users.find(user => user.id === parseInt(userId));

    if (!user) {
        return null;
    }

    user.name = userData.name || user.name;
    user.email = userData.email || user.email;

    return user;
};

const deleteUser = async (userId) => {
    const index = users.findIndex(user => user.id === parseInt(userId));

    if (index === -1) {
        return null;
    }

    const deletedUser = users.splice(index, 1);

    return deletedUser[0];
};

export {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
};