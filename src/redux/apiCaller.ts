export default async function apiCaller<T>(
    method: string,
    url: string,
    data?: any
): Promise<T[] | null> {
    return fetch(url, {
        method,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        }
    }).then(res => res.json().catch(error => console.log(error)));
}
