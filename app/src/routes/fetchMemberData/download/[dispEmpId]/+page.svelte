<script>
	import lion from '$lib/images/lion.jpg';

	// The client side solution would only work if the requested image is NOT blocked by CORS policy.

	async function download(url) {
		const a = document.createElement('a');
		a.href = await toDataURL(url);
		a.download = 'myImage.eps';
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
		const data = Object.fromEntries(new FormData(e.target).entries());
		// fetch('https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100&format=eps;')
		// 	.then((response) => response.blob())
		// 	.then((blob) => {
		// 		// Process the blob (PNG image data)
		// 		// For example, create a URL for the blob and display the image
		// 		const url = URL.createObjectURL(blob);
		// 		const img = document.createElement('img');
		// 		img.src = url;
		// 		document.body.appendChild(img);
		// 	})
		// 	.catch((error) => {
		// 		console.error('Error fetching image:', error);
		// 	});
		console.log('Hello');
		// const responsedata = await response
		// console.log(responsedata)
		let a = document.createElement('a');
		a.href = lion;
		a.setAttribute('download', 'qrCodeImage');
		download(
			'https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100&format=eps'
		);
		// a.click()
	}

	// const v = document.querySelector("form").addEventListener('submit', (e)=>{
	//     e.preventDefault()
	//     const data = Object.fromEntries(new FormData(e.target).entries());
	//     console.log(data)
	// })
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
	<!-- <div>
        <a href="" download >
            <img src="https://api.qrserver.com/v1/create-qr-code/?data=HelloWorld&amp;size=100x100;" alt="" height="100" download>
        </a>
    </div> -->
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
