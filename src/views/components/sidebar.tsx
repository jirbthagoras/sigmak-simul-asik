export const Sidebar = (props: any) => {
  return (
    <aside
      id="logo-sidebar"
      class="fixed top-16 bg-gray-50 md:top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
      aria-label="Sidebar"
    >
      <div class="h-full px-3 py-4 overflow-y-auto border-gray-100 border-r-2 shadow-sm">
        <a href="/" class="flex items-center ps-2.5 mb-5">
          <img
            src="/static/img/cloud.png"
            class="h-6 me-3 max-w-full sm:h-12"
            alt="Cilus Backup Logo"
            loading="lazy"
          />
          <span class="self-center text-xl font-semibold whitespace-nowrap">
            Cilus Backup
          </span>
        </a>
        <ul class="space-y-2 font-medium">
          <li class="my-3 md:my-5 text-center">
            <input
              id="upload-button"
              name="upload-files"
              hx-post="/dashboard/backup"
              hx-encoding="multipart/form-data"
              hx-trigger="change"
              hx-target="table tbody"
              hx-swap="afterbegin"
              type="file"
              accept="image/*,video/*,audio/*,application/zip,.pdf,.txt"
              multiple="true"
              hidden
            />
            <label
              for="upload-button"
              class="border-2 rounded-lg border-gray-100 shadow flex justify-center items-center p-4 text-lg text-gray-900 hover:bg-gray-100"
            >
              <svg
                class="w-7 h-7 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                />
              </svg>
              <span class="ms-3">Upload</span>
            </label>
          </li>

          <li>
            <a
              href="/dashboard"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                class="w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 21"
              >
                <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
              </svg>
              <span class="ms-3">Dashboard</span>
            </a>
          </li>

          <li>
            <a
              href="/"
              class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100"
            >
              <svg
                viewBox="0 0 24 24"
                class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7957 13 12 13C11.2044 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L4 10Z"></path>
                <path
                  d="M3.99999 10L12 3L20 10L20 20H15V16C15 15.2044 14.6839 14.4413 14.1213 13.8787C13.5587 13.3161 12.7956 13 12 13C11.2043 13 10.4413 13.3161 9.87868 13.8787C9.31607 14.4413 9 15.2043 9 16V20H4L3.99999 10Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>

              <span class="flex-1 ms-3 whitespace-nowrap">Home</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
