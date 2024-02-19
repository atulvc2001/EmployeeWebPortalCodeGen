<script>
	export let data;
	const { dispEmpId } = data
	const URLslug = `https://clubmembership.uvameridian.com/fetchMemberData/${dispEmpId}` 
	console.log(URLslug)
	import lion from '$lib/images/lion.jpg';

	// The client side solution would only work if the requested image is NOT blocked by CORS policy.

	async function download(url,qrformats) {
		const a = document.createElement('a');
		a.href = await toDataURL(url);
		a.download = `myImage.${qrformats}`;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	}

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
		

	}

</script>

<body>
	<div class="container">
		<form on:submit={handlesubmit} action="">
			<h1>Download QR Code</h1>
			<select name="qrformats" id="qrformat">
				<option value="png">png</option>
				<option value="jpeg">jpeg</option>
				<option value="eps">eps</option>
			</select>
			<button>download</button>
		</form>
	</div>

</body>

<style>
	* {
		font-family: Arial, Helvetica, sans-serif;
	}

	.container {
		border: 5px solid;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -100%);
		padding: 30px;
	}
</style>
