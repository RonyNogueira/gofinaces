import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  UserWrapper,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionsList

} from './styles'


interface FlatListProps{
  item: TransactionCardProps
}

export function Dashboard() {
  const data =[
    {
      id:'1',
    type:'positive',
    title:'Desenvolvimento de site',
    amount:'R$ 12.000,00',
    category:{
      name:'vendas',
      icon:'dollar-sign'
    },
    date:'20/09/2022'
  },
  {
    id:'2',
    type:'negative',
    title:'Hamburgueria',
    amount:'R$ 59,00',
    category:{
      name:'Alimentação',
      icon:'coffee'
    },
    date:'20/09/2022'
  },
  {
    id:'3',
    type:'negative',
    title:'Aluguel',
    amount:'R$ 1.200,00',
    category:{
      name:'Casa',
      icon:'shopping-bag'
    },
    date:'20/09/2022'
  }
]
  return (
    <Container>

      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: "https://avatars.githubusercontent.com/u/17484905?v=4" }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Rony</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard type='up' title='Entradas' amount='14.400,00' lastTransaction='Última entrada dia 13 de abril' />
        <HighlightCard type='down' title='Saídas' amount='1.259,00' lastTransaction='Última saída dia 13 de abril' />
        <HighlightCard type='total' title='Total' amount='16.141,00' lastTransaction='01 á 16 de abril' />
      </HighlightCards>

     
      <Transactions>
        <Title>Listagem</Title>
        <TransactionsList 
          data={data}
          renderItem={({item}:FlatListProps)=> <TransactionCard data={item}/>}

        />
        
        
      </Transactions>

    </Container>
  )
}
