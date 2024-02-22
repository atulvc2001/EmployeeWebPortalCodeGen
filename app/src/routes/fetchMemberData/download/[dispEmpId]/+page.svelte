<script>
	import { onMount } from 'svelte';
	export let data;
	let dispEmpId;
	let URLslug;
	let showImage = true;

	// Use onMount to initialize data and derived variables
	onMount(() => {
		if (data) {
			dispEmpId = data.dispEmpId;
			URLslug = `https://clubmembership.uvameridian.com/fetchMemberData/${dispEmpId}`;
		}
	});
	// The client side solution would only work if the requested image is NOT blocked by CORS policy.
	// function to download image and append image to the div block
	async function download(url, qrformats) {
		const a = document.createElement('a');
		const img = document.createElement('img');
		a.href = await toDataURL(url);
		console.log(a);

		// To display image
		img.src = await toDataURL(url);
		// Check if the image container already has an image
		let divBlock = document.querySelector('.image');
		if (divBlock.firstChild) {
			showImage = !showImage;
			// If an image already exists, remove it
			divBlock.removeChild(divBlock.firstChild);
		} else {
			if (qrformats != 'eps') {
				showImage = !showImage;
				// If no image exists, append the new image
				divBlock.appendChild(img);
				const show_img = document.getElementsByClassName('img__container')[0];
				show_img.classList.add('show__img');
			} else {
				// download image section
				a.download = `qrCode${dispEmpId}.${qrformats}`;
				document.body.appendChild(a);
				a.click();
				document.body.removeChild(a);
			}
		}
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
		console.log('this is the break point!!!!!!!!!');
		// showImage = !showImage;
		const { qrformats } = Object.fromEntries(new FormData(e.target).entries());

		console.log(qrformats);

		download(
			`https://api.qrserver.com/v1/create-qr-code/?data=${URLslug}&amp;size=600x600&format=${qrformats}`,
			qrformats
		);
	}

	let qrcode = {
		btnformat : ""
	}

	let onChangeFormat = ""
	// logic to condition button according to the format 
	const onChange = () => {
		onChangeFormat = qrcode.btnformat
		console.log(onChangeFormat)
		if (onChangeFormat == 'eps') {
			let divBlock = document.querySelector('.image');
			if (divBlock.firstChild){
				console.log("hello")
				divBlock.removeChild(divBlock.firstChild)
				showImage = !showImage;
			}
		} 
	}

</script>

<body>
	<div class="container">
		<div class="container__text">
			<form on:submit={handlesubmit} action="">
				<h2>Download QR Code</h2>
				<div class="img__container show__img">
					<div class="image"></div>
				</div>
				<!-- binding value data to qrcode.btnformat -->
				<select name="qrformats" id="qrformat" bind:value={qrcode.btnformat} on:change={onChange}  > 
					<option value="" selected disabled hidden>Choose here</option>
					<option value="png">png</option>
					<option value="jpeg">jpeg</option>
					<option value="eps">eps</option>
				</select>
				<button>
					<!-- button condition according to the image being displayed or not -->
					{#if onChangeFormat == 'eps'}
					Download Image{:else}
					{!showImage ? 'Remove Image' : 'Display Image'}
					{/if}
				</button>
			</form>
		</div>
	</div>
</body>

<style>
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	body {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.container {
		text-align: center;
		border: 5px solid;
		padding: 7px 30px 30px 30px ;
		box-sizing: border-box;
	}

	.show__img {
		margin-top: 30px;
		margin-bottom: 30px;
	}
</style>
