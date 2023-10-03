export function History() {
  return (
    <div className=" flex-1 p-14 flex flex-col">
      <h1 className=" text-2xl text-cinza-100">Meu histórico</h1>

      <div>
        <table className=" flex-1 overflow-auto mt-8 w-full border-collapse min-w-[600px]">
          <thead className=" bg-cinza-600">
            <tr>
              <th className=" p-4 text-left text-cinza-100 text-sm rounded-tl-lg">
                Tarefa
              </th>
              <th className=" p-4 text-left text-cinza-100 text-sm ">
                Duração
              </th>
              <th className=" p-4 text-left text-cinza-100 text-sm ">Inicio</th>
              <th className=" p-4 text-left text-cinza-100 text-sm rounded-tr-lg">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-cinza-700 rounded-t-md border-cinza-800 text-sm">
              <td className="p-4 text-left">Tarefa</td>
              <td className="p-4 text-left">20 minutos</td>
              <td className="p-4 text-left">Ha 2 meses</td>
              <td className="p-4 text-left">Concluído</td>
            </tr>
            <tr className=" bg-cinza-700 rounded-t-md border-cinza-800 p-4 text-sm">
              <td className="p-4 text-left">Tarefa</td>
              <td className="p-4 text-left">20 minutos</td>
              <td className="p-4 text-left">Ha 2 meses</td>
              <td className="p-4 text-left">Concluído</td>
            </tr>
            <tr className=" bg-cinza-700 rounded-t-md border-cinza-800 p-4 text-sm">
              <td className="p-4 text-left">Tarefa</td>
              <td className="p-4 text-left">20 minutos</td>
              <td className="p-4 text-left">Ha 2 meses</td>
              <td className="p-4 text-left">Concluído</td>
            </tr>
            <tr className=" bg-cinza-700 rounded-t-md border-cinza-800 p-4 text-sm">
              <td className="p-4 text-left">Tarefa</td>
              <td className="p-4 text-left">20 minutos</td>
              <td className="p-4 text-left">Ha 2 meses</td>
              <td className="p-4 text-left">Concluído</td>
            </tr>
            <tr className=" bg-cinza-700 rounded-t-md border-cinza-800 p-4 text-sm">
              <td className="p-4 text-left">Tarefa</td>
              <td className="p-4 text-left">20 minutos</td>
              <td className="p-4 text-left">Ha 2 meses</td>
              <td className="p-4 text-left">Concluído</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
