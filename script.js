let INDEX = 1;

async function getPredefinedJson() {
    const res = await fetch('./data.json');
    return await res.json();
}

function removeRow(row) {
    const table = document.querySelector('.main-table');
    console.log(row);
    table.deleteRow(row);
}

function checkRequirements(id, email) {
    if (id.length !== 13) {
        return false;
    }

    const REGEX_PATTERN = /^.*@(gmail|yahoo)\.com$/

    if (email.match(REGEX_PATTERN) === null) {
        return false;
    }

    return true;
}

function addToTable(name, surname, id, sex, age, email, location) {
    const table = document.querySelector('.main-table');
    const rowID = INDEX.toString();

    const row = table.insertRow();
    row.id = rowID;

    let nameCell = row.insertCell()
    let surnameCell = row.insertCell();
    let idCell = row.insertCell();
    let sexCell = row.insertCell();
    let ageCell = row.insertCell();
    let emailCell = row.insertCell();
    let locationCell = row.insertCell();
    let buttonCell = row.insertCell();

    nameCell.innerHTML = name;
    surnameCell.innerHTML = surname;
    idCell.innerHTML = id;
    sexCell.innerHTML = sex;
    ageCell.innerHTML = age;
    emailCell.innerHTML = email;
    locationCell.innerHTML = location;

    const buttonNode = document.createElement('button');
    buttonNode.textContent = 'Delete'
    buttonNode.addEventListener('click', (event) => {
        event.preventDefault();
        removeRow(rowID);
    })

    buttonCell.appendChild(buttonNode);

    row.classList.add(sex == '1' ? 'row-red' : 'row-blue')

    INDEX = INDEX + 1;
}


document.querySelector('#main-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let predefinedData = await getPredefinedJson();

    const name = document.querySelector('input[name="name"]').value;
    const surname = document.querySelector('input[name="surname"]').value;
    const id = document.querySelector('input[name="id"]').value;
    const sex = document.querySelector('input[name="sex"]:checked').value
    const age = document.querySelector('input[name="age"]').value
    const email = document.querySelector('input[name="email"]').value
    const location = document.querySelector('select[name="location"]').value


    if (!checkRequirements(id, email)) {
        alert('Invalid data');
        return;
    }


    addToTable(name, surname, id, sex, age, email, location)

});