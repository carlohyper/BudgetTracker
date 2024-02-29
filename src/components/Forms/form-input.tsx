import { useAddExpense } from '@scenes/expense/hooks/use-add-expense.hook';
import React from 'react'
import { useController, useFormContext } from 'react-hook-form'
import { TextInput } from 'react-native';

interface FormInputProps {
    name: string;
    control: any
    // [otherProps: string | number | symbol]: unknown;
}

export default function FormInput({name, control}: FormInputProps) {
    const { formState: { errors } } = useFormContext();
    const { field } = useController({
        name,
        control
        // defaultValue: props.defaultValue ?? ""
    })
    
  return (
    <>
      <TextInput
        value={field.value} 
        onChangeText={field.onChange} 
        onBlur={field.onBlur}
      />
    </>
  )
}