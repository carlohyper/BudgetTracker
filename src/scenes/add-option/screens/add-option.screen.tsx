import React, { useEffect } from 'react'
import styled from 'styled-components/native';
import {MaterialCommunityIcons} from '@expo/vector-icons';

import { AddRouteProps } from '@types';

export default function ({ navigation }: AddRouteProps) {

  return (
    <Container>
      <ListOptions>
        <ListItem onPress={() => navigation.navigate("Add Expense")}>
            <ListTitleContainer>
                <MaterialCommunityIcons name="store-plus-outline" size={28} color="#81d8d0" />
                <ListTitle>New expense</ListTitle>
            </ListTitleContainer>

            <ListTitle>+</ListTitle>
        </ListItem>
        
        <ListItem onPress={() => navigation.navigate("New Budget")}>
            <ListTitleContainer>
                <MaterialCommunityIcons name="playlist-edit" size={30} color="#81d8d0" />
                <ListTitle>New budget</ListTitle>
            </ListTitleContainer>

            <ListTitle>+</ListTitle>
        </ListItem>

        <ListItem>
            <ListTitleContainer>
            <MaterialCommunityIcons name="wallet" size={30} color="#81d8d0" />
                <ListTitle>New wallet</ListTitle>
            </ListTitleContainer>

            <ListTitle>+</ListTitle>
        </ListItem>
      </ListOptions>
    </Container>
  )
}

const Container = styled.View`
    flex: 1;
    align-items: center;
`

const ListOptions = styled.View`
    row-gap: 40px;
    width: 90%;
    margin-top: 50px;
`

const ListItem = styled.TouchableOpacity`
    background-color: #fff;
    border-radius: 12px;
    padding: 50px;
    flex-direction: row;
    justify-content: space-between;
`

const ListTitleContainer = styled.View`
    flex-direction: row;
    align-items: center;
`

const ListTitle = styled.Text`
    font-size: 28px;
    margin-left: 12px;
    font-weight: 800
`