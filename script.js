//your JS code here. If required.
const inputField = document.getElementbyId("fname");
 inputField.addEventListener('blur',()=>{
	 inputField.value = inputField.value.toUpperCase();
 });
