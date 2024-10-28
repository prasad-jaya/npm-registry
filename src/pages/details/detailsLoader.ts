import { getPackage } from "../../api/queries/getPackage";
import type { Params } from "../../api/queries/getPackage";

interface LoaderArgs {
    params: Params;
}

export async function detailsLoader({ params }: {params: Params}) {
    const { name } = params;

    if(!name) {
        throw new Error ('Name must be Provided')
    }
    const details = await getPackage(name);
    
    return {details};

}
