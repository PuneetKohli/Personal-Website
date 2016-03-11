/**
 * Created by puneet on 11/03/16.
 */

function validateEmail() {
    var email = document.getElementById('Email').value;
    var atpos = email.indexOf("@");
    var dotpos = email.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length) {
        alert("Not a valid e-mail address");
    }
}

function openContactForm()
{
    document.getElementsByClassName('container-contact').item(0).style.display = 'block';
    document.getElementsByClassName('about-me-container').item(0).style.display = 'none';

}