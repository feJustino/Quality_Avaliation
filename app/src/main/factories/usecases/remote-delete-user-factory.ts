import { RemoteDeleteUser } from "../../../data/usecases/remote-delete-user";
import { DeleteUser } from "../../../domain/usecases/delete-user";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteDeleteUser = (): DeleteUser =>
  new RemoteDeleteUser(makeApiUrl('/users'), makeAxiosHttpClient())
