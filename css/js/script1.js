// Получаем ссылки на кнопку и модальное окно
var btn = document.getElementById("myBtn");
var modal = document.getElementById("myModal");
    
// Получаем ссылку на элемент закрытия модального окна
var closeBtn = document.getElementsByClassName("close")[0];
    
// При клике на кнопку открываем модальное окно
btn.onclick = function() {
modal.style.display = "block";
}
    
// При клике на элемент закрытия закрываем модальное окно
closeBtn.onclick = function() {
modal.style.display = "none";
}
    
// Закрываем модальное окно при клике вне него
window.onclick = function(event) {
if (event.target == modal) {
modal.style.display = "none";
}