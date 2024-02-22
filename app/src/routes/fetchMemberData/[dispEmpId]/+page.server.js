
import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { dispEmpId } = params;
	
	// fetching Data from google sheet
	const response = await fetch(
		// google script link
		'https://script.google.com/macros/s/AKfycbwL0KrTv1rcvRWtPx_7MMtYVPUUOFEM5vCrw3bw0Xrd3WUxEQFG4ppnnI3JPZyI_5vL/exec'
	);

	const dataFromGoogleSheet = await response.json();
	const gsheetEmpDataJson = { empsData: dataFromGoogleSheet };
	// gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
	console.log('This page is from +page.server.js');
	// console.log(gsheetEmpDataJson.empsData) test

	// filtering the particular empId from the params
	const singleEmpData = gsheetEmpDataJson.empsData.filter((emp) => {
		return emp.uid == dispEmpId;
		// return emp.Timestamp == dispEmpId; for debugging purpose

	});

	// Error Checking
	if (!(singleEmpData[0]["uid"].length == 9)){
		error(404, {
				message: 'ID Not found'
		});
	}
	// sending the data to the html page
	return {
		singleEmpData,
		dispEmpId
	};
};
