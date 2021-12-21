import {
  parse as jsoncParse,
  stringify as jsoncStrigify } from 'comment-json';

export function stringify(obj: Record<string, any>) {
  return jsoncStrigify(obj, null, 2);
}

export function parse(text: string) {
  return jsoncParse(text);
}
