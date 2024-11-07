// Define a Student class
class Student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.grades = {};
  }

  // Method to add a grade for a subject
  addGrade(subject, grade) {
    this.grades[subject] = grade;
  }

  // Method to get the average grade
  getAverageGrade() {
    const grades = Object.values(this.grades);
    const sum = grades.reduce((a, b) => a + b, 0);
    return sum / grades.length;
  }
}

// Define a School class
class School {
  constructor() {
    this.students = [];
  }

  // Method to add a student
  addStudent(student) {
    this.students.push(student);
  }

  // Method to get all students
  getStudents() {
    return this.students;
  }
}

// Create a new school
const school = new School();

// Create some students
const student1 = new Student('John Doe', 12);
student1.addGrade('Math', 85);
student1.addGrade('Science', 90);

const student2 = new Student('Jane Doe', 11);
student2.addGrade('Math', 78);
student2.addGrade('English', 92);

const student3 = new Student('Akosua', 20);
student2.addGrade('Math', 80);
student2.addGrade('English', 70);

const student4 = new Student('Manuel', 21);
student2.addGrade('Math', 90);
student2.addGrade('English', 92);

// Add students to the school
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addStudent(student4);

// Print out the students and their grades
console.log('Students:');
school.getStudents().forEach((student) => {
  console.log(`Name: ${student.name}, Age: ${student.age}`);
  console.log('Grades:');
  Object.keys(student.grades).forEach((subject) => {
    console.log(`  ${subject}: ${student.grades[subject]}`);
  });
  console.log(`Average Grade: ${student.getAverageGrade()}`);
});