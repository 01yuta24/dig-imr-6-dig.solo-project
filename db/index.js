const createDefaultKnexClient = () => {
    const Knex = require('knex');
    const config = require('../knexfile');
    const environment = process.env.DATABASE_URL ? 'production' : 'development';

    return Knex(config[environment]);
};

const createDbModels = (knex = createDefaultKnexClient()) => {
    return {
        items: require('./items/index.js')(knex),
        categories: require('./categories/index.js')(knex),
    };
};

module.exports = {
    createDbModels,
    createDefaultKnexClient,
};
