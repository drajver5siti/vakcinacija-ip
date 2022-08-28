const getPredefinedJson = async () => {
    const res = await fetch('./data.json');
    return await res.json();
}


document.querySelector('#main-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    let predefinedData =  await getPredefinedJson();

    const name = document.querySelector('input[name="name"]').value;
    const surname = document.querySelector('input[name="surname"]').value;
    const id = document.querySelector('input[name="id"]').value;
    const sex = document.querySelector('input[name="sex"]:checked').value
    const age = document.querySelector('input[name="age"]').value
    const email = document.querySelector('input[name="email"]').value
    const location = document.querySelector('select[name="location"]').value

    console.log(predefinedData);
});