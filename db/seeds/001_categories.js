/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
    // Deletes ALL existing entries
    await knex('categories').del();
    await knex('categories').insert([
        { name: '野菜・果物' },
        { name: '鮮魚' },
        { name: '精肉' },
        { name: '惣菜' },
        { name: '麺・納豆・豆腐' },
        { name: '乳製品' },
        { name: '飲料' },
        { name: '保存食・菓子・米' },
        { name: '冷凍物' },
        { name: '調味料' },
        { name: '日用品' },
    ]);
};
