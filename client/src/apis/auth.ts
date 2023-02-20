import request from '@/apis';

const EMAIL_DUPLICATE_PATH = '/auth/email';

export const emailDuplicateAPI = async (email: string) => {
  return await request.get(EMAIL_DUPLICATE_PATH, { params: { email } });
};
