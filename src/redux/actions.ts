export const ActionTypes = {
    "resource/fetch": "resource/fetch",
    "resource/fetched": "resource/fetched",
};

export const resourceFetch = () => {
    return {
        type: ActionTypes["resource/fetch"],
        meta: {
            method: "GET",
            url: "https://run.mocky.io/v3/083f23e5-3d95-4e98-8162-5d808fa544a3",
        },
    };
};

export const resourceFetched = (payload: any) => {
    return {
        type: ActionTypes["resource/fetched"],
        payload,
    };
};
