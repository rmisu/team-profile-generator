const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Ryan', 1, 'roger889@umn.edu', 'rmisu');

test('all elements within the engineer object', () => {
    expect(engineer.name).toBe('Ryan');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('roger889@umn.edu');
    expect(engineer.github).toBe('rmisu');
});

test('employees role (engineer)', () => {
    expect(engineer.getRole()).toBe("Engineer");
});