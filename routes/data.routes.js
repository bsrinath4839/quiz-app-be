const DataRoutes = require('express')();
const questions = require('../assets/questions.data');
const options = require('../assets/options.data');
const solutions = require('../assets/solutions.data');


DataRoutes.get('/', (request, response) => {
    response
        .status(200)
        .json({
            success: true,
            data: {
                questions,
                options,
            }
        });
});

DataRoutes.post('/', (request, response) => {
    let {
        selected,
    } = request.body;
    let length = Object.keys(selected).length;
    let score = 0;
    if (length > 0) {
        for (index = 1; index <= length; index++) {
            if (selected[index] === solutions[index]) {
                score += 1
            };
        };
        response
            .status(200)
            .json({
                success: true,
                score,
            })
    } else {
        response
            .status(403)
            .json({
                success: false,
                score,
            })
    }

})

module.exports = DataRoutes;