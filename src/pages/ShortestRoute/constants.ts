export type Edge = {
  node: string;
  weight: number;
};

export type IAdjacencyGraph = {
  [key in string]: Edge[];
};

export const adjacencyGraph: IAdjacencyGraph = {
  A: [{ node: "C", weight: 2 }],
  B: [{ node: "D", weight: 4 }, { node: "E", weight: 7 }],
  C: [
    { node: "A", weight: 2 },
    { node: "D", weight: 1 },
    { node: "F", weight: 4 }
  ],
  D: [
    { node: "C", weight: 1 },
    { node: "B", weight: 4 },
    { node: "F", weight: 1 },
    { node: "G", weight: 2 }
  ],
  E: [{ node: "B", weight: 7 }, { node: "H", weight: 10 }],
  F: [
    { node: "C", weight: 4 },
    { node: "D", weight: 1 },
    { node: "G", weight: 3 }
  ],
  G: [
    { node: "D", weight: 2 },
    { node: "F", weight: 3 },
    { node: "H", weight: 4 }
  ],
  H: [{ node: "G", weight: 4 }, { node: "E", weight: 10 }]
};

export type Stop = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H";

export type RouteOption = {
  [key in Stop]: string;
};

export type Entity = string | number | symbol;

export type Route = Entity[];
