import { RemoteAddUser } from "../../../data/usecases/remote-add-user";
import { AddUser } from "../../../domain/usecases/add-user";
import { makeApiUrl } from "../http/api-url-factory";
import { makeAxiosHttpClient } from "../http/axios-http-client-factory";

export const makeRemoteAddAccount = (): AddUser =>
  new RemoteAddUser(makeApiUrl('/user'), makeAxiosHttpClient())
