import Realm from 'realm';

import RepositorySchema from '../schemas/RespositorySchema';

export default function getRealm() {
  return Realm.open({
    schema: [RepositorySchema],
  });
}
