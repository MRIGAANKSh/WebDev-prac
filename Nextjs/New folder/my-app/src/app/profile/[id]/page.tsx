export default function UserProfile({ params }: { params: { id: string } }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-6 px-4 ">
      <div className=" p-8 rounded-xl shadow-md max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">User Profile</h1>
        <p className="text-lg mb-2 text-gray-700">Dynamic route for user:</p>
        <span className="inline-block p-2 rounded bg-orange-500 text-white text-sm font-mono">
          {params.id}
        </span>
      </div>
    </div>
  );
}
