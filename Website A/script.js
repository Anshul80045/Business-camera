const sidebar = document.getElementById("sidebar");
const openBtn = document.getElementById("openSidebar");
const closeBtn = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
});
console.log("Banner Loaded Successfully");

document.getElementById("searchIcon").addEventListener("click", goToProducts);

document.getElementById("searchInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        goToProducts();
    }
});

function goToProducts() {
    let keyword = document.getElementById("searchInput").value.trim();

    if(keyword === ""){
        alert("Please type something!");
        return;
    }

    window.location.href = "products.html?search=" + encodeURIComponent(keyword);
}
