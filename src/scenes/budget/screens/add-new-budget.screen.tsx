import React from 'react'
import styled from 'styled-components/native';
import { Controller } from 'react-hook-form';

import { useAddNewBudgetDetails } from '../hooks/use-add-new-budget-details.hook';

export default () => {
    const { handleSubmit, navigation, isValid, control} = useAddNewBudgetDetails()
    const onSubmit = (data: any) => {
        console.log(data)
        navigation.navigate("New Budget Items")
    }
  return (
    <Container>
        <ContentContainer>
            <Space>
                <Title>Add Details</Title>
                <BorderLine />
            </Space>

            <Space>
                <Label>Title</Label>
                <Controller
                    control={control}
                    name="title"
                    render={({ field: { onChange, onBlur, value}}) => (
                        <TextField
                            value={value}
                            onBlur={onBlur}
                            onChangeText={(text: string) => onChange(text)}
                        />
                    )}
                />
                <Label>{isValid}</Label>
            </Space>

            <Space>
                <Controller
                    control={control}
                    name="period"
                    render={({ field: {value} }) => (
                        <TextField value={value} />
                    )}
                />
            </Space>
        </ContentContainer>
        
        <SaveButton disabled={!isValid} onPress={handleSubmit(onSubmit)}>
            <ButtonTitle>Next</ButtonTitle>
        </SaveButton>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    background-color: #EDEADE;
`

const ContentContainer = styled.View`
    width: 90%;
    border-radius: 20px;
    background-color: #fff;
    padding: 20px;
`

const Space = styled.View`
    margin-bottom: 20px;
`

const Title = styled.Text`
    font-weight: 700;
    font-size: 18px;
    padding-bottom: 10px;
`

const BorderLine = styled.View`
    border-top-color: #c0c0c0;
    border-width: 1px;
`

const Label = styled.Text`
    font-size: 18px;
    margin-bottom: 5px;
`

const TextField = styled.TextInput`
    borderColor: #ccc;
    border-radius: 8px;
    border-width: 2px;
    padding: 20px;
    font-size: 18px;
`

const SaveButton = styled.TouchableOpacity`
    background-color: #000;
    width: 90%;
    padding: 20px;
    border-radius: 12px;
`

const ButtonTitle = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    text-align: center;
`


