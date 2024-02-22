
// import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { dispEmpId } = params;
	// Error Checking block -> to check if the param exists or not
	// fetching Data from google sheet
	const response = await fetch(
		// google script link
		'https://script.google.com/macros/s/AKfycbwa7GJFG2c-O6748gXfEKHIw3won1RxoK9bRymvEwvmXgwhz8z2ZA_zOoQHGZEZ-O-t/exec'
	);
	const dataFromGoogleSheet = await response.json();
	const gsheetEmpDataJson = { empsData: dataFromGoogleSheet };
	// gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
	console.log('This page is from +page.server.js');
	console.log(gsheetEmpDataJson.empsData) 

	// filtering the particular empId from the params
	const singleEmpData = gsheetEmpDataJson.empsData.filter((emp) => {
		// return emp.uid == dispEmpId;
		return emp.Timestamp == dispEmpId;

	});

	// if (!(singleEmpData.length == 9)){
	// 	error(404, {
	// 			message: 'ID Not found'
	// 	});
	// }
	// sending the data to the html page
	return {
		singleEmpData,
		dispEmpId
	};
};
