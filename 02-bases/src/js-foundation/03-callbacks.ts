interface User {
    id: Number;
    name: string;
}

const users: User[] = [
    {
        id: 1,
        name: 'Jhon Doe'
    },
    {
        id: 2,
        name: 'Jane Doe'
    }
]



export function getUserById(id: Number, callback: (err?: string, user?: User) => void) {
    const user = users.find(function (user) {
        return user.id === id;
    });
    if (!user) {
        return callback(`User not found with id ${id}`);
    }
    return callback(undefined, user)
}

//getUserById(1);

