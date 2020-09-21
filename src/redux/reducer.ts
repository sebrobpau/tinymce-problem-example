import {ActionTypes} from "./actions";

const initialState: any = {
    root: ["init"],
    elements: {
        init: {
            children: [],
            attributes: {id: "init"},
            name: "div",
        },
    },
};

export default (draft = initialState, {type, payload}: any) => {
    switch (type) {
        case ActionTypes["resource/fetched"]: {
            const {root, elements} = payload;
            return {
                root,
                elements,
            };
        }
        default:
            return draft;
    }
};
