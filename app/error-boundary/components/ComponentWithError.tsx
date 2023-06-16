export default function ComponentWithError({ data }: any) {
  return (
    <div>
      <h1>런타임 에러 발생</h1>
      {/* Runtime Error 발생 */}
      <h3>{noExistData.full_name}</h3>
      <h3>{data.full_name}</h3>
    </div>
  )
}
