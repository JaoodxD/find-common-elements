export default function generateTestCase(length = 10, min = 0, max = 10) {
  const testCase = [];
  for (let i = 0; i < length; i++) {
    testCase.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return testCase;
}
