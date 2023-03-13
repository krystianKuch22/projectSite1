const email = document.querySelector('#email')
const subject = document.querySelector('#subject')
const name1 = document.querySelector('#name')
const text = document.querySelector('#message')


console.log(`cos \n sdfl`);

const sendEmail = () => {
    
    Email.send({
        SecureToken: "d2da934b-b677-4bf1-b2da-e9fabaa60095 ",
        To : "krys_kuch@outlook.com",
        From : "krys_kuch@outlook.com",
        Subject : subject.value,
        Body : `${name1.value} \n ${text.value}`
    }).then(
      message => alert(message)
    );
}