import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { zodResolver } from '@hookform/resolvers/zod';

import { FieldValues, addNewBudgetDetailsSchema } from '../validations/add-new-budget-details-schema';

export const useAddNewBudgetDetails = () => {
    const navigation = useNavigation()

    const defaultValues = {
        title: '',
        period: 'monthly'
    }

    const {
        handleSubmit,
        control,
        formState: { isValid }
    } = useForm<FieldValues>({
        defaultValues,
        mode: 'all',
        resolver: zodResolver(addNewBudgetDetailsSchema)
    })

    return {
        handleSubmit,
        isValid,
        control,
        navigation
    }
}