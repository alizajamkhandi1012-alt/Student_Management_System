const form = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");

let editRow = null;

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value;
    const roll = document.getElementById("roll").value;
    const department = document.getElementById("department").value;
    const marks = document.getElementById("marks").value;

    if(editRow == null){

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${name}</td>
            <td>${roll}</td>
            <td>${department}</td>
            <td>${marks}</td>

            <td>
                <button onclick="editStudent(this)">
                    Edit
                </button>

                <button onclick="deleteStudent(this)">
                    Delete
                </button>
            </td>
        `;

        studentList.appendChild(row);

    }

    else{

        editRow.cells[0].innerHTML = name;
        editRow.cells[1].innerHTML = roll;
        editRow.cells[2].innerHTML = department;
        editRow.cells[3].innerHTML = marks;

        editRow = null;

    }

    form.reset();

});

function deleteStudent(button){

    button.parentElement.parentElement.remove();

}

function editStudent(button){

    editRow = button.parentElement.parentElement;

    document.getElementById("name").value =
        editRow.cells[0].innerHTML;

    document.getElementById("roll").value =
        editRow.cells[1].innerHTML;

    document.getElementById("department").value =
        editRow.cells[2].innerHTML;

    document.getElementById("marks").value =
        editRow.cells[3].innerHTML;

}