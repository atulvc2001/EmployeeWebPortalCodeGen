<script>
    export let data;
    // console.log(data)
    const title = data.title;
    const empData = data.empData
    const empId = data.dispEmpId
    // const dynamicImgUrl = `../../../../static/assets/emp${empId}`
</script>n



<body>
    
    <h1>{title}</h1>
    <h4 style="text-align:center">Member Profile</h4>
    
    <div class="card">
      <div class="profile-pic"><img src="../../../../public/images/emp1.jpg" alt="ceo"></div>
      <h1><span class="h-clr">{empData["Name"]}</span></h1>
      <p class="title">Dob: {empData["Date Of Birth"]}</p>
      <h2>{empData["What is your spouse's name?"]}</h2>
      <p class="discri">(Spouse)</p>
      <p class="title">Dob: {empData["When is your wedding anniversary?"]}</p>
      <h4>Address:</h4>
      <p class="discri">{empData["Address"]}</p>
      <!-- <p class="discri">UVA VILLA<br>
    Prafulla Enclave<br>
    Halady Road<br>
    Koteshwar-576222<br>
    Kundapur<br>
    Udupi, Karnataka</p> -->
    <h4>Phone No and Email ID:</h4>
      <p class="discri">{empData["Phone number"]}<br>
      </p><p><a href="mailto:ashwamed@gmail.com" target="_newtab" class="txt-01">{empData["Email"]}</a><br>
    
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

.title {
  color: grey;
  font-size: 18px;
}
.discri {
  color: grey;
  font-size: 18px;
  }
	.txt-01{
		font-size: 1em;
	}
	.border-b{
		border-bottom: 8px solid #673052;
	}
	.profile-pic {
		border: 8px solid #ccb8c4;
		border-radius: 40px;
		background-image: url("../../../../static/assets/emp1.jpg");
		height: 262px; width: 200px;
		background-repeat: no-repeat;
		margin: auto;
        width: 25%;
	}
	.h-clr{
		color: #673052;
	}

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