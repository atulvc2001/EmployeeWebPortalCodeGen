
import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {
	const { fetch, params } = serverLoadEvent;
	const { dispEmpId } = params;
	// Error Checking block -> to check if the param exists or not
	// fetching Data from google sheet
	const response = await fetch(
		// google script link
		'https://script.google.com/macros/s/AKfycbxHNC1FkicfXqB0TMGfVfoPIydcrtCXvZjXBKGQYG6dx5ShpTewo6VZgPnEv-HPfdsb/exec'
	);
	const dataFromGoogleSheet = await response.json();
	const gsheetEmpDataJson = { empsData: dataFromGoogleSheet };
	// gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
	console.log('This page is from +page.server.js');
	// console.log(gsheetEmpDataJson.empsData) Test

	// modifying the data to display only the essential parts
	// such as adding an index for each object and modifying the format of dob's
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
		let nameWithSpaces = element['Name'].trim().split(" ")
		let name = nameWithSpaces.join("").slice(0,2)
		let dates = element['DOB'].split('-')
		let day = dates[2]
		let uniqueId = element["LMNo"].split(" ").join("") + "-" + name + day
		element['uid'] = uniqueId
		// console.log("https://clubmembership.uvameridian.com/fetchMemberData/download/"+uniqueId)
	});
	// console.log(gsheetEmpDataJson.empsData[0])

	// filtering the particular empId from the params
	const singleEmpData = gsheetEmpDataJson.empsData.filter((emp) => {
		return emp.uid == dispEmpId;
	});

	if (!singleEmpData.length){
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
