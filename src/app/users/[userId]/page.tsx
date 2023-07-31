export default function User({ params }: { params: { userId: string } }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>User/{params.userId}</h2>
    </main>
  );
}
