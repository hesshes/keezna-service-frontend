let config: any = null;

export async function loadConfig() {
    if (!config) {
        const response = await fetch("/api-config-dev.json");
        config = await response.json();
    }
    return config;
}
