import { Box, Button, Flex } from '@chakra-ui/react';

import FormOr from '@/components/common/FormOr';
import RegexInput from '@/components/common/RegexInput';
import useRegexInputs from '@/hooks/useRegexInputs';
import { EMAIL_REGEX, PASSWORD_REGEX } from '@/utils/regex';

import EmailInput from './EmailInput';

export default function SignupForm() {
  const [inputs, valids, handleInputChange] = useRegexInputs({
    name: /./,
    email: EMAIL_REGEX,
    password: PASSWORD_REGEX,
    verifyPassword: /./,
  });

  const { name, email, password, verifyPassword } = inputs;
  const { name: isNameValid, email: isEmailValid, password: isPasswordValid } = valids;

  return (
    <Flex direction='column'>
      <Box mb='25px'>
        <RegexInput
          label='이름'
          size='lg'
          name='name'
          placeholder='이름을 입력해 주세요.'
          value={name}
          isValid={isNameValid}
          onChange={handleInputChange}
        />
      </Box>
      <Box mb='26px'>
        <EmailInput
          label='이메일'
          size='md'
          name='email'
          type='email'
          placeholder='이메일을 입력해 주세요.'
          errorMessage='이메일 형식을 확인해 주세요.'
          value={email}
          isValid={isEmailValid}
          onChange={handleInputChange}
          buttonText='중복 확인'
        />
      </Box>
      <Box mb='16px'>
        <RegexInput
          label='비밀번호'
          size='lg'
          name='password'
          type='password'
          placeholder='8-12자 영문 + 숫자를 포함하여 입력해 주세요.'
          errorMessage='8-12자 영문 + 숫자를 포함하여 입력해 주세요.'
          value={password}
          isValid={isPasswordValid}
          onChange={handleInputChange}
        />
      </Box>
      <Box mb='57px'>
        <RegexInput
          size='lg'
          name='verifyPassword'
          type='password'
          placeholder='비밀번호를 한 번 더 입력해 주세요.'
          errorMessage='비밀번호가 일치하지 않습니다.'
          value={verifyPassword}
          isValid={password === verifyPassword}
          onChange={handleInputChange}
        />
      </Box>
      <Button size='lg'>회원가입 하기</Button>
      <Box m='41px 0px'>
        <FormOr />
      </Box>
      <Flex justifyContent='center' gap={4}>
        <Button bg='fff' border='0.6px solid #BFBFBF' width='59px' height='59px' p={0}>
          {/* <Image src={require('../../../assets/icons/google-icon.svg')} alt='google login' width={40} height={38} /> */}
        </Button>
        <Button bg='fff' border='0.6px solid #BFBFBF' width='59px' height='59px' p={0}>
          {/* <Image src={require('../../../assets/icons/github-icon.svg')} alt='github login' width={40} height={38} /> */}
        </Button>
      </Flex>
    </Flex>
  );
}
