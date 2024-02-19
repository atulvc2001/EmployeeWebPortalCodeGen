
export const load = async (serverLoadEvent) => {

    const { params } = serverLoadEvent;
    const { dispEmpId } = params;

    console.log(dispEmpId)

    return {
        dispEmpId
    }
}