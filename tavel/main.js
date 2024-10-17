function getDays(when) {
    const now = new Date();
    const diff = when.getTime() - now.getTime()
    const days = diff / msPerday 
    return now.getTime() + " days ";
}
document.addEventListener("DOMContentLoaded", () => {
    document.body.style = "color: red; background-color: yellow";

    submitDate.addEventListener("click", () => {
        const when = new Date(travelDate.value);
        daysMessage.innerText = getDays(when);

    });
});

