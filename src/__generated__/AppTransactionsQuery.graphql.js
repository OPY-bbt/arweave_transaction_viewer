/**
 * @generated SignedSource<<18ba87652e5a6787a83bc0c63595d8cd>>
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
    +pageInfo: {|
      +hasNextPage: boolean,
    |},
    +edges: $ReadOnlyArray<{|
      +cursor: string,
      +node: {|
        +id: string,
        +block: ?{|
          +timestamp: number,
        |},
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
          "image/png",
          "image/jpeg"
        ]
      }
    ]
  }
],
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "PageInfo",
  "kind": "LinkedField",
  "name": "pageInfo",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "hasNextPage",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cursor",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timestamp",
  "storageKey": null
},
v7 = {
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
v8 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppTransactionsQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TransactionConnection",
        "kind": "LinkedField",
        "name": "transactions",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TransactionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Transaction",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Block",
                    "kind": "LinkedField",
                    "name": "block",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
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
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "TransactionConnection",
        "kind": "LinkedField",
        "name": "transactions",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "TransactionEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Transaction",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Block",
                    "kind": "LinkedField",
                    "name": "block",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v7/*: any*/),
                  (v8/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8e832651eaf75e026b669390f2fb2003",
    "id": null,
    "metadata": {},
    "name": "AppTransactionsQuery",
    "operationKind": "query",
    "text": "query AppTransactionsQuery(\n  $maxBlock: Int!\n  $cursor: String\n) {\n  transactions(first: 20, after: $cursor, block: {min: 0, max: $maxBlock}, tags: [{name: \"Content-Type\", values: [\"image/png\", \"image/jpeg\"]}]) {\n    pageInfo {\n      hasNextPage\n    }\n    edges {\n      cursor\n      node {\n        id\n        block {\n          timestamp\n          id\n        }\n        tags {\n          name\n          value\n        }\n        data {\n          type\n          size\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "58be6241567a16ac6081c65ef8313ffb";

module.exports = ((node/*: any*/)/*: Query<
  AppTransactionsQuery$variables,
  AppTransactionsQuery$data,
>*/);
