document.getElementById('add-course').addEventListener('click', function () {
    const courses = document.getElementById('courses');
    const courseCount = courses.children.length + 1;

    const newCourse = document.createElement('div');
    newCourse.classList.add('course');

    newCourse.innerHTML = `
        <label>Subject ${courseCount}:</label>
        <input type="number" placeholder="Credits" class="credits" min="0">
        <input type="number" placeholder="Points" class="points" min="0">
    `;

    courses.appendChild(newCourse);
});

document.getElementById('calculate-gpa').addEventListener('click', function () {
    const credits = document.querySelectorAll('.credits');
    const points = document.querySelectorAll('.points');

    let totalCredits = 0;
    let totalPoints = 0;

    credits.forEach((credit, index) => {
        const creditValue = parseFloat(credit.value);
        const pointValue = parseFloat(points[index].value);

        if (!isNaN(creditValue) && !isNaN(pointValue)) {
            totalCredits += creditValue;
            totalPoints += creditValue * pointValue;
        }
    });

    const gpa = (totalCredits === 0) ? 0 : (totalPoints / totalCredits).toFixed(2);

    document.getElementById('gpa').innerText = gpa;
});

// CGPA Calculator JavaScript
let semesterCount = 1;

document.getElementById('add-semester').addEventListener('click', function () {
    semesterCount++;
    const semestersDiv = document.getElementById('semesters');
    const newSemester = document.createElement('div');
    newSemester.className = 'semester';
    newSemester.innerHTML = `
        <label for="semester${semesterCount}">Semester ${semesterCount} GPA:</label>
        <input type="number" id="semester${semesterCount}" step="0.01" min="0" max="10" required>
    `;
    semestersDiv.appendChild(newSemester);
});

document.getElementById('calculate-cgpa').addEventListener('click', function () {
    let totalGPA = 0;
    for (let i = 1; i <= semesterCount; i++) {
        const semesterGPA = document.getElementById(`semester${i}`).value;
        if (semesterGPA) {
            totalGPA += parseFloat(semesterGPA);
        }
    }
    const cgpa = totalGPA / semesterCount;
    document.getElementById('cgpa').innerText = cgpa.toFixed(2);
});
