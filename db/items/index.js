module.exports = (knex) => {
    return {
        get: () => {
            return knex('items')
                .select()
                .catch((error) => [console.log(error)]);
        },
        post: (body) => {
            return knex('items')
                .insert(body)
                .catch((error) => [console.log(error)]);
        },
        delete: () => {
            return knex('items').del();
        },
    };
};
