import React from 'react'

import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import { TasksProgress } from '@/components/Dashboard/cards/tasks-progress';
import { CardBudget } from '@/components/Dashboard/cards/cardBudget';
import { Sales } from '@/components/Dashboard/graficobarra/sales';
import { LatestOrders } from '@/components/Dashboard/listorders/latest-orders';


export const metadata = { title: `Overview | Dashboard ` } satisfies Metadata;

export default function Home () {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Custo médio por Viagem" imgAvatar= "CurrencyDollar" diff={12} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="R$ 100,00" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Quantidade de Viagens Concluídas" imgAvatar= "Users" diff={16} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="250" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress  sx={{ height: '100%', borderRadius: 3 }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Desempenho dos Motoristas" imgAvatar= "Receipt" diff={12} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="$15k" />
      </Grid>
      
      <Grid lg={6} xs={6}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>

      {/* <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid> */}

      <Grid lg={6} md={6} xs={12}>
        <LatestOrders
          orders={[
            {
              id: 'ORD-007',
              customer: { name: 'Ekaterina Tankova' },
              amount: 30.5,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-006',
              customer: { name: 'Cao Yu' },
              amount: 25.1,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-004',
              customer: { name: 'Alexa Richardson' },
              amount: 10.99,
              status: 'refunded',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-003',
              customer: { name: 'Anje Keizer' },
              amount: 96.43,
              status: 'pending',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-002',
              customer: { name: 'Clarke Gillebert' },
              amount: 32.54,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
            {
              id: 'ORD-001',
              customer: { name: 'Adam Denisov' },
              amount: 16.76,
              status: 'delivered',
              createdAt: dayjs().subtract(10, 'minutes').toDate(),
            },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>
    </Grid>  
    
  )
}
