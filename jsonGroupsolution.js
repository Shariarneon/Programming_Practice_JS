const students = [
    {
        name: "student_a",
        grade: "A",
    },
    {
        name: "student_b",
        grade: "B",
    },
    {
        name: "student_c",
        grade: "A",
    },
    {
        name: "student_d",
        grade: "B",
    },
    {
        name: "student_e",
        grade: "A",
    },

];
function gruoping(student) {
    const groupData = Object.groupBy(student, (item) => item.grade);
    console.log(groupData);
}

gruoping(students);