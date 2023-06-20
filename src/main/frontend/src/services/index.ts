// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function loginUser(body)  {
  return request('http://localhost:8080/api/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*'
    },
    data: body,
  }).then(response => {return response})
}
