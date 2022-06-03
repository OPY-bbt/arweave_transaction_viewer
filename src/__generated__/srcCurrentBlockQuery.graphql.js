/**
 * @generated SignedSource<<17f535ee49a754746f7712b6a4ec1976>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type srcCurrentBlockQuery$variables = {||};
export type srcCurrentBlockQuery$data = {|
  +block: ?{|
    +height: number,
  |},
|};
export type srcCurrentBlockQuery = {|
  variables: srcCurrentBlockQuery$variables,
  response: srcCurrentBlockQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "height",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "srcCurrentBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Block",
        "kind": "LinkedField",
        "name": "block",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "srcCurrentBlockQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Block",
        "kind": "LinkedField",
        "name": "block",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "05b7956838e11baa0e1c4baac9edb5f0",
    "id": null,
    "metadata": {},
    "name": "srcCurrentBlockQuery",
    "operationKind": "query",
    "text": "query srcCurrentBlockQuery {\n  block {\n    height\n    id\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "73ebca19ae55cf3bf9281b779df8b57a";

module.exports = ((node/*: any*/)/*: Query<
  srcCurrentBlockQuery$variables,
  srcCurrentBlockQuery$data,
>*/);
