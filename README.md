# Subgraph

TheGraph exposes a GraphQL endpoint to query the events and entities within the DirtyPanties NFT Contract

Currently, there are multiple subgraphs, but additional subgraphs can be added to this repo:


## To setup and deploy

For any of the subgraph: `blocks` as `[subgraph]`

1. Run the `yarn run codegen:[subgraph]` command to prepare the TypeScript sources for the GraphQL (generated/*).

2. Run the `yarn run build:[subgraph]` command to build the subgraph, and check compilation errors before deploying.

3. Run `graph auth https://api.thegraph.com/deploy/ '<ACCESS_TOKEN>'`

4. Deploy via `yarn run deploy:[subgraph]`.
