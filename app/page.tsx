import TasksList from "@/components/tasks-list/tasks-list";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="container">
        <TasksList />
      </div>
    </div>
  );
}
