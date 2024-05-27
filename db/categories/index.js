module.exports = (knex) => {
    return {
        get: () => {
            return knex('categories')
                .select()
                .catch((error) => [console.log(error)]);
        },
    };
};
