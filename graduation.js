function main(name, grades) {
    // The student passes to upper class, if his annual grade is 4.00 or greater.●
    // If his grade is less than 4.00, he has to repeat the class.
    let classYear = 1;
    let totalGrade = 0.00;
    let average = 0;

    while (classYear <= 12) {
        let grade = grades.shift()
        if (grade >= 4.00) {
            classYear++;
            totalGrade = totalGrade + grade;
        } else {
            console.log(`repeat class`);
            break;
        }
        if (classYear == 12) {
            let finalGrade = totalGrade + grade;
            average = finalGrade / 12;
            console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
        }
    }
}       

main('John', [4,5.5,6,5.43,4.5,6,5.55,5,6,6,5.43,5]);