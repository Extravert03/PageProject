
const addBtn = document.getElementById('addBtn')
const showBtn = document.getElementById('showBtn')
let ShowList = []

function showShadow (array) {

    console.log(ShowList)
         let b = document.getElementById('work')
        ShowList.forEach(e => b.innerHTML += "<p class='working'>" + e + "</p>");
    ShowList = []

}
showBtn.addEventListener('click', showShadow )

addBtn.addEventListener('click', () => {
    let list = []
    let heading = document.createElement('div')
    heading.classList.add('working')
    let week = document.getElementById('week').value
    let time = document.getElementById('time').value
    let global = document.getElementById('global').value
    let kind = document.getElementById('kind').value
    heading = ' Расписание на: ' + week + ' - ' + time + ' - ' + kind + ' Приоритет ' + global
    list.push(heading)
    ShowList.push(heading)
})