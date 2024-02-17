
import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { dispEmpId } = params;
	// Error Checking block -> to check if the param exists or not

	const response = await fetch(
		'https://script.googleusercontent.com/macros/echo?user_content_key=N4S0DZZWFzBA2Pef85_WkLBTPlGgHwXc5t8155h5f9JXrJFMhN72BBZkB2KekI9ldO4ebJoRjXrfwi6pYmFhY5g-Zskmh9_Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNx24ntYM2l6QCyqKGeJP629RHBnorO0RSnOnnVXpyvTeKSFnZL0aA2Tm2_q3MyiHAj6uDaoEwpq4i-2rPmNoWfLhWDRMeZxoQ&lib=MLzBmco8mfQO_WgQrsM53GQh1UrPZ7Gxm'
	);
	const dataFromGoogleSheet = await response.json();
	const gsheetEmpDataJson = { empsData: dataFromGoogleSheet };
	// gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
	console.log('This page is from +page.server.js');
	gsheetEmpDataJson.empsData.map((element, index) => {
		element['id'] = index + 1;
		// console.log(element)
		let checkDOB = Object.prototype.hasOwnProperty.call(element, 'DOB');
		if (checkDOB) {
			element['DOB'] = element['DOB'].split('T')[0];
		}
		let checkSpouseDOB = Object.prototype.hasOwnProperty.call(
			element,
			"What is your spouse's date of birth"
		);
		if (checkSpouseDOB) {
			element["What is your spouse's date of birth"] =
				element["What is your spouse's date of birth"].split('T')[0];
			element['When is your wedding anniversary?'] =
				element['When is your wedding anniversary?'].split('T')[0];
		}

	});
	if (!(1 <= dispEmpId && dispEmpId <= gsheetEmpDataJson.empsData.length)) {
		error(404, {
			message: 'ID Not found'
		});
	}
	const singleEmpData = gsheetEmpDataJson.empsData.filter((emp) => {
		return emp.id == dispEmpId;
	});

	return {
		singleEmpData,
		dispEmpId
	};
};
