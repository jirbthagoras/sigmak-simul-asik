export const Navbar = (props: any) => {
  return (
    <div class="z-10 relative flex h-16 border-b-2 shadow-sm border-gray-100 items-center justify-between">
      <button
        data-drawer-target="logo-sidebar"
        data-drawer-toggle="logo-sidebar"
        aria-expanded="false"
        aria-controls="logo-sidebar"
        id="menu"
        type="button"
        class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <div class="inset-y-0 right-0 pr-2 sm:mr-6 flex flex-1 justify-end sm:items-stretch sm:justify-end sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div class="relative ml-3">
          <div>
            <button
              type="button"
              class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              id="user-menu-button"
              aria-expanded="false"
              aria-haspopup="true"
              aria-controls="user-menu"
            >
              <span class="absolute -inset-1.5"></span>
              <span class="sr-only">Open user menu</span>
              <img
                class="h-10 w-10 rounded-full"
                src="/static/img/user.png"
                alt="user"
                loading="lazy"
              />
            </button>
          </div>

          <div
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="user-menu-button"
            id="user-menu"
            tabindex="-1"
            class="absolute right-0 z-50  mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none hidden"
          >
            <a
              href="#"
              class="block px-4 py-2 my-3 mx-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
              role="menuitem"
              tabindex="-1"
              id="user-menu-item-0"
            >
              Your Profile
            </a>
            <a
              hx-post="/auth/logout"
              hx-target="body"
              hx-swap="innerHTML"
              hx-history="false"
              hx-replace-url="/login"
              class="block px-4 py-2 my-3 mx-2 text-sm text-gray-700 rounded-lg hover:bg-gray-100 cursor-pointer"
              role="menuitem"
              tabindex="-1"
              id="signout-button"
            >
              Sign out
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
