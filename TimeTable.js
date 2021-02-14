//import logo from './logo.svg';
function TimeTable() {

  

  return (

    <div className="TimeTable bg-warning">
     <h1 className="text-center ">Time table</h1>
     <h3 className="text-center">
        <span>2021 </span>
        <span>Month </span>
        <span>Grade</span>
        <span>( </span>
        <span>Tamil</span>
        <span>)</span>
        <span>(</span>
        <span>Medium</span>
        <span>)</span>
         
     </h3>
     <table className="table table-hover border b-5 border-primary">
  <thead>
    <tr>
      <th scope="col">
        <span className="text-primary">Class Subject</span>
        <span className="text-danger">-|-Teacher-|-</span>
        <span className="text-dark"> fees </span>  
    </th>

      <th scope="col">Mon
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>

      <th scope="col">Tue
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>

      <th scope="col">Wed
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>

      <th scope="col">Thurs
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>

      <th scope="col">Fri
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>

      <th scope="col">Sat
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>

      <th scope="col">Sun
      <span className="text-dark"> (</span>
      <span className="text-primary">04</span>
      <span className="text-dark">)</span>
      </th>
     
    </tr>
  </thead>


  <tbody>
    <tr className="table-active">
      <td>
        <span className="text-primary"><b> Maths </b></span>
        <br/>
        <span className="text-danger"><b> MR. Savindu </b></span>
        <br/>
        <span className="text-dark">Rs.</span>
        <span className="text-dark"><b>1000.00</b></span>
        <br/>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

      <td>
      <span className="text-warrning">8</span>
      <span className="text-primary">-</span>
      <span className="text-warrning">10</span>
      <span className="text-warrning"> </span>
      <span className="text-primary">am/pm</span>
      </td>

    </tr>
 
  </tbody>
</table>
    </div>


  ) ;
}

export default TimeTable;
