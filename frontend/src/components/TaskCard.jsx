export default function TaskCard({ task, onUpdateStatus, onDelete }) {
  return (
    <div className="bg-slate-100 rounded-lg p-3 mb-3 shadow">

      <h3 className="font-semibold">{task.title}</h3>

      {task.description && (
        <p className="text-sm text-gray-600 mt-1">
          {task.description}
        </p>
      )}

      <div className="flex gap-2 mt-3">

        <button
          onClick={() => onUpdateStatus(task.id, task.status)}
          className="flex-1 text-xs bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"
        >
          Next
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="flex-1 text-xs bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
        >
          Delete
        </button>

      </div>

    </div>
  );
}
