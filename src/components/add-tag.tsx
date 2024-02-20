import { revalidateTag } from "next/cache"

export function AddTag() {
  async function handleCreateTag(form: FormData) {
    'use server'

    const slug = form.get('slug')

    if (!slug) {
      return
    }

    //delay 3s
    await new Promise(resolve => setTimeout(resolve, 3000))

    await fetch('http://localhost:3333/tags', {
      method: 'POST',
      body: JSON.stringify({
        slug,
      })
    })

    revalidateTag('add-tag')
  }

  return (
    <form action={handleCreateTag} method="POST">
      <input type="text" name="slug" placeholder="Slug da tag"/>
      <button type="submit">Criar tag</button>
    </form>
  )
}