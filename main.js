const selects = document.querySelectorAll(".filter"); 

function select_filter(e) {
    const chosen_state = document.querySelector("#states").value; 
    const chosen_status = document.querySelector("#statuses").value;
    const currently_visible = document.querySelectorAll(".item.active"); 
    const make_visible = document.querySelectorAll(`.item.${chosen_state}.${chosen_status}`); 
    

    currently_visible.forEach(function (lawsuits) {
        lawsuits.classList.remove("active"); 
    });

    make_visible.forEach(function (lawsuits) {
        lawsuits.classList.add("active");   
    });

}

selects.forEach(function(select){
    select.addEventListener("change", select_filter);
})
