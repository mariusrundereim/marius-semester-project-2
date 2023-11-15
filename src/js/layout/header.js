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
        <button
          type="button"
          class="bg-gray-200 p-2 px-4 rounded-2xl hover:bg-red-400"
        >
          Login
        </button>
      </div>
    </header>
  `;
  return htmlHeader;
}
