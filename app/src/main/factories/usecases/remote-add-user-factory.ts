import { RemoteAddUser } from "../../../data/usecases/remote-add-user";
import { AddUser } from "../../../domain/usecases/add-user";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteAddUser = (): AddUser =>
  new RemoteAddUser(makeApiUrl('/users'), makeAxiosHttpClient())
