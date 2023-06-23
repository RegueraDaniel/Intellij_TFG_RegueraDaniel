// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function loginUser(userData) {
  return request('http://localhost:8080/api/usuarios/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: userData,
  }).then(response => { return response })
}

export async function listarMovimientos(id) {
  return request('http://localhost:8080/api/movimientos/misMovimientos/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  }).then(response => { return response })
}

export async function guardarMovimientos(movimientosData,id) {
  return request('http://localhost:8080/api/movimientos/crearMiMovimiento/' + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: movimientosData,
  }).then(response => { return response })
}

export async function editarMovimiento(movimientosData,id) {
  return request('http://localhost:8080/api/movimientos/' + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    data: movimientosData,
  }).then(response => { return response })
}


export async function verMovimientos(id) {
  return request('http://localhost:8080/api/movimientos/' + id, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  }).then(response => { return response })
}

export async function borrarMovimientos(id) {
  return request('http://localhost:8080/api/movimientos/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
  }).then(response => { return response })
}
