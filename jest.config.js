
module.exports = {
    testPathIgnorePatterns: ['<rootDir>/test', '<rootDir>/node_modules', ],
    transform: {'/^.+.(js)$/': '<rootDir>/node_modules/babel-jest', }
};