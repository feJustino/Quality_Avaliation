import { RemoteFindUser } from "../../../data/usecases/remote-find-user";
import { FindUser } from "../../../domain/usecases/find-user";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteFindUser = (): FindUser =>
  new RemoteFindUser(makeApiUrl('/users'), makeAxiosHttpClient())

