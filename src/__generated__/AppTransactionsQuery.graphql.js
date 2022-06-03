/**
 * @generated SignedSource<<2b539f2c3558b8f0cb9e07a0337571e5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Query } from 'relay-runtime';
export type AppTransactionsQuery$variables = {|
  maxBlock: number,
  cursor?: ?string,
|};
export type AppTransactionsQuery$data = {|
  +transactions: {|
    +edges: $ReadOnlyArray<{|
      +cursor: string,
      +node: {|
        +id: string,
        +tags: $ReadOnlyArray<{|
          +name: string,
          +value: string,
        |}>,
        +data: {|
          +type: ?string,
          +size: string,
        |},
      |},
    |}>,
  |},
|};
export type AppTransactionsQuery = {|
  variables: AppTransactionsQuery$variables,
  response: AppTransactionsQuery$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cursor"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "maxBlock"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "after",
        "variableName": "cursor"
      },
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "max",
            "variableName": "maxBlock"
          },
          {
            "kind": "Literal",
            "name": "min",
            "value": 0
          }
        ],
        "kind": "ObjectValue",
        "name": "block"
      },
      {
        "kind": "Literal",
        "name": "first",
        "value": 20
      },
      {
        "kind": "Literal",
        "name": "tags",
        "value": [
          {
            "name": "Content-Type",
            "values": [
              "image/png"
            ]
          }
        ]
      }
    ],
    "concreteType": "TransactionConnection",
    "kind": "LinkedField",
    "name": "transactions",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TransactionEdge",
        "kind": "LinkedField",
        "name": "edges",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "cursor",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Transaction",
            "kind": "LinkedField",
            "name": "node",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "tags",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "name",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "value",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "MetaData",
                "kind": "LinkedField",
                "name": "data",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "type",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "size",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTransactionsQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppTransactionsQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "82df70659401719abb8858cb9402b972",
    "id": null,
    "metadata": {},
    "name": "AppTransactionsQuery",
    "operationKind": "query",
    "text": "query AppTransactionsQuery(\n  $maxBlock: Int!\n  $cursor: String\n) {\n  transactions(first: 20, after: $cursor, block: {min: 0, max: $maxBlock}, tags: [{name: \"Content-Type\", values: [\"image/png\"]}]) {\n    edges {\n      cursor\n      node {\n        id\n        tags {\n          name\n          value\n        }\n        data {\n          type\n          size\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "b09d880e9280aac66b9f4094c6e4e593";

module.exports = ((node/*: any*/)/*: Query<
  AppTransactionsQuery$variables,
  AppTransactionsQuery$data,
>*/);
