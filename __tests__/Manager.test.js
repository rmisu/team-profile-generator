const Manager = require('../lib/Manager');
const manager = new Manager('Ryan', 1, 'roger889@umn.edu', 12);

 test('all elements within the manager object', () => {
    expect(manager.name).toBe('Ryan');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('roger889@umn.edu');
    expect(manager.office).toBe(12);
});

test('employees role (manager)', () => {
    expect(manager.getRole()).toBe("Manager");
}); 