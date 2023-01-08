const util = require("./utils");

module.exports.Feedback = util.createEnum(
  ['Positive', 'Negative']
);

const QueryTypes = {
    1: "Question",
    2: "Comment",
    3: "Hiring" 
};
Object.freeze(QueryTypes);

module.exports.QueryTypes = QueryTypes;
