import { api } from "./fetcher";
import mock from "./mock/promotions";

const { get } = mock;

const candidatApi = {
  scrap: (filter) => get(filter),
  adjustement: (filter) => get(filter),
  cycleCount: (filter) => get(filter)
};

export default candidatApi;
