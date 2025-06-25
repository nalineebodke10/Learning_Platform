
fetch("admin_Sidebar.html")
  .then(res => res.text())
  .then(data => {
    const closeBtn = `
      <div class="text-end p-2 bg-success d-lg-none">
        <button class="btn btn-sm" onclick="hideSidebar()">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `;

    // First the button, then the sidebar HTML
    document.getElementById("Ad_Sidebar").innerHTML = closeBtn + data;
  });

function toggleSidebarAd() {
  const sidebar = document.getElementById("Ad_Sidebar");
  sidebar.classList.remove("d-none");
}
function hideSidebar() {
  const sidebar = document.getElementById("Ad_Sidebar");
  sidebar.classList.add("d-none");
}

fetch("admin_Sidebar.html")
  .then(res => res.text())
  .then(data => {
    const closeBtn = `
      <div class="text-end p-2 d-lg-none">
        <button class="btn  btn-sm" onclick="hideSidebar()">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `;

    // Insert closeBtn just after opening <nav> tag
    const updatedSidebar = data.replace(
      /<nav([^>]*)>/i,
      `<nav $1>${closeBtn}`
    );

    document.getElementById("Ad_Sidebar").innerHTML = updatedSidebar;
  });



