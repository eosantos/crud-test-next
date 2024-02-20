export async function Tags() {
  const response = await fetch('http://localhost:3333/tags')
  const data = await response.json()
  console.log(data)

  return (
    <ul>
      {data.map((item: any) => <li key={item.id}>{item.slug}</li>)}
    </ul>
  )
}