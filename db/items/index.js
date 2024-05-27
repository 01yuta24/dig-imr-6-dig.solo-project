module.exports = (knex) => {
    return {
        get: () => {
            return knex('items')
                .join('categories', 'items.category_id', '=', 'categories.id')
                .select(
                    'items.name as item_name',
                    'categories.name as category_name',
                    'category_id'
                )
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
