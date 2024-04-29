import { expect } from "vitest"

export const toContainerCount = (container,role,count)=> {
    if(role ===1)
    return {
        pass:true,
        message:()=>"successfully"
    }
    return {
        pass:false,
        message:()=>"failed"
    }
}
//custom mather
expect.extend({toContainerCount})