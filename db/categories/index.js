module.exports = (knex) => {
    return () => {
        return knex('categories')
            .select()
            .catch((error) => [console.log(error)]);
    };
};
