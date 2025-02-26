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