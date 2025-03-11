export const EmptyFolder = () => {
  return (
    <div
      id="empty-file"
      class="hidden items-center justify-center my-5 md:my-10 mx-auto text-center"
    >
      <div>
        <img
          src="/static/img/empty-folder.png"
          alt="empty folder"
          loading="lazy"
        />
        <h3 class="font-medium text-gray-800 text-lg md:text-xl">
          File empty.
        </h3>
      </div>
    </div>
  )
}
