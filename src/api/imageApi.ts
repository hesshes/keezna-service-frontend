import { loadConfig } from "../config";
import { ApiConfig } from "../types/component.types";

let apiUrl: ApiConfig;

(async () => {
    apiUrl = await loadConfig();
})();

export async function fetchImageConvert(formData: FormData) {
    let req = {
        method: "POST",
        body: formData,
    };
    debugger;
    const response = await fetch(`${apiUrl.imgConvertUrl}`, req);

    if (!response.ok) {
        throw new Error("Image Upload failed");
    }
    return await response.json();
}
