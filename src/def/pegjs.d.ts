export class SyntaxError {
    line: number;
    column: number;
    offset: number;
    location: LocationRange;
    expected:any[];
    found:any;
    name:string;
    message:string;
}