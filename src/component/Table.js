export default function Table({fetchData}){
    console.log(fetchData);
    return(
        <>
        <div className='container'>
      <div className='row'>
      <div className="col-12">
      <table className="table">
      <tbody >
      <tr className="bg-primary">
        <th>Id</th>
        <th>name</th>
        <th>age</th>
        <th>Salary</th>
        </tr>
      </tbody>
      {
          fetchData.map(data=>
          <tbody key={data.id}> 
           <tr>     
                    <td>{data.id}</td>
                    <td>{data.employee_name}</td>
                    <td>{data.employee_age}</td>
                    <td>{data.employee_salary}$</td>  
           </tr>
          </tbody>
             )}
          </table>
      </div>
    </div>
    </div>
    </>
  )
}
