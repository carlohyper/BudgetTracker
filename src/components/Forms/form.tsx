import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";

interface FormProps {
    valdiationSchema: any;
    children: JSX.Element[] | JSX.Element;
}

export default function Form({ valdiationSchema, children }: FormProps) {
    const methods = useForm({
        resolver: zodResolver(valdiationSchema)
    })

  return <FormProvider {...methods}>{children}</FormProvider>
}