const data = [
    {
        name: "Pravallika",
        marks: 450
    },
    {
        name: "Pranay",
        marks: 470
    },
    {
        name: "Sai",
        marks: 490
    }
]

const results = document.getElementById('res')

const smBtn = document.getElementById('smt-btn')
smBtn.addEventListener("click", function() {
    const name = document.getElementById('name-box').value;
    for(let i = 0; i < data.length; i++){
        if(data[i].name.toLowerCase() == name.toLowerCase()){
            console.log(data[i].marks)
            results.innerHTML = "<h3>" + data[i].marks + " Marks" + "</h3>"
            return;
        }
    }
    results.innerHTML = "<h3>" + "There is no information about this student" + "</h3>"
})