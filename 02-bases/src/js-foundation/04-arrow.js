const users = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]



var getUserById = (id, callback) => {
    const user = users.find((user) => {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(null, user)
}

//getUserById(1);

module.exports = {
    getUserById,
}