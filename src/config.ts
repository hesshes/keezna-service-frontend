import { ApiConfig } from "./types/component.types";

export async function loadConfig() {
    try {
        const response = await fetch("/api-config-dev.json");
        const config: ApiConfig = await response.json();
        return config;
    } catch (error) {
        console.error("Error loading config:", error);
        throw error;
    }
}
