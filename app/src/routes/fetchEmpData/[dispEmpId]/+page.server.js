export const load = async (serverLoadEvent) => {
    const { fetch,params } = serverLoadEvent;
    const title = 'Employee Details'
    const { dispEmpId } = params
    const response = await fetch(`http://localhost:4000/employeeData/${dispEmpId}`)
    const empData = await response.json()

    // console.log(empData)

    return {
        dispEmpId,
        title,
        empData
    }
}

