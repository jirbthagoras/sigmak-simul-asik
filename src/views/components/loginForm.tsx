export const LoginForm = async () => {
  return (
    <form
      id="login-form"
      class="space-y-6"
      hx-post="/auth/login"
      hx-target="#login-page"
      hx-target-error="#alert-message-container"
      hx-swap="innerHTML"
    >
      <div>
        <label
          for="email"
          class="block text-sm font-medium leading-6 text-gray-900"
        >
          Email
        </label>
        <div class="mt-2">
          <input
            id="email"
            name="email"
            type="text"
            autocomplete="on"
            required
            class="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label
            for=""
            class="block text-sm font-medium leading-6 text-gray-900"
          >
            Password
          </label>
        </div>
        <div class="mt-2 relative" x-data="{show:true}">
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="on"
            required
            placeholder=""
            class="p-2 pr-10 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
          <div class="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
            <button
              id="show-password"
              type="button"
              class="text-gray-700 focus:outline-none"
            >
              <svg
                x-show="show"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 hidden"
              >
                <path
                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <circle
                  cx="12"
                  cy="12"
                  r="3"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <svg
                x-show="!show"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6"
              >
                <path
                  d="M2 2L22 22"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <button
        type="submit"
        class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Login
      </button>
    </form>
  )
}
