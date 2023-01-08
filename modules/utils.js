class Utilities {
    constructor() {}

    /**
     * 
     * @param {Array} values An array of values meant to constitute the enum 
     * @returns 
     */
    createEnum(values) {
        const enumObject = {};
        for (const val of values) {
          enumObject[val] = val;
        }
        return Object.freeze(enumObject);
    }
}

const util = new Utilities()
module.exports = util;
