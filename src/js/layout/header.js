export function header() {
  const htmlHeader = document.createElement("header");
  htmlHeader.innerHTML = `
  <header class="p-2 shadow-lg">
  <div
    class="container mx-auto mx-auto flex items-center justify-between space-x-4"
  >
    <a href="#" class="text-2xl font-bold font-body">Biddl.</a>
    <nav class="flex flex-col sm:flex-row gap-2">
      <ul class="flex flex-col sm:flex-row gap-2">
        <li><a href="#">Home</a></li>
        <li><a href="#">Listings</a></li>
        <li><a href="#">Profile</a></li>
      </ul>
    </nav>

    <div>
      <button
        type="button"
        class="bg-brand-light p-2 px-4 rounded-2xl hover:bg-brand-color"
        id="login_btn"
      >
        Login
      </button>
      <button
        type="button"
        class="bg-brand-light p-2 px-4 rounded-2xl hover:bg-brand-color"
        id="register_btn"
      >
        Register
      </button>
      <button
        type="button"
        class="text-white bg-brand-dark p-2 px-4 rounded-2xl"
        id="logout_btn"
      >
        Logout
      </button>
    </div>
  </div>
</header>
  `;
  return htmlHeader;
}
