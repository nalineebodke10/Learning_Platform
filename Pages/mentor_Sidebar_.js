
    // Load sidebar for desktop
    fetch("mentor_Sidebar.html")
      .then(res => res.text())
      .then(data => {
        const closeBtn = `
      <div class="text-end p-2 bg-success d-md-none">
        <button class="btn btn-light btn-sm" onclick="hideSidebar()">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `;

        // First the button, then the sidebar HTML
        document.getElementById("mentor_Sidebar").innerHTML = closeBtn + data;
      });

    function toggleSidebar() {
      const sidebar = document.getElementById("mentor_Sidebar");
      sidebar.classList.remove("d-none");
    }
    function hideSidebar() {
      const sidebar = document.getElementById("mentor_Sidebar");
      sidebar.classList.add("d-none");
    }
    fetch("mentor_Sidebar.html")
      .then(res => res.text())
      .then(data => {
        const closeBtn = `
      <div class="text-end p-2 d-md-none">
        <button class="btn btn-light btn-sm" onclick="hideSidebar()">
          <i class="bi bi-x-lg"></i>
        </button>
      </div>
    `;

        // Insert closeBtn just after opening <nav> tag
       const updatedSidebar = data.replace(
          /<nav([^>]*)>/i,
          `<nav $1>${closeBtn}`
        );

        document.getElementById("mentor_Sidebar").innerHTML = updatedSidebar;
      });
