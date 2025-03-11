interface RowTableProps {
  name: string
  lastModified: string
  fileSize: string
}

export const RowTable = (props: RowTableProps) => {
  return (
    <tr class="bg-white border-b md:w-1/2">
      <th
        scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {props.name}
      </th>
      <td class="px-6 py-4">{props.lastModified}</td>
      <td class="px-6 py-4">{props.fileSize}</td>
      <td class="flex items-center px-6 py-4 text-right">
        <a
          href={`/dashboard/backup?name=${props.name}`}
          target="_blank"
          class="font-medium text-blue-600 hover:underline"
          download="true"
        >
          Download
        </a>
        <button
          hx-delete={`/dashboard/backup/${props.name}`}
          hx-swap="delete swap:0.5s"
          hx-confirm="Are you sure want to delete?"
          hx-target="closest tr"
          class="font-medium text-red-600 hover:underline ms-4"
        >
          Remove
        </button>
      </td>
    </tr>
  )
}
