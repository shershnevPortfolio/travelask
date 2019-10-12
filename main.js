function randomName() {
    if (localStorage.getItem('messages') == null) {
        localStorage.setItem('messages', JSON.stringify([]));
    }
}

function sendMessage(e) {
    e.preventDefault();
    var messagesInfo = JSON.parse(localStorage.getItem('messages'));
    messagesInfo.push([this.id.toString(), document.getElementById(this.id.toString() + "_textarea").value]);
    localStorage.setItem('messages', JSON.stringify(messagesInfo));
    for (let i = 0; i < document.getElementsByClassName('chat__window').length; i++) {
        var messageWindow = document.createElement("div");
        messageWindow.className = 'messageWindow';
        document.getElementsByClassName('chat__window')[i].appendChild(messageWindow);
        messageWindow.innerHTML = document.getElementById(this.id.toString() + "_textarea").value.toString();
        var chatImage = document.createElement('img');
        if (this.id == 'send__button-id-2') {
            messageWindow.classList.add('userMessageWindow');
            chatImage.src = document.getElementsByClassName('user__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('user__image')[0].getAttribute('alt');
           
	    } else {
	    	chatImage.src = document.getElementsByClassName('admin__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('admin__image')[0].getAttribute('alt');
	    }
	    messageWindow.appendChild(chatImage);
    }

    

}

window.addEventListener('load', randomName);
document.getElementById('send__button-id').addEventListener('click', sendMessage);
document.getElementById('send__button-id-2').addEventListener('click', sendMessage);
