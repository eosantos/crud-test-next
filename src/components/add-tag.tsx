'use client'

import { FormEvent, useState } from "react"

export function AddTag() {
  const [ slug, setSlug ] = useState('')

  async function handleCreateTag(event: FormEvent) {
    event.preventDefault()

    if (!slug) {
      return
    }

    await fetch('http://localhost:3333/tags', {
      method: 'POST',
      body: JSON.stringify({
        slug
      })
    })
  }

  return (
    <form onSubmit={handleCreateTag}>
      <input type="text" name="slug" placeholder="Slug da tag" value={slug} onChange={e => setSlug(e.target.value)}/>
      <button type="submit">Criar tag</button>
    </form>
  )
}