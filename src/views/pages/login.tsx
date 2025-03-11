import { LoginForm } from "../components/loginForm"
import { Html } from "../templates/htmlTemplate"

export default () => {
  return (
    <Html title="Login | Backup Storage">
      <div
        hx-ext="response-targets"
        class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8"
      >
        <div id="login-page" class="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div
          id="alert-message-container"
          class="mt-5 sm:mx-auto sm:w-full sm:max-w-sm"
        ></div>

        <div class="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <LoginForm />

          <p class="mt-10 text-center text-sm text-gray-500">
            Don't have an account?
            <button
              hx-get="/register"
              hx-target="body"
              hx-swap="innerHTML"
              hx-replace-url="true"
              hx-history="true"
              class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 cursor-pointer"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </Html>
  )
}
