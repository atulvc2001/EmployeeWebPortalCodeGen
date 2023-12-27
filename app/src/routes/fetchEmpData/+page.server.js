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
    const {fetch} = serverLoadEvent
    const response = await fetch('https://script.googleusercontent.com/macros/echo?user_content_key=YYYgDKum10Hi0YaLNpaT7A9x583YH1ZgA5lNUJG5lvl-JUDLe2eMltGY6-fYZup2InEQ-JKZmoLjWE9j24z7qoDGrmmIX60Nm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnKmUzZhiyhadHYCC3cITKKfu_hqjYMtv27SEktAUgFiju5ebQOmCEwVMcEKeBQRhcU_IYqmtgtD6860mIeIQw5rzZ8ZJnt3k8dz9Jw9Md8uu&lib=M7_wXbhR69ynm28cfNGMBbPAuRV4t141D')
    const dataFromGoogleSheet = await response.json() 
    const gsheetEmpDataJson = {empsData:dataFromGoogleSheet}
    // gsheetEmpDataJson.empsData.push(dataFromGoogleSheet)
    console.log("This page is from +page.server.js")
    gsheetEmpDataJson.empsData.map((element,index)=>{
        element["id"] = index;
        // let indDOB = element["Date Of Birth"].indexOf('T')
        // let indDOBSpouse = element["What is your spouse's date of birt"].indexOf('T')
        // let indDOBAnny = element["When is your wedding anniversary?"].indexOf('T')
        // console.log(indDOB)
        // console.log("this is the index ",element["Date Of Birth"].indexOf('T'))
        // element["Date Of Birth"].
    })
    // console.log(gsheetEmpDataJson)
    return {
        gsheetEmpDataJson
    }
}