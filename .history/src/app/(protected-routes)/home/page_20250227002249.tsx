import React from 'react'

import type { Metadata } from 'next';
import Grid from '@mui/material/Unstable_Grid2';
import dayjs from 'dayjs';
import { TasksProgress } from '@/components/Dashboard/cards/tasks-progress';
import { CardBudget } from '@/components/Dashboard/cards/cardBudget';
import { Sales } from '@/components/Dashboard/graficobarra/sales';
import { Traffic } from '@/components/Dashboard/graficopizza/traffic';


export const metadata = { title: `Overview | Dashboard ` } satisfies Metadata;

export default function Home () {
  return (
    <Grid container spacing={3}>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Custo médio por Viagem" imgAvatar= "CurrencyDollar" diff={12} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="R$ 100,00" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Quantidade de Viagens Concluídas" imgAvatar= "Users" diff={16} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="1.6k" />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <TasksProgress  sx={{ height: '100%', borderRadius: 3 }} value={75.5} />
      </Grid>
      <Grid lg={3} sm={6} xs={12}>
        <CardBudget tittle="Desempenho dos Motoristas" imgAvatar= "Receipt" diff={12} trend="down" sx={{ height: '100%', borderRadius: 3 }} value="$15k" />
      </Grid>
      
      <Grid lg={8} xs={12}>
        <Sales
          chartSeries={[
            { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
            { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
          ]}
          sx={{ height: '100%' }}
        />
      </Grid>

      <Grid lg={4} md={6} xs={12}>
        <Traffic chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
      </Grid>
    </Grid>  
    
  )
}
