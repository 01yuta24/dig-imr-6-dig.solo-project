module.exports = (knex) => {
    return {
        get: () => {
            return knex('categories')
                .select()
                .catch((error) => [console.log(error)]);
        },
        delete: () => {
            return knex('categories').del();
        },
    };
};
