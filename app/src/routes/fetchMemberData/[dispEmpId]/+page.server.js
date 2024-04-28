
import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { dispEmpId } = params;
	
	// fetching Data from google sheet
	const response = await fetch(
		// google script link
		'https://script.google.com/macros/s/AKfycbwJuLBTGS6YbaREbTBHY3Ib2GjpzSb74pd5cTdD3_S5QW3mwe3dn435uv4HOM0DlWIM/exec'
	);

	const dataFromGoogleSheet = await response.json();
	const gsheetEmpDataJson = { empsData: dataFromGoogleSheet };
	// gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
	console.log('This page is from +page.server.js');
	// console.log(gsheetEmpDataJson.empsData) test

	// console.log(gsheetEmpDataJson.empsData) test

	// filtering the particular empId from the params
	const singleEmpData = gsheetEmpDataJson.empsData.filter((emp) => {
		return emp['UID'] == dispEmpId;
		// return emp.Timestamp == dispEmpId; for debugging purpose

	});

	// console.log(singleEmpData) To test
	// Error Checking
	if (singleEmpData.length == 0){
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
