import { editor, MarkerSeverity } from 'monaco-editor';

export interface InputRange {
    start : InputLocation
    end : InputLocation
}

export interface InputLocation {
    offset : number
    line : number
    column : number
}

/**
 * Creates a monaco-editor IMarkerData for the given PegJsRange
 * and corresponding error message, code and severity.
 * 
 * @See editor.IMarkerData
 */
export function createMarker(range : InputRange, message : string, code : string, severity : MarkerSeverity) : editor.IMarkerData {
    const marker : editor.IMarkerData = {
        startLineNumber: range.start.line,
        startColumn: range.start.column,
        endLineNumber: range.end.line,
        endColumn: range.end.column,
        message: message,
        code: code,
        severity: severity
    }
    return marker;
}