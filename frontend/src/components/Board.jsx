import TaskCard from "./TaskCard";

export default function Board({ tasks, onUpdateStatus, onDelete }) {

  const todoTasks = tasks.filter(task => task.status === "TODO");
  const inProgressTasks = tasks.filter(task => task.status === "IN_PROGRESS");
  const doneTasks = tasks.filter(task => task.status === "DONE");

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">

      <TaskColumn
        title="To Do"
        tasks={todoTasks}
        onUpdateStatus={onUpdateStatus}
        onDelete={onDelete}
      />

      <TaskColumn
        title="In Progress"
        tasks={inProgressTasks}
        onUpdateStatus={onUpdateStatus}
        onDelete={onDelete}
      />

      <TaskColumn
        title="Done"
        tasks={doneTasks}
        onUpdateStatus={onUpdateStatus}
        onDelete={onDelete}
      />

    </div>
  );
}

function TaskColumn({ title, tasks, onUpdateStatus, onDelete }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 min-h-100">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>

      {tasks.length === 0 ? (
        <p className="text-gray-400 text-sm">No tasks here</p>
      ) : (
        tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onUpdateStatus={onUpdateStatus}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
