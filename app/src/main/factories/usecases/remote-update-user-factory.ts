import { RemoteUpdateUser } from "../../../data/usecases/remote-update-user";
import { UpdateUser } from "../../../domain/usecases/update-user";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteUpdateUser = (): UpdateUser =>
  new RemoteUpdateUser(makeApiUrl('/users'), makeAxiosHttpClient())
