import { useAuth } from '@clerk/expo';
import axios from 'axios';
import { useEffect } from 'react';
<<<<<<< Updated upstream
=======
import * as Sentry from '@sentry/react-native';
>>>>>>> Stashed changes

const API_URL = 'http://localhost:3000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const useApi = () => {
  const { getToken } = useAuth();

  useEffect(() => {
    const requestInterceptor = api.interceptors.request.use(async (config) => {
      const token = await getToken();

      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }

      return config;
    });

<<<<<<< Updated upstream
    return () => {
      return api.interceptors.request.eject(requestInterceptor);
=======
    const responseInterceptor = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response) {
          Sentry.logger.error(
            Sentry.logger
              .fmt`API request failed: ${error.config?.method?.toUpperCase()} ${error.config?.url}`,
            {
              status: error.response.status,
              endpoint: error.config?.url,
              method: error.config?.method,
            },
          );
        } else if (error.request) {
          Sentry.logger.warn('API request failed - no response', {
            endpoint: error.config?.url,
            method: error.config?.method,
          });
        }

        return Promise.reject(error);
      },
    );

    return () => {
      api.interceptors.request.eject(requestInterceptor);
      api.interceptors.response.eject(responseInterceptor);
>>>>>>> Stashed changes
    };
  }, [getToken]);

  return api;
};
