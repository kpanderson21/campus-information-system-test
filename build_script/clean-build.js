import { deleteAsync } from "del";

(async ()=>{
    await deleteAsync([
        "build/**",
        "dist/**"
    ]);
})();