export function staticPath(path: string) {
    const BASE_URL = import.meta.env.BASE_URL;
    return `${BASE_URL}${path}`
}