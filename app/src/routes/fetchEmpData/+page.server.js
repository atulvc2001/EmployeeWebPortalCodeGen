export const load = async (serverLoadEvent) => {
    const {fetch} = serverLoadEvent
    const response = await fetch('http://localhost:4000/employeeData')
    // const title = 'Employee Detail'
    const empData = await response.json()
    // console.log(empData)
    // console.log(JSON.stringify(empData, null, 2));
    return {
        empData
    }
}