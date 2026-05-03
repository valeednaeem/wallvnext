import React from 'react'

async function page({ params } : { params: { name: string } }) {
  const name = params.name;
  return (
    <>
        <div className="flex flex-col flex-1 items-center justify-center font-sans dark:bg-black">
              <h1>Hello, {name}!</h1>
        </div>
    </>
  )
}

export default page