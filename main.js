function randomName() {
    if (localStorage.getItem('messages') == null) {
        localStorage.setItem('messages', JSON.stringify([]));
    } else {
        var chatsWindows = document.getElementsByClassName('chat__window');
        var messagesArray = JSON.parse(localStorage.getItem('messages'));
        for (var a = 0; a < messagesArray.length; a++) {
               for (let i = 0; i < chatsWindows.length; i++) {
        var messageWindow = document.createElement('div');
        messageWindow.className = 'messageWindow';
        chatsWindows[i].appendChild(messageWindow);
        var messageWindowText = document.createElement('div');
        messageWindowText.className = 'message__window__text';
        messageWindow.appendChild(messageWindowText);
        messageWindowText.innerHTML = messagesArray[a][1];
        var chatImage = document.createElement('img');
        if (messagesArray[a][0] == 'send__button-id-2') {
            messageWindow.classList.add('userMessageWindow');
            chatImage.src = document.getElementsByClassName('user__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('user__image')[0].getAttribute('alt');
        } else {
            chatImage.src = document.getElementsByClassName('admin__image')[0].getAttribute('src');
            chatImage.alt = document.getElementsByClassName('admin__image')[0].getAttribute('alt');
        }
        messageWindow.appendChild(chatImage);
        chatsWindows[i].scrollTop = chatsWindows[i].scrollHeight;
    }

    }
}
}

function sendMessage(e) {
    e.preventDefault();
    if(document.getElementById(this.id.toString() + "_textarea").value.replace(/^\s+|\s+$/g, '') === '') {
        return 0;
    }
    var chatsWindows = document.getElementsByClassName('chat__window');
    var messagesInfo = JSON.parse(localStorage.getItem('messages'));
    messagesInfo.push([this.id.toString(), document.getElementById(this.id.toString() + "_textarea").value]);
    localStorage.setItem('messages', JSON.stringify(messagesInfo));
    for (let i = 0; i < chatsWindows.length; i++) {
        var messageWindow = document.createElement('div');
        messageWindow.className = 'messageWindow';
        chatsWindows[i].appendChild(messageWindow);
        var messageWindowText = document.createElement('div');
        messageWindowText.className = 'message__window__text';
        messageWindow.appendChild(messageWindowText);
        messageWindowText.innerHTML = document.getElementById(this.id.toString() + "_textarea").value;
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
        chatsWindows[i].scrollTop = chatsWindows[i].scrollHeight;
    }
    /*var messageWindows = document.getElementsByClassName('messageWindow');
    var allMesagesHeight;
    for(let i = 0;  i < messageWindows.length + 1; i++) {
        allMesagesHeight = allMesagesHeight messageWindows[i].clientHeight;
        alert(allMesagesHeight);
    }*/
        
}

window.addEventListener('load', randomName);
document.getElementById('send__button-id').addEventListener('click', sendMessage);
document.getElementById('send__button-id-2').addEventListener('click', sendMessage);
