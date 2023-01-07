let displayFlg = document.getElementById('dlg')
let menu = document.getElementById('burger')
let isClick = false

// function disabelMenu(e){
//     if(!isClick){
//         displayFlg.style.display = 'none'
//     }
// }

document.addEventListener("click", (evt) => {
    if(evt.target == menu){
        displayFlg.style.display = 'block'
    }
    if(evt.target.classList.contains('sa-dialog')){
        displayFlg.style.display = 'none'
    }
})

// document.getElementsByClassName('navbar_menu')[0].addEventListener('click', function (event) {
//     isClick = true
//     displayFlg.style.display = 'block'
//     setTimeout(() => {
//         isClick = false
//     }, 500);
// }),


function sendEmail(){
    let name = document.getElementById('name').value
    let mail = document.getElementById('mail').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    if(!name || !mail || !subject || !message){
        alert('please enter all fields')
        return
    }
    Email.send({
        Host: "smtp.elasticemail.com",
        Username : "fasalkp26@gmail.com",
        Password : "0E556C2B2CEE223EA1D159E67FB1DE4402D1",
        To : mail,
        From : "fasalkp26@gmail.com",
        Subject : subject,
        Body : message,
        }).then( message => {
            console.log(message,'message')
            if(message == 'OK'){
                alert('Email sent successfully')
                document.getElementById('name').value = ''
                document.getElementById('mail').value = ''
                document.getElementById('subject').value = ''
                document.getElementById('message').value = ''
            }
        });
}

function scrollInto(id){
    if(id){
        displayFlg.style.display = 'none'
        let element = document.getElementById(id)
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }
}
