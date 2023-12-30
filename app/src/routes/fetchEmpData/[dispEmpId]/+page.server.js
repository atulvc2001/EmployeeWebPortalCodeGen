// export const load = async (serverLoadEvent) => {
//     const { fetch,params } = serverLoadEvent;
//     const title = 'Employee Details'
//     const { dispEmpId } = params
//     const response = await fetch(`http://localhost:4000/employeeData/${dispEmpId}`)
//     const empData = await response.json()

//     // console.log(empData)

//     return {
//         dispEmpId,
//         title,
//         empData
//     }
// }

// export const load = async (serverLoadEvent) => {
//     const {fetch} = serverLoadEvent
//     const response = await fetch('http://localhost:4000/employeeData')
//     // const title = 'Employee Detail'
//     const empData = await response.json()
//     // console.log(empData)
//     // console.log(JSON.stringify(empData, null, 2));
//     return {
//         empData
//     }
// }

export const load = async (serverLoadEvent) => {
    const {fetch, params} = serverLoadEvent
    const { dispEmpId } = params 
    const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=N4S0DZZWFzBA2Pef85_WkLBTPlGgHwXc5t8155h5f9JXrJFMhN72BBZkB2KekI9ldO4ebJoRjXrfwi6pYmFhY5g-Zskmh9_Vm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnNx24ntYM2l6QCyqKGeJP629RHBnorO0RSnOnnVXpyvTeKSFnZL0aA2Tm2_q3MyiHAj6uDaoEwpq4i-2rPmNoWfLhWDRMeZxoQ&lib=MLzBmco8mfQO_WgQrsM53GQh1UrPZ7Gxm')
    const dataFromGoogleSheet = await response.json() 
    const gsheetEmpDataJson = {empsData:dataFromGoogleSheet}
    // gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
    console.log("This page is from +page.server.js")
    gsheetEmpDataJson.empsData.map((element,index)=>{
        element["id"] = index+1;
        console.log(element)
        let checkDOB = Object.prototype.hasOwnProperty.call(element,"DOB") 
        if(checkDOB){
            element["DOB"] = element["DOB"].split("T")[0]
        }
        let checkSpouseDOB = Object.prototype.hasOwnProperty.call(element,"What is your spouse's date of birth")
        if (checkSpouseDOB){
            element["What is your spouse's date of birth"] = element["What is your spouse's date of birth"].split("T")[0]
            element["When is your wedding anniversary?"] = element["When is your wedding anniversary?"].split("T")[0]
        }


        // let indDOB = element["Date Of Birth"].indexOf('T')
        // let indDOBSpouse = element["What is your spouse's date of birt"].indexOf('T')
        // let indDOBAnny = element["When is your wedding anniversary?"].indexOf('T')
        // console.log(indDOB)
        // console.log("this is the index ",element["Date Of Birth"].indexOf('T'))
        // element["Date Of Birth"].
    })
    // console.log(gsheetEmpDataJson.empsData)
    const singleEmpData = gsheetEmpDataJson.empsData.filter((emp)=>{
       return emp.id == dispEmpId 
    })
    console.log(singleEmpData)
    // const singleEmpData = gsheetEmpDataJson.empsData
    // console.log(gsheetEmpDataJson)
    return {
        singleEmpData,
        dispEmpId
    }
}