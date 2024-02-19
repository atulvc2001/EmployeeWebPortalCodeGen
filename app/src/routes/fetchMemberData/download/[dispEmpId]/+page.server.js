import { error } from '@sveltejs/kit';

export const load = async (serverLoadEvent) => {

    const { params } = await serverLoadEvent;
    const { dispEmpId } = await params;

    if (dispEmpId.length != 9){
		error(404, {
				message: 'ID Not found'
		});
	}

    console.log(dispEmpId.length)

    return {
        dispEmpId
    }
}