import { RemoteFindManyUser } from "../../../data/usecases/remote-find-many-user";
import { FindManyUser } from "../../../domain/usecases/find-many-user";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteFindManyUser = (): FindManyUser =>
  new RemoteFindManyUser(makeApiUrl('/users'), makeAxiosHttpClient())

