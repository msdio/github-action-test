import { Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { CustomCheckbox } from '@/components/common/Checkbox';

interface IconCheckboxProps {
  labelText: string;
  icon: ReactNode;
  isChecked?: boolean;
  onChange?: () => void;
  name?: string;
}

export default function IconCheckbox({ labelText, icon, isChecked, onChange, name }: IconCheckboxProps) {
  return (
    <Flex alignItems='center' justify='space-between'>
      <CustomCheckbox name={name} labelText={labelText} isChecked={isChecked} onChange={onChange} />
      {icon}
    </Flex>
  );
}
