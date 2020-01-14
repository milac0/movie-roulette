module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testRegex: "((\\.|/*.)(spec))\\.tsx?$",
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "jest-static-stubs/$1",
    "^.+\\.(css|less|scss)$": "identity-obj-proxy"
  },
  setupFilesAfterEnv: [
    "<rootDir>/jest.setup.ts"
  ]
}