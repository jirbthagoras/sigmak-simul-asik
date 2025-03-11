import { Html } from "../templates/htmlTemplate"

export default () => {
  return (
    <Html title="Backup Storage">
      <div class="grid place-items-center place-content-center min-h-screen">
        <h1 class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl ">
          ☁️ 💾 Cilus Backup Solution
        </h1>

        <p class="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 ">
          Cilus Backup is a cloud storage solution that allows you to store your
          files securely and easily.
        </p>

        <a
          href="/register"
          class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 "
        >
          Getting started
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </Html>
  )
}
