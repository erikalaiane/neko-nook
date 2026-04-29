export default function BlobBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
      <span className="absolute w-[500px] h-[500px] rounded-full blur-[80px] opacity-35 bg-rose animate-drift-1 -top-32 -left-24" />
      <span className="absolute w-[400px] h-[400px] rounded-full blur-[80px] opacity-35 bg-lavender animate-drift-2 top-[40%] -right-20" />
      <span className="absolute w-[350px] h-[350px] rounded-full blur-[80px] opacity-35 bg-mint animate-drift-3 bottom-[10%] left-[20%]" />
      <span className="absolute w-[300px] h-[300px] rounded-full blur-[80px] opacity-35 bg-peach animate-drift-4 top-[60%] left-[50%]" />
    </div>
  )
}
