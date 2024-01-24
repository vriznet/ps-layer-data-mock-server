import { sampleLayerList } from '../data/layers';
import { Resolvers } from '../type';

const resolvers: Resolvers = {
  Query: {
    psLayers: () => sampleLayerList,
  },
};

export default resolvers;
