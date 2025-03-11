import { SignupForm } from "../components/signupForm"
import { Html } from "../templates/htmlTemplate"

export default (_props: any) => {
  return (
    <Html title="Register | Backup Storage">
      <div
        hx-ext="response-targets"
        class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div id="register-page" class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create an account
          </h2>
        </div>

        <div
          id="alert-message-container"
          class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
        >
          <div
            id="warn-register"
            class="hidden items-center p-4 mb-4 text-sm text-yellow-800 rounded-lg bg-yellow-50"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span class="sr-only">warn</span>
            <div></div>
          </div>
        </div>

        <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <SignupForm />

          <p class="mt-10 text-center text-sm text-gray-500">
            Have an account?
            <button
              hx-get="/login"
              hx-target="body"
              hx-swap="innerHTML"
              hx-replace-url="true"
              hx-history="true"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </Html>
  )
}
