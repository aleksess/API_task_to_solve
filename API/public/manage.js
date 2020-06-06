async function post_delete() {
    const code = document.getElementById('Delete_code').value
    console.log(code)
    const response = await fetch('http://localhost:3000/register/delete',{
        method: 'POST',
        mode: 'cors',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({Code: Number.parseInt(code)})
    })
    const responseParsed = await response.json()
    alert(responseParsed.message)

}

document.getElementById('Delete').addEventListener('click', post_delete)