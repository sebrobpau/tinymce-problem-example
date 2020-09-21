import React from "react";
import shortid from "shortid";
import P from "../components/elements/P";
import H1 from "../components/elements/H1";
import Section from "../components/elements/Section";

const components: any = {
    p: {Component: P},
    section: {Component: Section},
    h1: {Component: H1},
    h2: {Component: H1},
    h3: {Component: H1},
    h4: {Component: H1},
    h5: {Component: H1},
    h6: {Component: H1},
};

export const createEditable = (element: any, elements: any): any => {
    const {name, children} = element;

    const createComponent = (Component: React.FC, props: any) => {
        return (
            <Component {...props} key={shortid.generate()}>
                {children.map((child: any) => {
                    if (child.id && elements[child.id]) {
                        return createEditable(elements[child.id], elements);
                    }
                    return child.text;
                })}
            </Component>
        );
    };

    if (components[name]) {
        const {Component} = components[name];
        const props = {
            ...element,
        };

        return createComponent(Component, props);
    }

    return children.map((child: any) => {
        if (child.id) {
            return createEditable(elements[child.id], elements);
        }
        return child.text;
    });
};
