const queryPromise = require('../lib/queryPromise');

module.exports = connection => function (weddingId) {

    const qp = queryPromise(connection);

    return qp(`SELECT   id, category,	name, 
                        description, image, price 
                        FROM presents WHERE wedding_id=? AND deleted =\'N\' ORDER BY price`, weddingId)
};
