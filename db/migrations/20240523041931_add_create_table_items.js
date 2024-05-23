/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.createTable('items', (table) => {
        table.increments('id').primary();
        table.string('name');
        table.integer('category_id');
        table.foreign('category_id').references('categories.id');
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
