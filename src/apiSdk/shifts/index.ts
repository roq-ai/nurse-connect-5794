import axios from 'axios';
import queryString from 'query-string';
import { ShiftInterface, ShiftGetQueryInterface } from 'interfaces/shift';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getShifts = async (query?: ShiftGetQueryInterface): Promise<PaginatedInterface<ShiftInterface>> => {
  const response = await axios.get('/api/shifts', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createShift = async (shift: ShiftInterface) => {
  const response = await axios.post('/api/shifts', shift);
  return response.data;
};

export const updateShiftById = async (id: string, shift: ShiftInterface) => {
  const response = await axios.put(`/api/shifts/${id}`, shift);
  return response.data;
};

export const getShiftById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/shifts/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteShiftById = async (id: string) => {
  const response = await axios.delete(`/api/shifts/${id}`);
  return response.data;
};
