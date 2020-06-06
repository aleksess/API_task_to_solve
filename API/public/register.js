async function Register() {
    let Form = {
        Name: document.getElementById('Name').value,
        LastName: document.getElementById('Lastname').value,
        Event: document.getElementById('Event').value
    }
    console.log(Form)
    if (Form.Name.trim() === '' || Form.LastName.trim() === ''){
        alert('Name and Lastname fields mustn\'t be empty')
        return
    }
        
    const response = await fetch('http://localhost:3000/register/sign',{
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Form)
    })
    const responseParsed = await response.json()

    alert(responseParsed.message)
}

document.getElementById('register_button').addEventListener('click', Register)