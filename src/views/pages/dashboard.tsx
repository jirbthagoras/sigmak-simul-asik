import { IFileMetadata } from "../../types/fileMetadata"
import { EmptyFolder } from "../components/emptyFolder"
import { Navbar } from "../components/navbar"
import { Sidebar } from "../components/sidebar"
import { Table } from "../components/table"
import { Html } from "../templates/htmlTemplate"

export interface DashboardProps {
  files: Omit<IFileMetadata[], "path">
}

export default (props: DashboardProps) => {
  return (
    <Html title="Backup Storage">
      <div class="sm:ml-64">
        <Navbar />

        <div>
          <EmptyFolder />
          <Table files={props.files} />
        </div>
      </div>

      <Sidebar />
    </Html>
  )
}
