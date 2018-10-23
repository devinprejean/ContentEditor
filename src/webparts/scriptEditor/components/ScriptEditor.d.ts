/// <reference types="react" />
import * as React from 'react';
import { IScriptEditorProps } from './IScriptEditorProps';
export default class ScriptEditor extends React.Component<IScriptEditorProps, any> {
    constructor();
    componentDidMount(): void;
    private _showDialog();
    private _closeDialog();
    private _cancelDialog();
    private _onScriptEditorTextChanged(text);
    render(): React.ReactElement<IScriptEditorProps>;
}
