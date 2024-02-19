<script>
	import { onMount } from "svelte"
	export let data;
	const { dispEmpId } = data
	const URLslug = `https://clubmembership.uvameridian.com/fetchMemberData/${dispEmpId}` 
	console.log(URLslug)
	import lion from '$lib/images/lion.jpg';
	let showImage = false
	// The client side solution would only work if the requested image is NOT blocked by CORS policy.


	// function to download image and append image to the div block
	async function download(url,qrformats) {
		const a = document.createElement('a');
		const img = document.createElement("img")
		a.href = await toDataURL(url);	
		console.log(a)

		// To display image 
		img.src = await toDataURL(url)
		const divBlock = document.getElementsByClassName("image")[0]
		if(divBlock.getElementsByTagName('img')[0]){
			divBlock.removeChild(img)
		} else {
			// appending image if the child img tag doesn't exist
			divBlock.appendChild(img)
			const show_img = document.getElementsByClassName("img__container")[0]
			show_img.classList.add("show__img")
		}



		// download image section
		a.download = `myImage.${qrformats}`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

	// converting the api data to image with blob
	function toDataURL(url) {
		return fetch(url)
			.then((response) => {
				return response.blob();
			})
			.then((blob) => {
				return URL.createObjectURL(blob);
			});
	}

	async function handlesubmit(e) {

		const { qrformats } = Object.fromEntries(new FormData(e.target).entries());

		console.log(qrformats);

		let a = document.createElement('a');
		a.href = lion;
		a.setAttribute('download', 'qrCodeImage');
		download(
			`https://api.qrserver.com/v1/create-qr-code/?data=${URLslug}&amp;size=600x600&format=${qrformats}`,qrformats
		);
		
	onMount(() => {
		showImage = true;
	})

	}

</script>

<body>
	<div class="container">
		<div class="container__text">
			<form on:submit={handlesubmit} action="">
				<h1>Download QR Code</h1>
				<select name="qrformats" id="qrformat">
					<option value="png">png</option>
					<option value="jpeg">jpeg</option>
					<option value="eps">eps</option>
				</select>
				<button>Display Image</button>
			</form>
		</div>
		<div class="img__container" class:show__img={showImage} >
			<div class="image"></div>
		</div>
	</div>

</body>

<style>
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	body{
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		border: 5px solid;
		padding: 30px;
	}
	
	.show__img {
		margin-top: 30px;
	}
</style>
