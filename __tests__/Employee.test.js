const Employee = require('../lib/Employee');
const employee = new Employee('Ryan', 1, 'roger889@umn.edu');

test('all elements within the employee object', () => {
    expect(employee.name).toBe('Ryan');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('roger889@umn.edu');
});

test('employees role (employee)', () => {
    expect(employee.getRole()).toBe("Employee");
}); 