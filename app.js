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
        document.body.style.overflow = 'hidden'
    }
    if(evt.target.classList.contains('sa-dialog')){
        displayFlg.style.display = 'none'
        document.body.style.overflow = 'auto'
    }
})

// document.getElementsByClassName('navbar_menu')[0].addEventListener('click', function (event) {
//     isClick = true
//     displayFlg.style.display = 'block'
//     setTimeout(() => {
//         isClick = false
//     }, 500);
// }),

function sendMail(id){
    let aTag = document.getElementById(id)
    let name = document.getElementById('name').value
    let mail = document.getElementById('mail').value
    let subject = document.getElementById('subject').value
    let message = document.getElementById('message').value
    if(id == 'desktop'){
        aTag.href = `https://mail.google.com/mail/?view=cm&fs=1&to=drshafionco@gmail.com&su=${subject}&body=${message}`
        aTag.target = '_blank'
    }
    if(id == 'mob'){
        let userAgent = navigator.userAgent
        if(userAgent.match(/chrome|chromium|crios/i)){
            aTag.href = `mailto:drshafionco@gmail.com`//chrome
            return
        }
        if(userAgent.match(/safari/i)){
            aTag.href = `mailto:drshafionco@gmail.com`//safari
            return
        }
    }
}

function sendEmail(v){
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
        Username : "drshafionco@gmail.com",
        Password : "0E556C2B2CEE223EA1D159E67FB1DE4402D1",
        To : mail,
        From : "drshafionco@gmail.com",
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
        document.body.style.overflow = 'auto'
        let element = document.getElementById(id)
        element.scrollIntoView({
            behavior: 'smooth'
        })
    }
}
