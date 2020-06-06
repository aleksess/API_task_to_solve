function load(){
    downloadEvents()
}

async function downloadEvents(){
    const response = await fetch(`http://localhost:3000/register/events`)
    const responseParsed = await response.json()
    let ul = document.getElementById('ul')
    
    console.log(responseParsed) 
    for (let i = 0 ; i < responseParsed.length; i++){
        let li = document.createElement('li')
        let date_start = responseParsed[i].date_start
        let date_end = responseParsed[i].date_end
        await li.appendChild(document.createTextNode(`${responseParsed[i].title} last from ${date_start} to ${date_end}`))
        await ul.appendChild(li)
    }   
       
}


window.onload = load