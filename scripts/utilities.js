function handleButtonToggle(current, prev){
    current.style.border = "none";
    current.style.backgroundColor = "#B4F461";
    prev.style.border = "1px solid black";
    prev.style.backgroundColor = "white";
}

function handleSectionStyle(current, prev){
    current.style.display = "block";
    prev.style.display = "none";
}

function convertedValue(id){
    const element = document.getElementById(id).value;
    const convertedElement = parseInt(element);
    return convertedElement
}

function convertedText(id){
    const element = document.getElementById(id).innerText;
    const conElement = parseInt(element);
    return conElement;
}