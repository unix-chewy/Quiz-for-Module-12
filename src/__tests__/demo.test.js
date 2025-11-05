// Test functions from your script.js
const { 
    demoFunction, 
    calculateUXScore, 
    formatUIFeedback,
    fakeFailingTest 
} = require('../script');

// Passing tests
describe('UI Analysis Functions', () => {
    test('demoFunction should return correct welcome message', () => {
        expect(demoFunction()).toBe('UI Analysis Tool is working!');
    });

    test('calculateUXScore should calculate correct score', () => {
        const issues = ['confusing branding', 'poor hierarchy'];
        expect(calculateUXScore(issues)).toBe(40); // 100 - (2 * 30)
    });

    test('formatUIFeedback should format feedback correctly', () => {
        const feedback = formatUIFeedback('Test Issue', 'high');
        expect(feedback).toContain('Test Issue');
        expect(feedback).toContain('high');
    });

    test('UX score should be 100 for no issues', () => {
        expect(calculateUXScore([])).toBe(100);
    });
});

// Failing test (to demonstrate failing scenario)
describe('Failing Test Example', () => {
    test('fakeFailingTest should return true (this test is designed to fail)', () => {
        expect(fakeFailingTest()).toBe(true); // This will fail since function returns false
    });
});