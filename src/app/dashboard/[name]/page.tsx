type PageProps = {
  params: Promise<{
    name: string
  }>
}

export default async function Page({ params }: PageProps) {
  const { name } = await params

  return (
    <div className="flex h-screen items-center justify-center">
      <h1 className="text-4xl font-bold">
        Hello {name}
      </h1>
    </div>
  )
}