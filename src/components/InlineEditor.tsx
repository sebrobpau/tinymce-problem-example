import React from "react";
import styled from "styled-components";
import {Editor} from "@tinymce/tinymce-react";

const InlineEditor: React.FC = () => {
    return (
        <Editor
            init={{
                selector: "p, h1",
                menubar: false,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen",
                    "insertdatetime media table paste code help",
                ],
                toolbar: "bold italic underline | bullist numlist",
                contextmenu: "custom_link remove_link",
                statusbar: true,
                /* content_style: `p {margin: 0} .mce-edit-focus {outline: none;} :focus {outline: none;}`, */
            }}
            apiKey="l9j72re1gqeclhuws2cmebaet3u83vlnyhe4gwu6gkvoscsj"
            inline
        />
    );
};

export default InlineEditor;
