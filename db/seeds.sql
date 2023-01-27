INSERT INTO department (name)
VALUES
("Legal"),
("HR"),
("Enginneering"),
("Sales");

INSERT INTO role (title, salary, department_id)
VALUES
("Lawer", 150000, 1),
("Lagal Lead", 200000, 1),
("HR Representative", 100000, 2),
("Lead Software Engineer", 200000, 3),
("Junior Software Engineer", 150000, 3),
("Sales Lead", 120000, 4),
("Sales Associate", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
("Sam", "Baker", 1, NULL),
("Justin", "Jerfferson", 3, 1),
("Walt", "Disney", 5, NULL),
("Yassin", "Abasher", 7, NULL),
("Rachel", "Curren", 2, 4),
("Kayla", "Taylor", 4, NULL),
("Moti", "Begna", 6, 4);