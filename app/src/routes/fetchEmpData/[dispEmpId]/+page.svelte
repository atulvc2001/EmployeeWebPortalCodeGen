<script>
    import img from '$lib/images/person.png'
    export let data;
    // console.log(data)
    // const title = data.title;
    const {[0]:empData} = data.singleEmpData
    const gdrivephotolink = empData['Upload your passport size photo (.jpeg or .png)']
    const idRegex = /(?:\/d\/|id=|\/uc\?id=)([\w-]+)/;
    const match = gdrivephotolink.match(idRegex);
    var fileId;
    var photo;
    if (match) {
      fileId = match[1];
      // console.log("File ID:", fileId.trim());
      photo = 'https://drive.google.com/uc?id='+fileId;
    } else {
      console.error("Invalid Google Drive link");
      photo = img;
      }
    // console.log(empData)
    const empId = data.dispEmpId
    // const dynamicImgUrl = `../../../../static/assets/emp${empId}`
</script>



<body>
    
    <!-- <h1>empData working</h1> -->
    <!-- <h1>{empData.Name}</h1>   -->
    <h4 style="text-align:center">Club Meridian Member Details</h4>
    
    <div class="card">
      <!-- <div class="photo-box"><img class="profile-pic" src={photo} alt=""></div> -->
      <div class="photo-box"><img class="profile-pic" src={photo} alt=""></div>
      <h1><span class="h-clr">{empData["Name"]}</span></h1>
      <p class="title">Dob: {empData["DOB"]}</p>
      <h2>{empData["What is your spouse's name? ( Type \"Unmarried\" if you have not married )"]}</h2>
      <p class="discri">(Spouse)</p>
      <p class="title">Dob: {empData["What is your spouse's date of birth"]}</p>
      <p class="title">Anny: {empData["When is your wedding anniversary?"]}</p> 
      <h4>Address:</h4> 
      <p class="discri discri-box">{empData["Address"]}</p>

      <h4>Phone No and Email ID:</h4> 
      <p class="discri">{empData["Contact No"]}<br></p><p><a href={empData["Email"]} target="_newtab" class="txt-01">{empData["Email"]}</a><br>
    
      </p><div class="border-b"></div>
    
    <style src=""></style>
    
    </div>
</body>

<style>
    .card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 800px;
  margin: auto;
  text-align: center;
  font-family: arial;
	padding: 8px;
}

.discri-box{
  width:80%;
  margin:0 auto;
}

.title {
  color: grey;
  font-size: 18px;
}
.discri {
  color: grey;
  font-size: 1.2em;
  }
	.txt-01{
		font-size: 1em;
	}
	.border-b{
		border-bottom: 8px solid #673052;
	}

  /* .photo-box{
    width:193px;
    height:239px;
		border: 8px solid #ccb8c4;
    border-radius: 20px;
  } */

	.profile-pic {
		border: 8px solid #ccb8c4;
		border-radius: 20px;
		/* background-image: url("../../../../static/assets/emp1.jpg"); */
		height: 100%; 
		background-repeat: no-repeat;
		margin: auto;
    width: 25%;
    margin-top:30px;
	}
	.h-clr{
		color: #673052;
	}

  /* .img {
    z-index: -1;
  } */

/* button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
} */

a {
  text-decoration: none;
  font-size: 22px;
  color: black;
}

/* button:hover, a:hover {
  opacity: 0.7;
}@charset "UTF-8"; */
/* CSS Document */


</style>