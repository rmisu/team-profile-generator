const Intern = require('../lib/Intern');
const intern = new Intern ('Ryan', 1, 'roger889@umn.edu', 'U of M');

test('all elements within the engineer object', () => {
    expect(intern.name).toBe('Ryan');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('roger889@umn.edu');
    expect(intern.school).toBe('U of M');
});

test('employees role (intern)', () => {
    expect(intern.getRole()).toBe("Intern");
});