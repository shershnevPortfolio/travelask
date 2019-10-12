function sendMessage(e) {
	e.preventDefault();
	alert(this.id);		
}

document.getElementById('send__button-id').addEventListener('click',sendMessage);
document.getElementById('send__button-id-2').addEventListener('click',sendMessage);
