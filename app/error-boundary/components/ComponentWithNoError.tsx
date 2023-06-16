export default function ComponentWithNoError({ data }: any) {
  return (
    <div>
      <h1>존재하는 Property에 접근</h1>
      <h3>{data.name}</h3>
    </div>
  )
}
