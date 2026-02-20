export default function TaskCard({ task, onUpdateStatus, onDelete }) {
  return (
    <div className="bg-slate-100 rounded-lg p-3 mb-3 shadow-sm">

      <h3 className="font-semibold">{task.title}</h3>

      {task.description && (
        <p className="text-sm text-gray-600 mt-1">
          {task.description}
        </p>
      )}

      <div className="flex justify-between items-center mt-3">

        <button
          onClick={() => onUpdateStatus(task.id, task.status)}
          className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
        >
          Next
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>

      </div>
    </div>
  );
}
