/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    // await knex('categories').del();
    await knex('categories').insert([
        { id: 1, name: '野菜・果物' },
        { id: 2, name: '鮮魚' },
        { id: 3, name: '精肉' },
        { id: 4, name: '惣菜' },
        { id: 5, name: '麺・納豆・豆腐' },
        { id: 6, name: '乳製品' },
        { id: 7, name: '飲料' },
        { id: 8, name: '保存食・菓子・米' },
        { id: 9, name: '冷凍物' },
        { id: 10, name: '調味料' },
        { id: 11, name: '日用品' },
    ]);
};
