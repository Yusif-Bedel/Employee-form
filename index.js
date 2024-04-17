const form = document.querySelector('form');
const tableBody = document.getElementById('employeeList'); 
form.addEventListener('submit', function(e) {
    e.preventDefault(); 
    const name = document.getElementById('name').value;
    const surname = document.getElementById('surname').value;
    const age = document.getElementById('age').value;
    const nationality = document.getElementById('nation').value;
    const position = document.getElementById('position').value;
    const experience = document.getElementById('exp').value;
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${surname}</td>
        <td>${age}</td>
        <td>${nationality}</td>
        <td>${position}</td>
        <td>${experience}</td>
    `;
    const editCell = document.createElement('td');
    editCell.appendChild(createEdit());
    newRow.appendChild(editCell);
    const deleteCell = document.createElement('td');
    deleteCell.appendChild(createDelete(newRow));
    newRow.appendChild(deleteCell);
    tableBody.appendChild(newRow);
    form.reset();
    
});
function createEdit() {
    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.classList.add('edit-btn');
    editButton.addEventListener('click', function() {
        alert("you cant change submitted form,BRO!")
    });
    return editButton;
}
function createDelete(row) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', function() {
        tableBody.removeChild(row);
    });
    return deleteButton;
}
