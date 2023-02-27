import axios from 'axios';
import { apiUrl } from '@/env';
import { Comment, ICommentUpdate, ICommentCreate } from '../../../interfaces/index';

function authHeaders(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

export const api = {
  async createComment(token: string, data: ICommentCreate) {
    return axios.post<ICommentCreate>(`${apiUrl}/api/v1/comments`, data, authHeaders(token));
  },
  async updateComment(token: string, commentId: number, data: ICommentUpdate) {
    return axios.post<ICommentUpdate>(`${apiUrl}/api/v1/comments/${commentId}`, data, authHeaders(token));
  },
  async deleteComment(token: string, commentId: number) {
    return axios.delete<ICommentUpdate>(`${apiUrl}/api/v1/comments/${commentId}`, authHeaders(token));
  }
};
