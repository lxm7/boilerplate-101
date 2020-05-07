import { pick } from "ramda";

import { getColumnNames } from "./columns";

const siftData = data => data.map(character => pick(getColumnNames, character));

export default siftData;
