var mysql = require('mysql');// import mysql libraries
//import  mysql from "mysql";


// declare connection variabl
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactmysqldatabase"
  });
//registerdatasave

//upcomming class change function
export function registeruserFun() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO registertable (username,passsword,comfrimpassword) VALUES (?,?,?) ";
    var values = [];//values assign
    
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
      alert("inserted");
    });
  });
}

//site photo change function
function photochange(array) {

  var mysql = require('mysql');// import mysql libraries
//import  mysql from "mysql";
// declare connection variabl
    var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "reactmysqldatabase"
  });
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO websiteimagetable (homepagecarasalimg1, homepagecarasalimg2, homepagecarasalimg3, startjurneyimg,aboutuspageimg) VALUES ? ";
    
    var values = [];// values assign
    values = array;

    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
 
//material details change function
function materialchange() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO materialtable (grade, subject, title, description,img,id) VALUES ? ";
    var values = [];//values assign
    
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
 
//upcomming class change function
function upcommingclasschange() {
  con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO upcommingtable (id, type, grade, subject,teachername,date,time,description,img) VALUES ? ";
    var values = [];//values assign
    
    con.query(sql, values, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });
}
 
//update details
function updatephotos() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE websiteimagetable SET homepagecarasalimg1 = '', homepagecarasalimg2 = '', homepagecarasalimg3 = '', startjurneyimg = '',aboutuspageimg = '',id = '' WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//update details
function updatematerials() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE materialtable SET grade = '', subject = '', title = '', description = '',img = '',id = '' WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//update details
function updateupcommingclasschange() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "UPDATE upcommingtable SET id, type, grade, subject,teachername,date,time,description,img WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//delete details
function deletephotos() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM websiteimagetable  WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//delete details
function deletematerials() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM materialtable  WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//delete details
function deleteupcommingclasschange() {
  con.connect(function (err) {
    if (err) throw err;
    var sql = "DELETE FROM upcommingtable  WHERE id = '345'";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log(result.affectedRows + " record(s) updated");
    });
  });
}

//SELECT details
function viewphotos() {
  con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM websiteimagetable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}

//SELECT details
function viewmaterials() {
 con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM materialtable", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}

//SELECT details
function viewupcommingclasschange() {
  con.connect(function(err) {
  if (err) throw err;
  //Select all customers and return the result object:
  con.query("SELECT * FROM upcommingtable ", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});
}
        

//get file 
  const carosalone = (e) => {
    setVal({
      ...val,
      carosalone: e.target.files[0]
    });

    console.log(e);
    console.log(e.target);
    console.log(e.target.files);
    console.log(e.target.files[0]);
  }
 
  const uploadfile = (e) => {
    const fd = new FormData();
    //append(string file type, blob or string value, file name)
    //  fd.append(e.target.files[0].type,e.target.files[0], e.target.files[0].name);
    fd.append("Image", val.carosalone, val.carosalone.name);
   
    //'gs://react-5ba2b.appspot.com/Floder1'
    axios.post('./folderimg', fd)
      .then((response) => {
        // console.log(response);
        alert('Registered Successfull.');
        console.log(response);
      });
  }
  //upload file method two FileReader() 
  const uploadfiletwo = (e) => {
    //let files = e.target.files;
    let reader = new FileReader();
    reader.readeAsDataURL(e.target.files[0]);
     
    reader.onload = (e) => {
      console.log("img data", e.target.result);
      const url = '/folderimg';
      const formData = { file: e.target.result }

      axios.post(url, formData)
        .then(response => console.log(response));
    }
  } 
 // audio/image/video data fileupload method three that method work correctly
  /**  const [val, setVal] = useState({profileImg:null});  */
 const filesreadHandler = (e) => {
    const reader = new FileReader();//using file reader
          reader.onload = () =>{
         if (reader.readyState === 2) {
        //assign values to the variable useState
           setVal({ ...val, profileImg: reader.result });
          console.log(reader.result);
        }
    }
   reader.readAsDataURL(e.target.files[0]);
  // console.log(reader.readAsDataURL(e.target.files[0]));
   
   /** Copy to Html if you slected file is audio/vidio/image  out put read it
 *       <form className="form-signin" onSubmit={onsubmitpreventrefresh}>
        <div className="text-center " style={{width:'100%', height:''}}>
				     <img src={val.profileImg} alt="" id="img" className="img" style={{ width: '150px', height: '150px' }} />
             <br/> <audio controls src={val.profileImg} type="audio/mp3" />
             <br/> <video width="320" height="240" controls src={val.profileImg} type="video/mp4" />
             <br/> <input onChange={filesreadHandler} type="file" accept="audio/*,video/*,image/*" name="image-upload" id="input"  />
        </div>
        </form>
 **/