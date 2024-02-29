import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { FieldValues, useFormContext } from 'react-hook-form';

interface FormButtonProps {
    title: string;
    onSubmit: (data: FieldValues) => void;
}

export default function FormButton(props: FormButtonProps) {
    const { handleSubmit } = useFormContext();
  return (
    <TouchableOpacity onPress={handleSubmit(props.onSubmit)} >
        <Text>{props.title}</Text>
    </TouchableOpacity>
  )
}