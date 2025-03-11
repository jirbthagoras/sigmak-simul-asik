import { IFileMetadata } from "../../types/fileMetadata"
import { fileSizeToString, timeToString } from "../../utils/formatter"
import { RowTable } from "../components/rowTable"

type fileMetadata = Omit<IFileMetadata, "path">

export const Table = async (props: { files: fileMetadata[] }) => {
  return (
    <div
      id="files-table"
      class="relative p-5 md:px-10 overflow-x-auto shadow sm:rounded-md border-gray-100"
    >
      <table class="table-auto w-full text-sm text-left shadow-md border-2 sm:rounded-lg rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" class="px-6 py-3 md:w-1/2">
              <div class="flex items-center">
                <input
                  id="filterby-name"
                  name="filterby-name"
                  type="checkbox"
                  class="hidden cursor-pointer"
                  hx-get="/dashboard/data"
                  hx-trigger="click"
                  hx-vals="js:{'filterby': 'name', 'sort': checkInput('filterby-name')}"
                  hx-target="table tbody"
                  hx-swap="innerHTML"
                />
                <label
                  for="filterby-name"
                  class="flex justify-start items-center cursor-pointer"
                >
                  Name
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </label>
              </div>
            </th>

            <th scope="col" class="px-6 py-3 md:w-1/4">
              <div class="flex items-center">
                <input
                  id="filterby-date"
                  name="filterby-date"
                  type="checkbox"
                  class="hidden cursor-pointer"
                  hx-get="/dashboard/data"
                  hx-trigger="click"
                  hx-vals="js:{'filterby': 'date', 'sort': checkInput('filterby-date')}"
                  hx-target="table tbody"
                  hx-swap="innerHTML"
                />
                <label
                  for="filterby-date"
                  class="flex justify-start items-center cursor-pointer"
                >
                  Last modified
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </label>
              </div>
            </th>

            <th scope="col" class="px-6 py-3 md:w-1/4">
              <div class="flex items-center">
                <input
                  id="filterby-size"
                  name="filterby-size"
                  type="checkbox"
                  class="hidden cursor-pointer"
                  hx-get="/dashboard/data"
                  hx-trigger="click"
                  hx-vals="js:{'filterby': 'size', 'sort': checkInput('filterby-size')}"
                  hx-target="table tbody"
                  hx-swap="innerHTML"
                />
                <label
                  for="filterby-size"
                  class="flex justify-start items-center cursor-pointer"
                >
                  File size
                  <svg
                    class="w-3 h-3 ms-1.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                  </svg>
                </label>
              </div>
            </th>

            <th scope="col" class="px-6 py-3">
              <span class="sr-only">Download</span>
              <span class="sr-only">Remove</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {props.files.map((file) => {
            return (
              <RowTable
                name={file.name}
                lastModified={timeToString(file.lastModified)}
                fileSize={fileSizeToString(file.size)}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
