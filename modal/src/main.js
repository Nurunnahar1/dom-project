const modal_btn = document.getElementById('modal_btn');
const modal = document.getElementById('modal');
const close_modal = document.getElementById("close_modal");

modal_btn.onclick = (e) => {
    modal.style.opacity = 1;
    modal.style.pointerEvents = "auto";
}
close_modal.onclick = (e) => {
    modal.style.opacity = 0;
     modal.style.pointerEvents = "none";
}